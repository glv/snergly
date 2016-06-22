(ns snergly.animation
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async]
            [snergly.algorithms :as algs]
            [snergly.grid :as grid]
            [snergly.protocols :as protocols]
            [snergly.image :as i]))

(def sync-by-frame true)

(defn sync-chan [frame-chan]
  (if sync-by-frame
    frame-chan
    (async/timeout 0)))

(defn chain-update-seqs [fs]
  (letfn [(chain-update-seqs* [[r-state & s] fs]
            (lazy-seq
              (cons r-state
                    (cond
                      (not-empty s)  (chain-update-seqs* s fs)
                      (not-empty fs) (chain-update-seqs* ((first fs) r-state) (rest fs))
                      :else          nil))))]
    (chain-update-seqs* ((first fs)) (rest fs))))

(defn produce-distances [{:keys [::i/grid] :as r-state}
                         {:keys [start-row start-col] :as maze-params}
                         ui dist-key prev-dist-key]
  (let [prev-distances (when prev-dist-key (prev-dist-key r-state))
        start (if prev-distances (::grid/max-coord prev-distances) [start-row start-col])
        new-r-state (assoc r-state ::i/status "Finding distances …")
        expected-max (* (grid/grid-size grid) 0.8)]
    (sequence (comp algs/updates-only
                    (map #(assoc new-r-state dist-key %)))
              (algs/distances-seq grid start))))

(defn produce-path [{:keys [::i/grid] :as r-state}
                    {:keys [end-row end-col] :as maze-params}
                    ui prev-dist-key longest?]
  (let [prev-distances (prev-dist-key r-state)
        goal (if longest? (::grid/max-coord prev-distances) [end-row end-col])
        message (str "Plotting path (" (inc (prev-distances goal)) " cells long) …")
        new-r-state (assoc r-state ::i/status message)]
    (sequence (comp algs/updates-only
                    (map #(assoc new-r-state ::i/path %)))
              (algs/path-seq grid prev-distances goal))))

(defn analysis-steps [{:keys [analysis] :as maze-params} ui]
  (println (str "analysis: " analysis))
  (condp = analysis
    "none"         []
    "distances"    [#(produce-distances % maze-params ui ::i/dist-1 nil       )]
    "path"         [#(produce-distances % maze-params ui ::i/dist-1 nil       )
                    #(produce-path      % maze-params ui ::i/dist-1 false     )]
    "longest path" [#(produce-distances % maze-params ui ::i/dist-1 nil       )
                    #(produce-distances % maze-params ui ::i/dist-2 ::i/dist-1)
                    #(produce-path      % maze-params ui ::i/dist-2 true      )]))

(defn produce-maze [{:keys [rows columns algorithm] :as maze-params} ui]
  (println (str "algorithm: " algorithm))
  (let [initial-grid (grid/make-grid rows columns)
        initial-state (assoc i/render-state ::i/status "Carving maze …")
        algorithm-fn #((algs/algorithm-functions algorithm) initial-grid)]
    (sequence (comp algs/updates-only
                    (map #(assoc initial-state ::i/grid %)))
              (cons initial-grid (algorithm-fn)))))

(defn run-animation [maze-params ui frame-chan]
  (let [steps (cons #(produce-maze maze-params ui)
                    (analysis-steps maze-params ui))
        start-time (system-time)]
    (go
      (doseq [r-state (chain-update-seqs steps)]
        (protocols/report-update ui r-state)
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
