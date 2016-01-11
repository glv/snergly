(ns snergly.animation
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [snergly.algorithms :as algs]
            [snergly.grid :as grid]
            [snergly.image :as image]))

;; I really hate having to pass set-maze-params! in here and pass it around
;; everywhere, but it's the expedient way at the moment to avoid a circular
;; namespace dependency now that I've pulled the animation code out into a
;; separate namespace.  This code is going to change a lot, and I'll work on
;; finding a better way after the next round of design revisions.

(def sync-by-frame false)

(defn sync-chan [frame-chan]
  (if sync-by-frame
    frame-chan
    (async/timeout 0)))

(defn produce-distances-async [{:keys [start-row start-col anim-chan] :as maze-params} set-maze-params! grid-key color-family maze]
  (let [prev-distances (:distances maze)
        [start-row start-col] (if prev-distances (:max-coord prev-distances) [start-row start-col])
        analysis-fn #(algs/distances-seq maze [start-row start-col])]
    (set-maze-params! :active "Finding distances …")
    (go-loop [maze maze
              [dist & dists] (analysis-fn)]
             (if dist
               (let [maze (assoc maze :distances dist
                                      grid-key {:distances dist
                                                :color-family color-family
                                                :expected-max-distance (* (grid/grid-size maze) 0.8)})]
                 (set-maze-params! :grid (atom maze))
                 (async/<! (sync-chan anim-chan))
                 (recur maze dists))
               maze))))

(defn produce-path-async [{:keys [end-row end-col anim-chan] :as maze-params} set-maze-params! longest? maze]
  (let [prev-distances (:distances maze)
        [end-row end-col] (if longest? (:max-coord prev-distances) [end-row end-col])
        analysis-fn #(algs/path-seq maze prev-distances [end-row end-col])
        result-chan (algs/seq-channel analysis-fn)]
    (set-maze-params! :active (str "Plotting path (" (inc (:max prev-distances)) " cells long) …"))
    (go-loop [maze maze
              [dist & dists] (analysis-fn)]
             (if dist
               (let [maze (assoc maze :path {:distances dist
                                             :color-family :red})]
                 (set-maze-params! :grid (atom maze))
                 (async/<! (sync-chan anim-chan))
                 (recur maze dists))
               maze))))

(defn analysis-steps [{:keys [analysis] :as maze-params} set-maze-params!]
  (println (str "analysis: " analysis))
  (condp = analysis
    "none" []
    "distances" [(partial produce-distances-async maze-params set-maze-params! :dist1 :green)]
    "path" [(partial produce-distances-async maze-params set-maze-params! :dist1 :green)
            (partial produce-path-async maze-params set-maze-params! false)]
    "longest path" [(partial produce-distances-async maze-params set-maze-params! :dist1 :green)
                    (partial produce-distances-async maze-params set-maze-params! :dist2 :blue)
                    (partial produce-path-async maze-params set-maze-params! true)]))

(defn produce-maze-async [{:keys [rows columns algorithm anim-chan] :as maze-params} set-maze-params!]
  (println (str "algorithm: " algorithm))
  (set-maze-params! :active "Carving maze …")
  (let [grid (grid/make-grid rows columns)
        algorithm-fn #((algs/algorithm-functions algorithm) grid)]
    (go
      (set-maze-params! :grid (atom grid))
      (async/<! (sync-chan anim-chan))
      (loop [prev-maze nil
             [maze & mazes] (sequence (comp (dedupe) (filter grid/changed?)) (algorithm-fn))]
        (if maze
          (do
            (set-maze-params! :grid (atom maze))
            (async/<! (sync-chan anim-chan))
            (recur maze mazes))
          (do
            (set-maze-params! :active nil)
            prev-maze))))))

(defn run-animation [maze-params set-maze-params!]
  (let [steps (cons (fn [_] (produce-maze-async maze-params set-maze-params!))
                    (analysis-steps maze-params set-maze-params!))]
    (go
      (loop [grid nil
             [step & steps] steps]
        (when step
          (recur (async/<! (step grid))
                 steps)))
      (set-maze-params! :active nil))))

(defn handle-maze-change [{:keys [grid cell-size anim-chan active] :as maze} canvas]
  (when-not (nil? active)
    (let [g (.getContext canvas "2d")]
      (go
        (image/image-grid g @grid cell-size)
        (async/>! anim-chan true))
      )))
