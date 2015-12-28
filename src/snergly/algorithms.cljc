(ns snergly.algorithms
  #?(:clj (:import  [clojure.lang PersistentQueue]))
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]]))
  (:require #?(:clj [clojure.core.async :as async :refer [go go-loop]]
               :cljs [cljs.core.async :as async])
            [schema.core :as s :include-macros true]
            [snergly.grid :as g]
            [snergly.util :as util]))

;; When adding a new algorithm, also add it to algorithm-functions below.
(def algorithm-names
  #{"binary-tree"
    "sidewinder"
    "aldous-broder"
    "wilsons"
    "hunt-and-kill"})

;; necessary because (.indexOf) doesn't work properly in ClojureScript.
(defn cljs-index-of [s val]
  (loop [[elem & s] s
         val val
         i 0]
    (cond
      (= val elem) i
      (empty? s) -1
      :else (recur s val (inc i)))))

;; Naming conventions:
;;
;; Top-level maze algorithm functions in this namespace are
;; named "maze-name", where "name" is the name of the algorithm
;; (for example, "maze-sidewinder"). Anytime a new algorithm is
;; added, the name should also be added to snergly.core/algorithms
;; (at least until I decide whether that vector should be built
;; automatically from this namespace).
;;
;; Helper functions used for only a particular algorithm should
;; have the algorithm name as a name prefix (for example,
;; sidewinder-step).

(defn binary-tree-step [grid coord]
  (let [cell (g/grid-cell grid coord)
        neighbors (g/cell-neighbors cell [:north :east])]
    (if (empty? neighbors)
      grid
      (g/link-cells grid cell (rand-nth neighbors)))))

(s/defn maze-binary-tree-sync :- g/Grid [grid :- g/Grid]
  (assoc (reduce binary-tree-step grid (g/grid-coords grid))
    :algorithm-name "binary-tree"))

(s/defn maze-binary-tree [grid :- g/Grid result-chan report-partial-steps?]
  (go
    (let [step-and-report (fn [g c]
                            (when (and report-partial-steps? (g/changed? g))
                              (go (async/>! result-chan g)))
                            (binary-tree-step (g/begin-step g) c))
          grid (assoc grid :algorithm-name "binary-tree")]
      (async/>! result-chan (reduce step-and-report grid (g/grid-coords grid))))))

(defn sidewinder-end-run? [cell]
  (let [on-east-side? (not (:east cell))
        on-north-side? (not (:north cell))]
    (or on-east-side?
        (and (not on-north-side?)
             (= 0 (rand-int 2))))))

(defn sidewinder-end-run [grid run]
  (let [cell (g/grid-cell grid (rand-nth run))
        north-neighbor (:north cell)]
    (if north-neighbor
      (g/link-cells grid cell north-neighbor)
      grid)))

(defn sidewinder-step [grid coord run]
  (let [cell (g/grid-cell grid coord)
        end-run? (sidewinder-end-run? cell)
        new-grid (if end-run?
                   (sidewinder-end-run grid run)
                   (g/link-cells grid cell (:east cell)))]
    [new-grid (if end-run? [] run)]))

(s/defn maze-sidewinder-sync :- g/Grid [grid :- g/Grid]
  (loop [grid grid
         [coord & coords] (g/grid-coords grid)
         current-run [coord]]
    (let [[new-grid processed-run] (sidewinder-step grid coord current-run)]
      (if (empty? coords)
        (assoc new-grid :algorithm-name "sidewinder")
        (recur new-grid
               coords
               (conj processed-run (first coords)))))))

(s/defn maze-sidewinder [grid :- g/Grid result-chan report-partial-steps?]
  (go-loop [grid (assoc grid :algorithm-name "sidewinder")
            [coord & coords] (g/grid-coords grid)
            current-run [coord]]
           (when (and report-partial-steps? (g/changed? grid))
             (async/>! result-chan grid))
    (let [[new-grid processed-run] (sidewinder-step (g/begin-step grid) coord current-run)]
      (if (empty? coords)
        (async/>! result-chan new-grid)
        (recur new-grid
               coords
               (conj processed-run (first coords)))))))

(s/defn maze-aldous-broder-sync :- g/Grid [grid :- g/Grid]
  (loop [grid grid
         current (g/random-coord grid)
         unvisited (dec (g/grid-size grid))]
    (let [cell (g/grid-cell grid current)
          neighbor (rand-nth (g/cell-neighbors cell))
          neighbor-new? (empty? (:links (g/grid-cell grid neighbor)))]
      (if (= unvisited 0)
        (assoc grid :algorithm-name "aldous-broder")
        (recur (if neighbor-new?
                 (g/link-cells (g/begin-step grid) cell neighbor)
                 grid)
               neighbor
               (if neighbor-new? (dec unvisited) unvisited))))))

(s/defn maze-aldous-broder [grid :- g/Grid result-chan report-partial-steps?]
  (go-loop [grid (assoc grid :algorithm-name "aldous-broder")
            current (g/random-coord grid)
            unvisited (dec (g/grid-size grid))]
           (when (and report-partial-steps? (g/changed? grid))
             (async/>! result-chan grid))
    (let [cell (g/grid-cell grid current)
          neighbor (rand-nth (g/cell-neighbors cell))
          neighbor-new? (empty? (:links (g/grid-cell grid neighbor)))]
      (if (= unvisited 0)
        (do
          (async/>! result-chan grid)
          (async/close! result-chan))
        (recur (if neighbor-new?
                 (g/link-cells (g/begin-step grid) cell neighbor)
                 (g/begin-step grid))
               neighbor
               (if neighbor-new? (dec unvisited) unvisited))))))

(defn wilsons-loop-erased-walk [grid start-coord unvisited]
  (let [unvisited-set (into #{} unvisited)]
    (loop [current-coord start-coord
           path [current-coord]]
      (if-not (contains? unvisited-set current-coord)
        path
        (let [next-coord (rand-nth (g/cell-neighbors (g/grid-cell grid current-coord)))
              position (#?(:clj .indexOf :cljs cljs-index-of) path next-coord)]
          (recur next-coord
                 (if (neg? position)
                   (conj path next-coord)
                   (subvec path 0 (inc position)))))))))

(defn wilsons-carve-passage [grid path unvisited result-chan report-partial-steps?]
  (loop [grid grid
         unvisited unvisited
         [[coord1 coord2] & pairs] (partition 2 1 path)]
    (go
      (when (and report-partial-steps? (g/changed? grid))
        (async/>! result-chan grid)))
    (let [new-grid (g/link-cells (g/begin-step grid) (g/grid-cell grid coord1) coord2)
          new-unvisited (remove (partial = coord1) unvisited)]
      (if (empty? pairs)
        [new-grid new-unvisited]
        (recur new-grid
               new-unvisited
               pairs)))))

(s/defn maze-wilsons-sync :- g/Grid [grid :- g/Grid]
  (loop [grid grid
         unvisited (rest (shuffle (g/grid-coords grid)))
         coord (rand-nth unvisited)]
    (let [path (wilsons-loop-erased-walk grid coord unvisited)
          [new-grid new-unvisited] (wilsons-carve-passage grid path unvisited nil false)]
      (if (empty? new-unvisited)
        (assoc new-grid :algorithm-name "wilsons")
        (recur new-grid
               new-unvisited
               (rand-nth new-unvisited))))))

(s/defn maze-wilsons [grid :- g/Grid result-chan report-partial-steps?]
  (go-loop [grid (assoc grid :algorithm-name "wilsons")
            unvisited (rest (shuffle (g/grid-coords grid)))
            coord (rand-nth unvisited)]
           (let [path (wilsons-loop-erased-walk grid coord unvisited)
                 ;; because this algorithm first finds a path and then carves
                 ;; it out as separate steps, it would be good to have
                 ;; wilsons-loop-erased-walk also animate the path-finding,
                 ;; perhaps by annotating the path cells with a color.
                 [new-grid new-unvisited] (wilsons-carve-passage grid path unvisited result-chan report-partial-steps?)]
             (if (empty? new-unvisited)
               (async/>! result-chan new-grid)
               (recur new-grid
                      new-unvisited
                      (rand-nth new-unvisited))))))

(defn hunt-and-kill-start-new-walk [grid]
  (loop [[current-coord & other-coords] (g/grid-coords grid)]
    (let [current-cell (g/grid-cell grid current-coord)
          visited-neighbors (remove #(empty? (:links (g/grid-cell grid %))) (g/cell-neighbors current-cell))]
      (cond
        (and (empty? (:links current-cell))
             (not-empty visited-neighbors)) [(g/link-cells grid current-cell (rand-nth visited-neighbors)) current-coord]
        (empty? other-coords) [grid nil]
        :else (recur other-coords)))))

(defn hunt-and-kill-step [grid current-coord]
  (let [current-cell (g/grid-cell grid current-coord)
        unvisited-neighbors (filter #(empty? (:links (g/grid-cell grid %)))
                                    (g/cell-neighbors current-cell))]
    (if (empty? unvisited-neighbors)
      (hunt-and-kill-start-new-walk grid)
      (let [neighbor (rand-nth unvisited-neighbors)]
        [(g/link-cells grid current-cell neighbor)
         neighbor]))))

(s/defn maze-hunt-and-kill-sync :- g/Grid [grid :- g/Grid]
  (loop [grid grid
         current-coord (g/random-coord grid)]
    (let [[new-grid next-coord] (hunt-and-kill-step grid current-coord)]
      (if-not next-coord
        (assoc new-grid :algorithm-name "hunt-and-kill")
        (recur new-grid next-coord)))))

(s/defn maze-hunt-and-kill [grid :- g/Grid result-chan report-partial-steps?]
  (go-loop [grid (assoc grid :algorithm-name "hunt-and-kill")
            current-coord (g/random-coord grid)]
    (go
      (when (and report-partial-steps? (g/changed? grid))
        (async/>! result-chan grid)))
    (let [[new-grid next-coord] (hunt-and-kill-step (g/begin-step grid) current-coord)]
      (if-not next-coord
        (async/>! result-chan new-grid)
        (recur new-grid next-coord)))))

(s/defn maze-recursive-backtrack :- g/Grid [grid :- g/Grid result-chan report-partial-steps?]
  )

(s/defn find-distances :- g/Distances
  [grid :- g/Grid
   start :- g/CellPosition]
  (loop [distances {start 0 :origin start}
         current start
         frontier #?(:clj PersistentQueue/EMPTY
                     :cljs #queue [])]
    (let [cell (g/grid-cell grid current)
          current-distance (distances current)
          links (remove #(contains? distances %) (:links cell))
          next-frontier (apply conj frontier links)]
      (if (empty? next-frontier)
        (assoc distances :max current-distance :max-coord current)
        (recur (if (empty? links)
                 distances
                 (apply assoc distances
                        (mapcat #(vector % (inc current-distance)) links)))
               (peek next-frontier)
               (pop next-frontier))))))

(s/defn find-path :- g/Distances
  [grid :- g/Grid
   goal :- g/CellPosition
   distances :- g/Distances]
  (let [origin (:origin distances)]
    (loop [current goal
           breadcrumbs {origin 0 :origin origin
                        goal (distances goal) :max-coord goal
                        :max (distances goal)}]
      (if (= current origin)
        breadcrumbs
        (let [current-distance (distances current)
              neighbor (first (filter #(< (distances %) current-distance)
                                      (:links (g/grid-cell grid current))))]
          (recur neighbor (assoc breadcrumbs neighbor (distances neighbor))))))))

;; I was finding the maze function with (resolve (symbol (str "maze-" name))).
;; But apparently ClojureScript namespaces aren't as reflective as Clojure, so
;; I have to have a map.
(def algorithm-functions
  {"binary-tree" maze-binary-tree
   "sidewinder" maze-sidewinder
   "aldous-broder" maze-aldous-broder
   "wilsons" maze-wilsons
   "hunt-and-kill" maze-hunt-and-kill})

(defn synchronous-algorithm [alg-name]
  (fn [grid]
    (let [result-chan (async/chan)]
      ((algorithm-functions alg-name) grid result-chan false)
      (async/<!! result-chan))))

(defn algorithm-fn [name options]
  (let [algorithm (synchronous-algorithm name)
        analyze-distances (fn [maze] (find-distances maze (:distances options)))
        analyze-path (fn [maze] (find-path maze (:path-to options)
                                           (analyze-distances maze)))
        analyze-longest-path (fn [maze]
                               (let [distances (find-distances maze [0 0])
                                     distances-from-farthest (find-distances maze (:max-coord distances))]
                                 (find-path maze (:max-coord distances-from-farthest) distances-from-farthest)))
        analyze (cond
                  (:longest options) analyze-longest-path
                  (:path-to options) analyze-path
                  (:distances options) analyze-distances
                  :else (fn [_] {}))]
    (fn [grid]
      (let [maze (algorithm grid)
            analysis (analyze maze)]
        (g/grid-annotate-cells maze
                                  {:label (g/xform-values util/base36 analysis)
                                   :color (g/xform-values #(util/color-cell (:max analysis) %) analysis)})))))