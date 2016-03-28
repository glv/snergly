(ns snergly.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [snergly.util :refer [xact!]])
  (:require [cljs.core.async :as async]
            [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [snergly.algorithms :as algs]
            [snergly.animation :as anim]
            [snergly.protocols :as protocols]
            ))

(enable-console-print!)

(declare reconciler)

(def ui
  (reify protocols/UI
    (report-status [_ msg]
      (xact! reconciler (snergly.core/set-status {:status msg})))
    (report-update [_ msg grid]
      (xact! reconciler
             (snergly.core/set-status {:status msg})
             (snergly.core/set-grid {:grid grid})))))

(def init-data
  {;; application initialization
   :app/algorithms (sort algs/algorithm-names)
   :app/analyses   ["none" "distances" "path" "longest path"]

   :maze {:animation {:active   nil
                      :animator (snergly.animation/animator (async/chan))
                      :grid     nil
                      }

          :params {:algorithm ""
                   :rows      10
                   :columns   10
                   :cell-size 10
                   :analysis  "none"
                   :start-row 0
                   :start-col 0
                   :end-row   0
                   :end-col   0
                   }
          }
  })

;; -----------------------------------------------------------------------------
;; Parsing

(defmulti coerce-param (fn [p v] p))

(run! #(derive % ::integer)
      [::rows ::columns ::cell-size ::start-row ::start-col ::end-row ::end-col])

(defmethod coerce-param :default
  [_ val]
  val)

(defmethod coerce-param ::integer
  [_ val]
  (js/parseInt val))



(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state query] :as env} key params]
  (if-let [value (@state key)]
    {:value value}
    {:value :not-found}))



(defmulti mutate om/dispatch)

(defmethod mutate 'snergly.core/set-maze-param
  [{:keys [state]} _ {:keys [param value]}]
  {:value {:keys {:maze {:params [param]}}}
   :action #(swap! state assoc-in [:maze :params param] (coerce-param param value))})

(defmethod mutate 'snergly.core/set-status
  [{:keys [state]} _ {:keys [status]}]
  (let [old-status (get-in @state [:maze :animation :active])]
    (when-not (= status old-status)
      (println (str "STATUS CHANGE: " status))
      {:value {:keys {:maze {:params [:active]}}}
       :action #(swap! state assoc-in [:maze :animation :active] status)})))

(defmethod mutate 'snergly.core/set-grid
  [{:keys [state]} _ {:keys [grid]}]
  {:value {:keys {:maze {:params [:grid]}}}
   :action #(swap! state assoc-in [:maze :animation :grid] grid)})

;; -----------------------------------------------------------------------------
;; Components

(defn ready-to-go [{:keys [algorithm rows columns]}]
  (and (not= "" algorithm)
       (and (integer? rows) (> rows 1) (< rows 100))
       (and (integer? columns) (> columns 1) (< columns 100))))

(defn animate-if-active [{:keys [animation params]} canvas]
  (let [{:keys [active grid animator]} animation
        {:keys [cell-size]} params]
    (when active
      (protocols/animate-frame animator grid cell-size canvas))))

(defui MazeDisplay
  static om/IQuery
  (query [this]
    '[:maze])
  Object
  (componentDidMount [this]
    (animate-if-active (om/props this) (om.next/react-ref this "maze-canvas")))
  (componentDidUpdate [this _ _]
    (animate-if-active (om/props this) (om.next/react-ref this "maze-canvas")))
  (render [this]
    (let [{:keys [animation params]} (om/props this)
          {:keys [rows columns cell-size]} params
          {:keys [active]} animation]
      (let [height (inc (* cell-size rows))
            width (inc (* cell-size columns))]
        (dom/div nil
                 (dom/div nil (or active "\u00a0")) ; &nbsp;
                 (dom/canvas #js {:id     "c1"
                                  :height height
                                  :width  width
                                  :ref "maze-canvas"})
                 )))))

(def maze-display (om/factory MazeDisplay))

(defui MazeControlPanel
  static om/IQuery
  (query [this]
    '[:app/algorithms :app/analyses :maze])
  Object
  (render [this]
    (let [{:keys [app/algorithms app/analyses maze]} (om/props this)
          {:keys [params animation]} maze
          {:keys [algorithm rows columns
                  analysis start-row start-col end-row end-col]} params
          {:keys [active grid]} animation
          modify (fn [maze-param e]
                   ;; Note that the symbol doesn't need to be explicitly namespace-qualified here, but if I used
                   ;; xact!, it would be.
                   (om.next/transact! this `[(set-maze-param {:param ~maze-param :value ~(aget e "target" "value")})]))
          go-async (fn [maze e]
                     (protocols/start-animation (get-in maze [:animation :animator]) (:params maze) ui))
          ]
      ;; TODO: remember how to disable form elements by group, rather than one-at-a-time.
      ;; TODO: when rows/cols are reduced, adjust analysis params downward if necessary.
      (dom/div
        nil
        (dom/div
          nil
          (dom/label nil
                     "Algorithm: "
                     (dom/select #js {:value    algorithm
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
                     (dom/input #js {:type     "number"
                                     :disabled active
                                     :value    rows
                                     :min      2
                                     :max      99
                                     :style    #js {:width "30px"}
                                     :onInput  (partial modify :rows)}))
          (dom/label nil
                     "Columns: "
                     (dom/input #js {:type     "number"
                                     :disabled active
                                     :value    columns
                                     :min      2
                                     :max      99
                                     :style    #js {:width "30px"}
                                     :onInput  (partial modify :columns)})))
        (dom/div
          nil
          (dom/label nil
                     "Analysis: "
                     (dom/select #js {:value    analysis
                                      :disabled active
                                      :onChange (partial modify :analysis)}
                                 (map (fn [name] (dom/option #js {:key name} name)) analyses))))
        (when (contains? #{"distances" "path"} analysis)
          (dom/div
            nil
            (dom/label nil
                       "Start Row: "
                       (dom/input #js {:type     "number"
                                       :disabled active
                                       :value    start-row
                                       :min      0
                                       :max      (dec rows)
                                       :style    #js {:width "30px"}
                                       :onInput  (partial modify :start-row)}))
            (dom/label nil
                       "Start Column: "
                       (dom/input #js {:type     "number"
                                       :disabled active
                                       :value    start-col
                                       :min      0
                                       :max      (dec columns)
                                       :style    #js {:width "30px"}
                                       :onInput  (partial modify :start-col)}))))
        (when (= "path" analysis)
          (dom/div
            nil
            (dom/label nil
                       "End Row: "
                       (dom/input #js {:type     "number"
                                       :disabled active
                                       :value    end-row
                                       :min      0
                                       :max      (dec rows)
                                       :style    #js {:width "30px"}
                                       :onInput  (partial modify :end-row)}))
            (dom/label nil
                       "End Column: "
                       (dom/input #js {:type     "number"
                                       :disabled active
                                       :value    end-col
                                       :min      0
                                       :max      (dec columns)
                                       :style    #js {:width "30px"}
                                       :onInput  (partial modify :end-col)}))))
        (dom/div
          nil
          (dom/button #js {:id       "gobutton"
                           :disabled (or active (not (ready-to-go params)))
                           :onClick  (partial go-async maze)}
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

(defn rrun
  "Randomize all of the maze parameters and run."
  []
  (let [algorithm        (rand-nth (:app/algorithms init-data))
        analysis         (rand-nth (:app/analyses init-data))
        valid-dimensions (range 5 13)
        rdimen           (rand-nth valid-dimensions)
        cdimen           (rand-nth valid-dimensions)]
    (xact! reconciler
           (snergly.core/set-maze-param {:param :algorithm :value algorithm})
           (snergly.core/set-maze-param {:param :rows      :value rdimen})
           (snergly.core/set-maze-param {:param :columns   :value cdimen})
           (snergly.core/set-maze-param {:param :analysis  :value analysis})
           (snergly.core/set-maze-param {:param :start-row :value (rand-int rdimen)})
           (snergly.core/set-maze-param {:param :start-col :value (rand-int cdimen)})
           (snergly.core/set-maze-param {:param :end-row   :value (rand-int rdimen)})
           (snergly.core/set-maze-param {:param :end-col   :value (rand-int cdimen)})
           )
    (js/requestAnimationFrame #(.click (gdom/getElement "gobutton")))
    (get-in (q [:maze]) [:maze :params])))

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
;; Run a random test:
;; (rrun)
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
