(ns snergly.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [snergly.util :refer [xact!]])
  (:require [cljs.core.async :as async]
            [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [snergly.algorithms :as algs]
            [snergly.animation :as anim]
            [snergly.image :as image]
            [snergly.protocols :as protocols]
            ))

(enable-console-print!)

(declare reconciler)

(def ui
  (reify protocols/UI
    (report-status [_ msg]
      (xact! reconciler (snergly.core/set-status {:status msg})))
    (report-update [_ r-state]
      (xact! reconciler
             (snergly.core/set-status {:status (:status r-state)})
             (snergly.core/set-render-state {:render-state r-state})))))

(def init-data
  {;; application initialization
   :app/algorithms (sort algs/algorithm-names)
   :app/analyses   ["none" "distances" "path" "longest path"]

   :maze {:animation {:active       nil
                      :animator     (anim/animator (async/chan))
                      :cell-size    10
                      :render-state nil
                      }

          :params {:algorithm ""
                   :rows      10
                   :columns   10
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
   :action #(swap! state assoc-in [:maze :params param] value)})

(defmethod mutate 'snergly.core/set-status
  [{:keys [state]} _ {:keys [status]}]
  (let [old-status (get-in @state [:maze :animation :active])]
    (when-not (= status old-status)
      (println (str "STATUS CHANGE: " status))
      {:value {:keys {:maze {:params [:active]}}}
       :action #(swap! state assoc-in [:maze :animation :active] status)})))

(defmethod mutate 'snergly.core/set-render-state
  [{:keys [state]} _ {:keys [render-state]}]
  {:value {:keys {:maze {:params [:render-state]}}}
   :action #(swap! state assoc-in [:maze :animation :render-state] render-state)})

;; -----------------------------------------------------------------------------
;; Components

(defn ready-to-go [{:keys [algorithm rows columns]}]
  (and (not= "" algorithm)
       (and (integer? rows) (> rows 1) (< rows 100))
       (and (integer? columns) (> columns 1) (< columns 100))))

(defn animate-if-active [{:keys [animation]} canvas]
  (let [{:keys [active render-state animator cell-size]} animation]
    (when active
      (let [g (.getContext canvas "2d")]
        (image/image-grid g render-state cell-size)
        (protocols/frame-rendered animator)))))

(defn randomize-params [component algorithms analyses]
  (let [algorithm        (rand-nth algorithms)
        analysis         (rand-nth analyses)
        max-dimen        (js/parseInt (aget (gdom/getElement "max-random-dimen") "value"))
        valid-dimensions (range 5 (inc max-dimen))
        rdimen           (rand-nth valid-dimensions)
        cdimen           (rand-nth valid-dimensions)]
    (xact! component
           (snergly.core/set-maze-param {:param :algorithm :value algorithm})
           (snergly.core/set-maze-param {:param :rows      :value rdimen})
           (snergly.core/set-maze-param {:param :columns   :value cdimen})
           (snergly.core/set-maze-param {:param :analysis  :value analysis})
           (snergly.core/set-maze-param {:param :start-row :value (rand-int rdimen)})
           (snergly.core/set-maze-param {:param :start-col :value (rand-int cdimen)})
           (snergly.core/set-maze-param {:param :end-row   :value (rand-int rdimen)})
           (snergly.core/set-maze-param {:param :end-col   :value (rand-int cdimen)})
           )))

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
          {:keys [rows columns]} params
          {:keys [active render-state cell-size animator]} animation
          go-async (fn [e]
                     (protocols/start-animation animator params ui))]
      (dom/div
        nil
        (dom/button #js {:id       "gobutton"
                         :disabled (or active (not (ready-to-go params)))
                         :onClick  (partial go-async)}
                    "Go!")
        (when render-state
          (let [height (inc (* cell-size rows))
                width (inc (* cell-size columns))]
            (dom/div nil
                     (dom/div nil (or active "\u00a0")) ; &nbsp;
                     (dom/canvas #js {:id     "c1"
                                      :height height
                                      :width  width
                                      :ref "maze-canvas"})
                   )))))))

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
          {:keys [active]} animation
          modify (fn [maze-param e]
                   ;; Note that the symbol doesn't need to be explicitly namespace-qualified here,
                   ;; but using xact! below, it has to be.
                   (om.next/transact! this `[(set-maze-param {:param ~maze-param :value ~(aget e "target" "value")})]))
          modify-int (fn [maze-param e]
                       (let [val (aget e "target" "value")]
                         (if (re-matches #"^\d+$" val)
                           (xact! this (snergly.core/set-maze-param
                                         {:param maze-param
                                          :value (js/parseInt val)})))))
          ]
      ;; TODO: remember how to disable form elements by group, rather than one-at-a-time.
      ;; TODO: when rows/cols are reduced, adjust analysis params downward if necessary.
      (dom/div
        nil
        (dom/fieldset
          #js {:disabled active}
          (dom/legend nil "Maze Parameters")
          (dom/div
            nil
            (dom/label nil
                       "Algorithm: "
                       (dom/select #js {:value    algorithm
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
                                       :value    rows
                                       :min      2
                                       :max      99
                                       :style    #js {:width "30px"}
                                       :onInput  (partial modify-int :rows)}))
            (dom/label nil
                       "Columns: "
                       (dom/input #js {:type     "number"
                                       :value    columns
                                       :min      2
                                       :max      99
                                       :style    #js {:width "30px"}
                                       :onInput  (partial modify-int :columns)})))
          (dom/div
            nil
            (dom/label nil
                       "Analysis: "
                       (dom/select #js {:value    analysis
                                        :onChange (partial modify :analysis)}
                                   (map (fn [name] (dom/option #js {:key name} name)) analyses))))
          (when (contains? #{"distances" "path"} analysis)
            (dom/div
              nil
              (dom/label nil
                         "Start Row: "
                         (dom/input #js {:type     "number"
                                         :value    start-row
                                         :min      0
                                         :max      (dec rows)
                                         :style    #js {:width "30px"}
                                         :onInput  (partial modify-int :start-row)}))
              (dom/label nil
                         "Start Column: "
                         (dom/input #js {:type     "number"
                                         :value    start-col
                                         :min      0
                                         :max      (dec columns)
                                         :style    #js {:width "30px"}
                                         :onInput  (partial modify-int :start-col)}))))
          (when (= "path" analysis)
            (dom/div
              nil
              (dom/label nil
                         "End Row: "
                         (dom/input #js {:type     "number"
                                         :value    end-row
                                         :min      0
                                         :max      (dec rows)
                                         :style    #js {:width "30px"}
                                         :onInput  (partial modify-int :end-row)}))
              (dom/label nil
                         "End Column: "
                         (dom/input #js {:type     "number"
                                         :value    end-col
                                         :min      0
                                         :max      (dec columns)
                                         :style    #js {:width "30px"}
                                         :onInput  (partial modify-int :end-col)}))))
          "or: "
          (dom/button #js {:id       "randbutton"
                           :onClick  #(randomize-params this algorithms analyses)}
                      "Choose random parameters")

          )
        (dom/div nil (maze-display maze)))
      )))

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

(defn rrun
  "Randomize all of the maze parameters and run."
  []
  (let [config (:config reconciler)
        parser (:parser config)
        {:keys [app/algorithms app/analyses]} @(:state config)]
    (randomize-params reconciler algorithms analyses)
    (js/requestAnimationFrame #(.click (gdom/getElement "gobutton")))
    (get-in (parser config [:maze]) [:maze :params])))

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
