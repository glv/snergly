(ns snergly.animation
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [snergly.algorithms :as algs]
            [snergly.grid :as grid]
            [snergly.image :as image]
            [snergly.protocols :as protocols]))

(def sync-by-frame false)

(defn sync-chan [frame-chan]
  (if sync-by-frame
    frame-chan
    ;; this works, but dumps a lot of error messages to the console because
    ;; it can't accept puts.
    (async/timeout 0)))

;; I don't know for sure which namespace this should go in, but I know I'm
;; gonna need it, so I'm exploring the code here.
;;
;; (Also, it should really be a macro so that the pieces don't have to be
;; wrapped in functions, and so that the tail of each sequence can be threaded
;; in as the first argument of the next producer.)
;;
;; Name words: progression, intremental, tail-to-head, chain

(defn chain-seqs* [[val & s] fs]
  (lazy-seq
    (cons val
          (cond
            (not-empty s) (chain-seqs* s fs)
            (not-empty fs) (chain-seqs* ((first fs) val) (rest fs))
            :else nil))))

(defn chain-seqs [fs]
  (chain-seqs* ((first fs)) (rest fs)))

(defn produce-distances-async [{:keys [start-row start-col anim-chan] :as maze-params} ui grid-key color-family maze]
  (let [prev-distances (:distances maze)
        [start-row start-col] (if prev-distances (:max-coord prev-distances) [start-row start-col])
        analysis-fn #(algs/distances-seq maze [start-row start-col])]
    (protocols/report-status ui "Finding distances …")
    (go-loop [maze maze
              [dist & dists] (analysis-fn)]
             (if dist
               (let [maze (assoc maze :distances dist
                                      grid-key {:distances dist
                                                :color-family color-family
                                                :expected-max-distance (* (grid/grid-size maze) 0.8)})]
                 (protocols/report-grid ui maze)
                 (async/<! (sync-chan anim-chan))
                 (recur maze dists))
               maze))))

(defn produce-path-async [{:keys [end-row end-col anim-chan] :as maze-params} ui longest? maze]
  (let [prev-distances (:distances maze)
        [end-row end-col] (if longest? (:max-coord prev-distances) [end-row end-col])
        analysis-fn #(algs/path-seq maze prev-distances [end-row end-col])
        result-chan (algs/seq-channel analysis-fn)]
    (protocols/report-status ui (str "Plotting path (" (inc (:max prev-distances)) " cells long) …"))
    (go-loop [maze maze
              [dist & dists] (analysis-fn)]
             (if dist
               (let [maze (assoc maze :path {:distances dist
                                             :color-family :red})]
                 (println "Adding a step to the path")
                 (protocols/report-grid ui maze)
                 (async/<! (sync-chan anim-chan))
                 (recur maze dists))
               maze))))

(defn analysis-steps [{:keys [analysis] :as maze-params} ui]
  (println (str "analysis: " analysis))
  (condp = analysis
    "none" []
    "distances" [(partial produce-distances-async maze-params ui :dist1 :green)]
    "path" [(partial produce-distances-async maze-params ui :dist1 :green)
            (partial produce-path-async maze-params ui false)]
    "longest path" [(partial produce-distances-async maze-params ui :dist1 :green)
                    (partial produce-distances-async maze-params ui :dist2 :blue)
                    (partial produce-path-async maze-params ui true)]))

(defn produce-maze-async [{:keys [rows columns algorithm anim-chan] :as maze-params} ui]
  (println (str "algorithm: " algorithm))
  (protocols/report-status ui "Carving maze …")
  (let [grid (grid/make-grid rows columns)
        algorithm-fn #((algs/algorithm-functions algorithm) grid)]
    (go
      (protocols/report-grid ui grid)
      (async/<! (sync-chan anim-chan))
      (loop [prev-maze nil
             [maze & mazes] (sequence (comp (dedupe) (filter grid/changed?)) (algorithm-fn))]
        (if maze
          (do
            (protocols/report-grid ui maze)
            (async/<! (sync-chan anim-chan))
            (recur maze mazes))
          (do
            (protocols/report-status ui nil)
            prev-maze))))))

(defn run-animation [maze-params ui]
  (let [steps (cons (fn [_] (produce-maze-async maze-params ui))
                    (analysis-steps maze-params ui))]
    (go
      (loop [grid nil
             [step & steps] steps]
        (when step
          (recur (async/<! (step grid))
                 steps)))
      (protocols/report-status ui nil))))

(defn handle-maze-change [{:keys [grid cell-size anim-chan active] :as maze} canvas]
  (when-not (nil? active)
    (let [g (.getContext canvas "2d")]
      (go
        (image/image-grid g @grid cell-size)
        (when sync-by-frame (async/>! anim-chan true)))
      )))

(defrecord AsyncAnimator [chan] ;; chan currently not used ???
  protocols/Animator
  (start-animation [this maze-params ui] (run-animation maze-params ui))
  (animate-frame [this maze-params canvas] (handle-maze-change maze-params canvas)))

(def animator (->AsyncAnimator (if sync-by-frame
                                 (async/chan)
                                 (async/timeout 0))))

(defn animatorf [anim-chan]
  (->AsyncAnimator (if sync-by-frame
                     anim-chan
                     (async/timeout 0))))