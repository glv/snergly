(ns snergly.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.core :as omcore]
            [om.dom :as dom]
            [snergly.algorithms :as algs]
            [snergly.grid :as grid]
            [snergly.util :as util]
            [snergly.image :as image]
            ))

(enable-console-print!)

(declare reconciler)

(def sync-by-frame true)

(defn set-maze-params! [& kvpairs]
  (assert (= 0 (mod (count kvpairs) 2)) "Arguments must be pairs of keys and values")
  (om/transact! reconciler
                (mapv (fn [[k v]] `(snergly.core/set-maze {:maze-key ~k :value ~v}))
                      (partition 2 kvpairs))))

;; I shouldn't have to do this; the "right way", apparently, is to set the
;; ref as a property on the component.  And that works great in figwheel
;; development mode, but in a production build with optimizations on, it
;; doesn't work at all.  This is the only way I've been able to get it to
;; work in both.
(def thecanvas (atom nil))

(def init-data
  {:app/algorithms (sort algs/algorithm-names)
   :app/analyses ["none" "distances" "path" "longest path"]
   :maze {:algorithm ""
          :rows      10
          :columns   10
          :cell-size 10
          :grid      nil
          :anim-chan (async/chan)

          :analysis  "none"
          :start-row 0
          :start-col 0
          :end-row   0
          :end-col   0

          :active    nil}})

(defn sync-chan [frame-chan]
  (if sync-by-frame
    frame-chan
    (async/timeout 0)))

(defn produce-distances-async [{:keys [start-row start-col anim-chan] :as maze-params} grid-key color-family maze]
  (let [prev-distances (:distances maze)
        [start-row start-col] (if prev-distances (:max-coord prev-distances) [start-row start-col])
        analysis-fn #(algs/distances-seq maze [start-row start-col])
        result-chan (algs/seq-channel analysis-fn)]
    (set-maze-params! :active "Finding distances …")
    (go-loop [grid maze]
             (let [distances (async/<! result-chan)]
               (if distances
                 (let [grid (assoc grid :distances distances
                                        grid-key {:distances distances
                                                  :color-family color-family
                                                  :max-distance (:max distances)})]
                   (set-maze-params! :grid (atom grid))
                   (async/<! (sync-chan anim-chan))
                   (recur grid)))
               grid))))

(defn produce-path-async [{:keys [end-row end-col anim-chan] :as maze-params} longest? maze]
  (let [prev-distances (:distances maze)
        [end-row end-col] (if longest? (:max-coord prev-distances) [end-row end-col])
        analysis-fn #(algs/path-seq maze prev-distances [end-row end-col])
        result-chan (algs/seq-channel analysis-fn)]
    (set-maze-params! :active (str "Plotting path (" (inc (:max prev-distances)) " cells long) …"))
    (go-loop [grid maze]
             (let [distances (async/<! result-chan)]
               (if distances
                 (let [grid (assoc grid :path {:distances distances
                                               :color-family :red})]
                   (set-maze-params! :grid (atom grid))
                   (async/<! (sync-chan anim-chan))
                   (recur grid)))
               grid))))

(defn analysis-steps [{:keys [analysis] :as maze-params}]
  (println (str "analysis: " analysis))
  (condp = analysis
    "none" []
    "distances" [(partial produce-distances-async maze-params :dist1 :green)]
    "path" [(partial produce-distances-async maze-params :dist1 :green)
            (partial produce-path-async maze-params false)]
    "longest path" [(partial produce-distances-async maze-params :dist1 :green)
                    (partial produce-distances-async maze-params :dist2 :blue)
                    (partial produce-path-async maze-params true)]))

(defn produce-maze-async [{:keys [rows columns algorithm anim-chan] :as maze-params}]
  (println (str "algorithm: " algorithm))
  (set-maze-params! :active "Carving maze …")
  (let [grid (grid/make-grid rows columns)
        algorithm-fn #((algs/algorithm-functions algorithm) grid)
        result-chan (algs/seq-channel algorithm-fn)]
    (go
      (set-maze-params! :grid (atom grid))
      (async/<! (sync-chan anim-chan))
      (loop [prev-maze nil]
        (if-let [new-maze (async/<! result-chan)]
          (do
            (set-maze-params! :grid (atom new-maze))
            (async/<! (sync-chan anim-chan))
            (recur new-maze))
          (do
            (set-maze-params! :active nil)
            prev-maze))))))

(defn run-animation [maze-params]
  (let [steps (cons (fn [_] (produce-maze-async maze-params))
                    (analysis-steps maze-params))]
    (go
      (loop [grid nil
             [step & steps] steps]
        (when step
          (recur (async/<! (step grid))
                 steps)))
      (set-maze-params! :active nil))))

;; -----------------------------------------------------------------------------
;; Parsing

(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state] :as env} key params]
    (if-let [value (@state key)]
      {:value value}
      {:value :not-found}))

(defmulti produce-maze-value (fn [k v s] k))

(defn mutate [{:keys [state] :as env} key {:keys [maze-key value] :as params}]
  (if (= 'snergly.core/set-maze key)
    (let [new-value (produce-maze-value maze-key value @state)]
      {:value {:keys {:maze [maze-key]}}
       :action #(swap! state assoc-in [:maze maze-key] new-value)})
    {:value nil}))

(defmethod produce-maze-value :algorithm
  [_ form-value _]
  form-value)

(defmethod produce-maze-value :analysis
  [_ form-value _]
  form-value)

(defmethod produce-maze-value :active
  [_ form-value _]
  form-value)

(defmethod produce-maze-value :anim-chan
  [_ form-value _]
  form-value)

(defmethod produce-maze-value :grid
  [_ new-value {:keys [maze] :as state}]
  (let [{:keys [algorithm rows columns grid]} maze]
    new-value))

(defmethod produce-maze-value :default
  [_ form-value _]
  (js/parseInt form-value))

;; -----------------------------------------------------------------------------
;; Components

(defn ready-to-go [{:keys [algorithm rows columns grid] :as maze}]
  (and (not= "" algorithm)
       (and (integer? rows) (> rows 1) (< rows 100))
       (and (integer? columns) (> columns 1) (< columns 100))
       (or (nil? grid)
           (not= algorithm (:algorithm-name grid))
           (not= rows (:rows grid))
           (not= columns (:columns grid)))))

(defui MazeDisplay
  static om/IQuery
  (query [this]
    '[{:maze [:grid :rows :columns :cell-size :algorithm :active :anim-chan]}])
  Object
  (componentDidMount [this]
    (let [{:keys [grid cell-size anim-chan] :as maze} (om/props this)
          c @thecanvas
          g (.getContext c "2d")]
      (image/image-grid g @grid cell-size)
      (go (async/>! anim-chan true))
      ))
  (componentDidUpdate [this prev-props prev-state]
    (let [{:keys [grid cell-size anim-chan] :as maze} (om/props this)
          c @thecanvas
          g (.getContext c "2d")]
      (image/image-grid g @grid cell-size)
      (go (async/>! anim-chan true))
      ))
  (render [this]
    (let [{:keys [grid rows columns algorithm cell-size active] :as maze} (om/props this)]
      (let [height (inc (* cell-size rows))
            width (inc (* cell-size columns))]
        (dom/div nil
                 (dom/div nil (or active "\u00a0")) ; &nbsp;
                 (dom/canvas #js {:id "c1"
                                  :height height
                                  :width width
                                  :ref (fn [c]
                                         (when-not (nil? c)
                                           (reset! thecanvas c)))})
                            )))))

(def maze-display (om/factory MazeDisplay))

(defui MazeControlPanel
  static om/IQuery
  (query [this]
    '[:app/algorithms :app/analyses
      {:maze [:algorithm :rows :columns :grid
              :analysis :start-row :start-col :end-row :end-col
              :active]}])
  Object
  (render [this]
    (let [{:keys [app/algorithms app/analyses maze]} (om/props this)
          {:keys [algorithm rows columns grid
                  analysis start-row start-col end-row end-col
                  active]} maze
          modify (fn [maze-key e]
                   (om/transact! this `[(snergly.core/set-maze {:maze-key ~maze-key :value ~(aget e "target" "value")})]))
          go-async (fn [maze e] (run-animation maze))]
      ;; TODO: remember how to disable form elements by group, rather than one-at-a-time.
      ;; TODO: when rows/cols are reduced, adjust analysis params downward if necessary.
      (dom/div
        nil
        (dom/div
          nil
          (dom/label nil
                     "Algorithm: "
                     (dom/select #js {:value algorithm
                                      :disabled active
                                      :onChange (partial modify :algorithm)}
                                 (concat [(dom/option #js {:key ""} "")]
                                         (map
                                           (fn [name]
                                             (dom/option #js {:key name} name))
                                           algorithms)))))
        (dom/div
          nil
          (dom/label nil
                     "Rows: "
                     (dom/input #js {:type "number"
                                     :disabled active
                                     :value rows
                                     :min 2
                                     :max 99
                                     :style #js {:width "30px"}
                                     :onInput (partial modify :rows)}))
          (dom/label nil
                     "Columns: "
                     (dom/input #js {:type "number"
                                     :disabled active
                                     :value columns
                                     :min 2
                                     :max 99
                                     :style #js {:width "30px"}
                                     :onInput (partial modify :columns)})))
        (dom/div
          nil
          (dom/label nil
                     "Analysis: "
                     (dom/select #js {:value analysis
                                      :disabled active
                                      :onChange (partial modify :analysis)}
                                 (map (fn [name] (dom/option #js {:key name} name)) analyses))))
        (when (contains? #{"distances" "path"} analysis)
          (dom/div
            nil
            (dom/label nil
                       "Start Row: "
                       (dom/input #js {:type "number"
                                       :disabled active
                                       :value start-row
                                       :min 0
                                       :max (dec rows)
                                       :style #js {:width "30px"}
                                       :onInput (partial modify :start-row)}))
            (dom/label nil
                       "Start Column: "
                       (dom/input #js {:type "number"
                                       :disabled active
                                       :value start-col
                                       :min 0
                                       :max (dec columns)
                                       :style #js {:width "30px"}
                                       :onInput (partial modify :start-col)}))))
        (when (= "path" analysis)
          (dom/div
            nil
            (dom/label nil
                      "End Row: "
                       (dom/input #js {:type "number"
                                       :disabled active
                                       :value end-row
                                       :min 0
                                       :max (dec rows)
                                       :style #js {:width "30px"}
                                       :onInput (partial modify :end-row)}))
            (dom/label nil
                      "End Column: "
                       (dom/input #js {:type "number"
                                       :disabled active
                                       :value end-col
                                       :min 0
                                       :max (dec columns)
                                       :style #js {:width "30px"}
                                       :onInput (partial modify :end-col)}))))
        (dom/div
          nil
          (dom/button #js {:disabled (or active (not (ready-to-go maze)))
                           :onClick (partial go-async maze)}
                      "Go!"))
        (when grid (dom/div nil (maze-display maze)))
        ))))

(def maze-control-panel (om/factory MazeControlPanel))

;; -----------------------------------------------------------------------------
;; Initialization


(def reconciler
  (om/reconciler {:state init-data
                  :parser (om/parser {:read read :mutate mutate})
                  :logger nil}))

(om/add-root! reconciler
              MazeControlPanel (gdom/getElement "app"))

;; -----------------------------------------------------------------------------
;; Utilities

(defn q [query]
  (let [config (:config reconciler)
        parser (:parser config)]
    (parser config query)))

(defn t! [update]
  (om.next/transact! reconciler update))

(defn h* []
  (.-arr (-> reconciler :config :history)))

(defn -huuid [uuid-or-index]
  (if (integer? uuid-or-index)
    (get (h*) uuid-or-index)
    uuid-or-index))

(defn h
  ([]
   (doseq [uuid (h*)]
     (println (str "#uuid \"" uuid "\"")))
   nil)
  ([uuid-or-index]
   (let [uuid (-huuid uuid-or-index)]
     [uuid (get @(.-index (-> reconciler :config :history)) uuid)])))

(defn h! [uuid-or-index]
  (om/from-history reconciler (-huuid uuid-or-index)))

(defn p [jsobj]
  (goog.object/forEach jsobj (fn [val key obj] (println (str "Key: " key)))))


;; REPL things:
;;
;; Get to the right namespace:
;; (in-ns 'snergly.core)
;;
;; Read:
;; (q [:app/algorithms]
;;
;; Mutate:
;; (t! '[(snergly.core/set-maze {:maze-key :algorithm :value "sidewinder"})])
;;
;; Show all history uuids:
;; (h)
;;
;; Show a history state:
;; (h 2) ; or (h #uuid "9e7160a0-89cc-4482-aba1-7b894a1c54b4")
;;
;; Return to history point:
;; (h! 2) ; or (h! #uuid "9e7160a0-89cc-4482-aba1-7b894a1c54b4")
;;
;; See all the state:
;; @reconciler
;;
;; Find the query for a component:
;; (om/get-query (om/class->any reconciler AnimalsList))
;;
;; Change the query for a component:
;; (om/set-query!
;;   (om/class->any reconciler AnimalsList)
;;   {:params {:start 0 :end 5}})
