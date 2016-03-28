(ns snergly.animation
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [snergly.algorithms :as algs]
            [snergly.grid :as grid]
            [snergly.image :as image]
            [snergly.protocols :as protocols]))

(def sync-by-frame true)

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

(defn chain-seqs [fs]
  (letfn [(chain-seqs* [[val & s] fs]
            (lazy-seq
              (cons val
                    (cond
                      (not-empty s)  (chain-seqs* s fs)
                      (not-empty fs) (chain-seqs* ((first fs) val) (rest fs))
                      :else          nil))))]
    (chain-seqs* ((first fs)) (rest fs))))

(defn produce-distances [maze {:keys [start-row start-col] :as maze-params} ui grid-key color-family]
  (let [prev-distances (:distances maze)
        start (if prev-distances (:max-coord prev-distances) [start-row start-col])]
    (protocols/report-status ui "Finding distances …")
    (map #(assoc maze :distances %
                      grid-key {:distances %
                                :color-family color-family
                                :expected-max-distance (* (grid/grid-size maze) 0.8)})
         (algs/distances-seq maze start))))

(defn produce-path [maze {:keys [end-row end-col] :as maze-params} ui longest?]
  (let [prev-distances (:distances maze)
        goal (if longest? (:max-coord prev-distances) [end-row end-col])]
    (protocols/report-status ui (str "Plotting path (" (inc (:max prev-distances)) " cells long) …"))
    (map #(assoc maze :path {:distances %
                             :color-family :red})
         (algs/path-seq maze prev-distances goal))))

(defn analysis-steps [{:keys [analysis] :as maze-params} ui]
  (println (str "analysis: " analysis))
  (condp = analysis
    "none" []
    "distances" [#(produce-distances % maze-params ui :dist1 :green)]
    "path" [#(produce-distances % maze-params ui :dist1 :green)
            #(produce-path % maze-params ui false)]
    "longest path" [#(produce-distances % maze-params ui :dist1 :green)
                    #(produce-distances % maze-params ui :dist2 :blue)
                    #(produce-path % maze-params ui true)]))

(defn produce-maze [{:keys [rows columns algorithm] :as maze-params} ui]
  (println (str "algorithm: " algorithm))
  (protocols/report-status ui "Carving maze …")
  (let [initial-grid (grid/make-grid rows columns)
        algorithm-fn #((algs/algorithm-functions algorithm) initial-grid)]
    (cons initial-grid (sequence (comp (dedupe) (filter grid/changed?)) (algorithm-fn)))))

(defn run-animation [maze-params ui frame-chan]
  (let [steps (cons #(produce-maze maze-params ui)
                    (analysis-steps maze-params ui))]
    (go
      (doseq [grid (chain-seqs steps)]
        (protocols/report-grid ui grid)
        (async/<! (sync-chan frame-chan)))
      (protocols/report-status ui nil))))

(defn handle-maze-change [{:keys [grid cell-size active] :as maze} canvas frame-chan]
  (when-not (nil? active)
    (let [g (.getContext canvas "2d")]
      (go
        (image/image-grid g @grid cell-size)
        (when sync-by-frame (async/>! (sync-chan frame-chan) true)))
      )))

(defrecord AsyncAnimator [chan] ;; chan currently not used ???
  protocols/Animator
  (start-animation [this maze-params ui] (run-animation maze-params ui (:chan this)))
  (animate-frame [this maze-params canvas] (handle-maze-change maze-params canvas (:chan this))))

(defn animator [frame-chan]
  (->AsyncAnimator frame-chan))
