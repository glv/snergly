(ns snergly.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [goog.dom :as gdom]  ; dom creation and manipulation
            [om.next :as om :refer-macros [defui]] ; om
            [om.core :as omcore]
            [om.dom :as dom] ; layer over gdom, maybe?
            [snergly.algorithms :as algs]
            [snergly.grid :as grid]
            [snergly.util :as util]
            [snergly.image :as image]
            ))

(enable-console-print!)

(declare reconciler)

(def init-data
  {:app/algorithms (sort algs/algorithm-names)
   :app/analyses ["none" "distances" "path" "longest path"]
   :maze {:algorithm ""
          :rows 10
          :columns 10
          :cell-size 10
          :grid nil
          :channel nil

          :analysis "none"
          :start-row 0
          :start-col 0
          :end-row 0
          :end-col 0}})

(defn run [algorithm-name rows columns]
  (let [algorithm (algs/synchronous-algorithm algorithm-name)]
    (algorithm (grid/make-grid rows columns))))

(defn produce-analysis-async [maze {:keys [analysis start-row start-col end-row end-col] :as maze-params} maze-chan]
  (println (str "analysis: " analysis))
  (go-loop []
           ;(condp = analysis
           ;  "distances" ()
           ;  "path" true
           ;  "longest path" true
           ;  )
           (let [distances (async/<! maze-chan)]
             (println "Once through the analysis loop")
             (if-not distances
               (println "No distances")
               (do
                 (println (str "Distances: " distances))
                 (recur))))
    )
  (algs/find-distances maze [start-row start-col] maze-chan true)
  )

(defn produce-maze-async [{:keys [rows columns algorithm] :as maze-params}]
  (let [intermediate-chan (async/chan)
        _ (println (str "algorithm: " algorithm))
        algorithm-fn (algs/algorithm-functions algorithm)
        _ (println (str "algorithm-fn: "))
        result-chan (algorithm-fn (grid/make-grid rows columns) intermediate-chan)]
    (println (str "result-chan: " result-chan))
    (go-loop []
             (println "in go loop")
             (let [new-maze (async/<! intermediate-chan)]
               (print (str "new-maze "))
               (if new-maze
                 (do
                   (println "was not nil!")
                   (om/transact! reconciler `[(snergly.core/set-maze {:maze-key :grid :value ~(atom new-maze)})])
                   (async/<! (async/timeout 1))
                   (recur))
                 (let [maze (async/<! result-chan)]
                   (println " was nil!")
                   (om/transact! reconciler `[(snergly.core/set-maze {:maze-key :grid :value ~(atom maze)})])))))))

(defn run-animation [maze-params]
  (go
    (let [maze (async/<! (produce-maze-async maze-params))
          ; maze (async/<! (produce-analysis-async maze maze-params))
          ])))

  ;(let [maze-chan (async/chan)
  ;      _ (println (str "algorithm: " algorithm))
  ;      algorithm-fn (algs/algorithm-functions algorithm)]
  ;  (om/transact! reconciler `[(snergly.core/set-maze {:maze-key :channel :value ~maze-chan})])
  ;  (go-loop [last-maze nil]
  ;      (let [new-maze (async/<! maze-chan)]
  ;           (if new-maze
  ;             (do
  ;               (om/transact! reconciler `[(snergly.core/set-maze {:maze-key :grid :value ~(atom new-maze)})])
  ;               (async/<! (async/timeout 1))
  ;               (recur new-maze))
  ;             (do
  ;               (async/<! (produce-analysis-async last-maze maze-params maze-chan))
  ;               (om/transact! reconciler `[(snergly.core/set-maze {:maze-key :channel :value ~nil})])))))
  ;  (algorithm-fn (grid/make-grid rows columns) maze-chan true)))

;; -----------------------------------------------------------------------------
;; Parsing

(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

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

(defmethod produce-maze-value :grid
  [_ new-value {:keys [maze] :as state}]
  (let [{:keys [algorithm rows columns grid]} maze]
    ;(if new-value new-value grid)
    new-value
    ;(run algorithm rows columns)
    ))

(defmethod produce-maze-value :channel
  [_ value _]
  value)

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
           (not= columns (:columns grid))))
  )

(defui MazeDisplay
  static om/IQuery
  (query [this]
    '[{:maze [:grid :rows :columns :cell-size :algorithm]}])
  Object
  (componentDidMount [this]
    (let [{:keys [grid cell-size] :as maze} (om/props this)
          c (.-_canvas this)
          g (.getContext c "2d")]
      (image/image-grid g @grid cell-size)
      )
    )
  (componentDidUpdate [this prev-props prev-state]
    (let [{:keys [grid cell-size] :as maze} (om/props this)
          c (.-_canvas this)
          g (.getContext c "2d")]
      (image/image-grid g @grid cell-size) ;; ??? remove assoc to optimize animation once fixed.
      )
    )
  (render [this]
    (let [{:keys [grid rows columns algorithm cell-size] :as maze} (om/props this)]
      (let [height (inc (* cell-size rows))
            width (inc (* cell-size columns))]
        (dom/div nil
                 (dom/canvas #js {:id "c1"
                                  :height height
                                  :width width
                                  :ref #(aset this "_canvas" %)})
                            )))))

(def maze-display (om/factory MazeDisplay))

(defui MazeControlPanel
  static om/IQuery
  (query [this]
    '[:app/algorithms :app/analyses {:maze [:algorithms :rows :columns :grid :analysis :start-row :start-col :end-row :end-col]}])
  Object
  (render [this]
    (let [{:keys [app/algorithms app/analyses maze]} (om/props this)
          {:keys [algorithm rows columns grid
                  analysis start-row start-col end-row end-col]} maze
          modify (fn [maze-key e]
                   (om/transact! this `[(snergly.core/set-maze {:maze-key ~maze-key :value ~(aget e "target" "value")})]))
          go-async (fn [maze e] (run-animation maze))]
      (dom/div
        nil
        (dom/div
          nil
          (dom/span nil "Algorithm: ")
          (dom/select #js {:value algorithm
                           :onChange (partial modify :algorithm)}
                      (concat [(dom/option #js {:key ""} "")]
                              (map
                                (fn [name]
                                  (dom/option #js {:key name} name))
                                algorithms))))
        (dom/div
          nil
          (dom/span nil "Rows: ")
          (dom/input #js {:type "number"
                          :value rows
                          :min 2
                          :max 99
                          :style #js {:width "30px"}
                          :onInput (partial modify :rows)})
          (dom/span nil "Columns: ")
          (dom/input #js {:type "number"
                          :value columns
                          :min 2
                          :max 99
                          :style #js {:width "30px"}
                          :onInput (partial modify :columns)}))
        (dom/div
          nil
          (dom/span nil "Analysis: ")
          (dom/select #js {:value analysis
                           :onChange (partial modify :analysis)}
                      (map (fn [name] (dom/option #js {:key name} name)) analyses)))
        (when (contains? #{"distances" "path"} analysis)
          (dom/div
            nil
            (dom/span nil "Start Row: ")
            (dom/input #js {:type "number"
                            :value start-row
                            :min 0
                            :max (dec rows)
                            :style #js {:width "30px"}
                            :onInput (partial modify :start-row)})
            (dom/span nil "Start Column: ")
            (dom/input #js {:type "number"
                            :value start-col
                            :min 0
                            :max (dec columns)
                            :style #js {:width "30px"}
                            :onInput (partial modify :start-col)})))
        (when (= "path" analysis)
          (dom/div
            nil
            (dom/span nil "End Row: ")
            (dom/input #js {:type "number"
                            :value end-row
                            :min 0
                            :max (dec rows)
                            :style #js {:width "30px"}
                            :onInput (partial modify :end-row)})
            (dom/span nil "End Column: ")
            (dom/input #js {:type "number"
                            :value end-col
                            :min 0
                            :max (dec columns)
                            :style #js {:width "30px"}
                            :onInput (partial modify :end-col)})))
        (dom/div
          nil
          ;(dom/button #js {:disabled (not (ready-to-go maze))
          ;                 :onClick  (partial modify :grid)
          ;                 }
          ;            "Go!")
          (dom/button #js {:disabled (not (ready-to-go maze))
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
