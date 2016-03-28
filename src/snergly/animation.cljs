(ns snergly.animation
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [snergly.algorithms :as algs]
            [snergly.grid :as grid]
            [snergly.protocols :as protocols]))

(def sync-by-frame true)

(defn sync-chan [frame-chan]
  (if sync-by-frame
    frame-chan
    (async/timeout 0)))

(defn chain-update-seqs [fs]
  (letfn [(chain-update-seqs* [[[msg val :as update] & s] fs]
            (lazy-seq
              (cons update
                    (cond
                      (not-empty s)  (chain-update-seqs* s fs)
                      (not-empty fs) (chain-update-seqs* ((first fs) val) (rest fs))
                      :else          nil))))]
    (chain-update-seqs* ((first fs)) (rest fs))))

(defn produce-distances [maze {:keys [start-row start-col] :as maze-params} ui grid-key color-family]
  (let [prev-distances (:distances maze)
        start (if prev-distances (:max-coord prev-distances) [start-row start-col])
        expected-max (* (grid/grid-size maze) 0.8)
        assoc-to-maze (fn [dists]
                        (assoc maze :distances dists
                                    grid-key {:distances dists
                                              :color-family color-family
                                              :expected-max-distance expected-max}))]
    (sequence (comp algs/updates-only
                    (map assoc-to-maze)
                    (map #(vector "Finding distances …" %)))
              (algs/distances-seq maze start))))

(defn produce-path [maze {:keys [end-row end-col] :as maze-params} ui longest?]
  (let [prev-distances (:distances maze)
        message (str "Plotting path (" (inc (:max prev-distances)) " cells long) …")
        goal (if longest? (:max-coord prev-distances) [end-row end-col])
        assoc-to-maze (fn [dists]
                        (assoc maze :path {:distances dists
                                           :color-family :red}))]
    (sequence (comp algs/updates-only
                    (map assoc-to-maze)
                    (map #(vector message %)))
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
  (let [initial-grid (grid/make-grid rows columns)
        algorithm-fn #((algs/algorithm-functions algorithm) initial-grid)]
    (sequence (comp algs/updates-only
                    (map #(vector "Carving maze …" %)))
              (cons initial-grid (algorithm-fn)))))

(defn run-animation [maze-params ui frame-chan]
  (let [steps (cons #(produce-maze maze-params ui)
                    (analysis-steps maze-params ui))
        start-time (system-time)]
    (go
      (doseq [[message grid] (chain-update-seqs steps)]
        (protocols/report-update ui message grid)
        (async/<! (sync-chan frame-chan)))
      (protocols/report-status ui nil)
      (println (str "Generation and rendering took "
                    (.toFixed (- (system-time) start-time) 6)
                    " msecs "
                    (select-keys maze-params [:rows :columns :algorithm :analysis]))))))

(defn handle-frame-complete [frame-chan]
  (go (when sync-by-frame (async/>! (sync-chan frame-chan) true))))

(defrecord AsyncAnimator [chan]
  protocols/Animator
  (start-animation [this maze-params ui] (run-animation maze-params ui (:chan this)))
  (frame-rendered [this] (handle-frame-complete (:chan this))))

(defn animator [frame-chan]
  (->AsyncAnimator frame-chan))
