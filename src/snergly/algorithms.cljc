(ns snergly.algorithms
  #?(:clj (:import  [clojure.lang PersistentQueue]))
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]]))
  (:require #?(:clj [clojure.core.async :as async :refer [go go-loop]]
               :cljs [cljs.core.async :as async])
                    [clojure.set :as set]
                    [schema.core :as s :include-macros true]
                    [snergly.grid :as g]
                    [snergly.util :as util]
                    [snergly.grid :as grid]))

;; When adding a new algorithm, also add it to algorithm-functions below.
(def algorithm-names
  #{"binary-tree"
    "sidewinder"
    "aldous-broder"
    "wilsons"
    "hunt-and-kill"
    "recursive-backtracker"})

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
;; named "name-seq", where "name" is the name of the algorithm
;; (for example, "sidewinder-seq"). Anytime a new algorithm is
;; added, the name should also be added to snergly.core/algorithms
;; (at least until I decide whether that vector should be built
;; automatically from this namespace).  Each of them takes an input
;; grid, and returns a lazy seq of new grids, each one a single
;; step in the generation of the maze.  The completed maze is the
;; last grid in the seq.
;;
;; Helper functions used for only a particular algorithm should
;; have the algorithm name as a name prefix (for example,
;; sidewinder-step).

(defn binary-tree-seq* [grid [coord & coords]]
  (lazy-seq
    (when coord
      (let [cell (g/grid-cell grid coord)
            neighbors (g/cell-neighbors cell [:north :east])
            next-grid (if (empty? neighbors)
                        grid
                        (g/link-cells grid cell (rand-nth neighbors)))]
        (cons next-grid (binary-tree-seq* (g/begin-step next-grid) coords))))))

(defn binary-tree-seq [grid]
  (binary-tree-seq* (g/begin-step (assoc grid :algorithm-name "binary-tree")) (g/grid-coords grid)))

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

(defn sidewinder-seq* [grid [coord & coords] current-run]
  (lazy-seq
    (when-not (nil? coord)
      (let [[new-grid processed-run] (sidewinder-step grid coord current-run)]
        (cons new-grid (sidewinder-seq* (g/begin-step new-grid) coords (conj processed-run (first coords))))))))

(defn sidewinder-seq [grid]
  (let [coords (g/grid-coords grid)]
    (sidewinder-seq* (g/begin-step (assoc grid :algorithm-name "sidewinder")) coords [(first coords)])))

(defn aldous-broder-seq* [grid current unvisited]
  (lazy-seq
    (if (= unvisited 0)
      (cons grid nil)
      (let [cell (g/grid-cell grid current)
            neighbor (rand-nth (g/cell-neighbors cell))
            neighbor-new? (empty? (:links (g/grid-cell grid neighbor)))
            new-grid (if neighbor-new?
                       (g/link-cells grid cell neighbor)
                       grid)]
        (cons new-grid (aldous-broder-seq* (g/begin-step new-grid)
                                           neighbor
                                           (if neighbor-new? (dec unvisited) unvisited)))))))

(defn aldous-broder-seq [grid]
  (aldous-broder-seq* (g/begin-step (assoc grid :algorithm-name "aldous-broder"))
                      (g/random-coord grid)
                      (dec (g/grid-size grid))))

(defn wilsons-loop-erased-walk [grid start-coord unvisited]
  (let [unvisited-set (set unvisited)]
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

(declare wilsons-seq*)

(defn wilsons-carve-passage [grid unvisited [[coord1 coord2] & pairs]]
  (lazy-seq
    (let [new-grid (g/link-cells grid (g/grid-cell grid coord1) coord2)
          new-unvisited (remove (partial = coord1) unvisited)]
      (cons new-grid
            (if (empty? pairs)
              (wilsons-seq* (g/begin-step new-grid) new-unvisited)
              (wilsons-carve-passage (g/begin-step new-grid) new-unvisited pairs))))))

(defn wilsons-seq* [grid unvisited]
  (if (empty? unvisited)
    nil
    (let [coord (rand-nth unvisited)
          path (wilsons-loop-erased-walk grid coord unvisited)]
      (wilsons-carve-passage grid unvisited (partition 2 1 path)))))

(defn wilsons-seq [grid]
  (wilsons-seq* (g/begin-step (assoc grid :algorithm-name "wilsons"))
                (rest (shuffle (g/grid-coords grid)))))

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

(defn hunt-and-kill-seq* [grid current-coord]
  (lazy-seq
    (let [[new-grid next-coord] (hunt-and-kill-step grid current-coord)]
      (cons new-grid
            (when next-coord
              (hunt-and-kill-seq* (g/begin-step new-grid) next-coord))))))

(defn hunt-and-kill-seq [grid]
  (hunt-and-kill-seq* (g/begin-step (assoc grid :algorithm-name "hunt-and-kill")) (g/random-coord grid)))

(defn recursive-backtracker-step [grid stack]
  (let [grid (g/begin-step grid)
        current-coord (first stack)
        current-cell (g/grid-cell grid current-coord)
        unvisited-neighbors (filter #(empty? (:links (g/grid-cell grid %)))
                                    (g/cell-neighbors current-cell))]
    (if (empty? unvisited-neighbors)
      [grid (rest stack)]
      (let [next-current (rand-nth unvisited-neighbors)]
        [(g/link-cells grid current-cell next-current)
         (conj stack next-current)]))))

(defn recursive-backtracker-seq* [grid stack]
  (lazy-seq
    (if (empty? stack)
      (cons grid nil)
      (let [[new-grid new-stack] (recursive-backtracker-step grid stack)]
        (cons new-grid (recursive-backtracker-seq* (g/begin-step new-grid) new-stack))))))

(defn recursive-backtracker-seq [grid]
  (recursive-backtracker-seq* (g/begin-step (assoc grid :algorithm-name "recursive-backtracker")) (list (g/random-coord grid))))

;; There are a couple of weird, sporadic rendering bugs that are hard to track
;; down because they only appear on some mazes.  This is a deterministic
;; algorithm that triggers them every time, which should be helpful for
;; debugging.
(defn pessimal-seq* [grid [[row :as coord] & coords]]
  (lazy-seq
    (when coord
      (let [cell (g/grid-cell grid coord)
            next-grid (cond
                        (:east cell) (g/link-cells grid cell (:east cell))
                        (and (odd? row) (:south cell)) (let [first-on-row (g/grid-cell grid [row 0])]
                                                         (g/link-cells grid first-on-row (:south first-on-row)))
                        (and (even? row) (:south cell)) (g/link-cells grid cell (:south cell))
                        :else grid)]
      (cons next-grid (pessimal-seq* (g/begin-step next-grid) coords))))))

(defn pessimal-seq [grid]
  (pessimal-seq* (g/begin-step (assoc grid :algorithm-name "pessimal")) (g/grid-coords grid)))

;; distances-seq advances on each iteration of Dijkstra's algorithm --- in
;; other words, for each cell that's on the current wavefront of the flood.
;; But the animation is better (both faster and, in my opinion, easier to
;; understand) if it advances each time the entire wavefront advances.  So
;; this transducer saves the updates, accumulating the set of changed cells,
;; until :max increases, at which point it lets pass the accumulated update
;; and starts over with the new :max value.
(defn trailing-maxes
  "A transducer for distances values that collapses consecutive values with the
  same :max into one."
  []
  (fn [xf]
    (let [prev (volatile! nil)]
      (fn
        ([] (xf))
        ([result] (xf (xf result @prev)))
        ([result input]
         (let [prior @prev]
           (if (and prior (> (:max input) (:max prior)))
             (do
               (vreset! prev input)
               (xf result prior))
             (do
               (vreset! prev (update input :changed-cells set/union (:changed-cells prior)))
               result))))))))

(defn distances-seq* [grid distances current frontier]
  (lazy-seq
    (let [cell (g/grid-cell grid current)
          current-distance (distances current)
          links (remove #(contains? distances %) (:links cell))
          next-frontier (apply conj frontier links)]
      (if (empty? next-frontier)
        (cons (assoc distances :max-coord current) nil)
        (let [new-distances (if (empty? links)
                              distances
                              (g/add-distances distances links (inc current-distance)))]
          (cons new-distances (distances-seq* grid (g/begin-step new-distances) (peek next-frontier) (pop next-frontier))))))))

(defn distances-seq [grid start]
  (sequence (trailing-maxes)
            (let [distances (g/make-distances start)]
              (cons distances (distances-seq* grid
                                              (g/begin-step distances)
                                              start
                                              #?(:clj PersistentQueue/EMPTY
                                                 :cljs #queue []))))))

(defn path-seq* [grid {:keys [origin] :as distances} current breadcrumbs]
  (lazy-seq
    (if (= current origin)
      (cons breadcrumbs nil)
      (let [current-distance (distances current)
            neighbor (first (filter #(< (distances %) current-distance)
                                    (:links (g/grid-cell grid current))))
            new-breadcrumbs (g/add-distances breadcrumbs [neighbor] (distances neighbor))]
      (cons new-breadcrumbs (path-seq* grid distances neighbor (g/begin-step new-breadcrumbs)))))))

(defn path-seq [grid distances goal]
  (lazy-seq
    (let [goal-distance (distances goal)
          breadcrumbs (assoc (g/add-distances (g/make-distances (:origin distances))
                                              [goal]
                                              goal-distance)
                        :max goal-distance
                        :max-coord goal)]
      (cons breadcrumbs (path-seq* grid distances goal (g/begin-step breadcrumbs))))))

;; TODO: it would be easy for a bunch of inefficiency to hide in this
;; process, with the sequences including many redundant updates that get
;; filtered out.  So it would be good to have a custom version of the
;; transducer here:
;;
;;     (comp (dedupe) (filter grid/changed?))
;;
;; that would count how many elements get filtered.

(defn seq-channel [seq-algorithm]
  (util/spool (seq-algorithm)
              (async/chan 1 (comp (dedupe) (filter grid/changed?)))))

;; I was finding the maze function with (resolve (symbol (str "maze-" name))).
;; But apparently ClojureScript namespaces aren't as reflective as Clojure, so
;; I have to have a map.
(def algorithm-functions
  {"binary-tree" binary-tree-seq
   "sidewinder" sidewinder-seq
   "aldous-broder" aldous-broder-seq
   "wilsons" wilsons-seq
   "hunt-and-kill" hunt-and-kill-seq
   "recursive-backtracker" recursive-backtracker-seq
   "pessimal" pessimal-seq
   })

#?(:clj
   (defn algorithm-fn [name options]
     (let [algorithm #(last ((algorithm-functions name) %))
           analyze-distances (fn [maze] (last (distances-seq maze (:distances options))))
           analyze-path (fn [maze] (last (path-seq maze (analyze-distances maze) (:path-to options))))
           analyze-longest-path (fn [maze]
                                  (let [distances (last (distances-seq maze [0 0]))
                                        distances-from-farthest (last (distances-seq maze (:max-coord distances)))]
                                    (last (path-seq maze distances-from-farthest (:max-coord distances-from-farthest)))))
           analyze (cond
                     (:longest options) analyze-longest-path
                     (:path-to options) analyze-path
                     (:distances options) analyze-distances
                     :else (fn [_] {}))]
       (fn [grid]
         (let [maze (assoc (algorithm grid) :changed-cells (into #{} (g/grid-coords grid)))
               analysis (analyze maze)
               analysis (assoc analysis :changed-cells (into #{} (filter vector? (keys analysis))))]
           (g/grid-annotate-cells maze
                                  {:label (g/xform-values util/base36 analysis)
                                   :color (g/xform-values #(util/make-color (:max analysis) %) analysis)})))))
   )
