(ns snergly.algorithms
  #?(:clj (:import  [clojure.lang PersistentQueue]))
  (:require [snergly.grid :as g]))

;; Naming conventions:
;;
;; Top-level maze algorithm functions in this namespace are
;; named "maze-name", where "name" is the name of the algorithm
;; (for example, "maze-sidewinder"). Anytime a new algorithm is
;; added, the name should also be added to snergly.core/algorithms
;; (at least until I decide whether that vector should be build
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

(defn maze-binary-tree [grid]
  (assoc (reduce binary-tree-step grid (g/grid-coords grid))
    :algorithm-name "binary-tree"))

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

(defn maze-sidewinder [grid]
  (loop [grid grid
         [coord & coords] (g/grid-coords grid)
         current-run [coord]]
    (let [[new-grid processed-run] (sidewinder-step grid coord current-run)]
      (if (empty? coords)
        (assoc new-grid :algorithm-name "sidewinder")
        (recur new-grid
               coords
               (conj processed-run (first coords)))))))

(defn maze-aldous-broder [grid]
  (loop [grid grid
         current (g/random-coord grid)
         unvisited (dec (g/grid-size grid))]
    (let [cell (g/grid-cell grid current)
          neighbor (rand-nth (g/cell-neighbors cell))
          neighbor-new? (empty? (:links (g/grid-cell grid neighbor)))]
      (if (= unvisited 0)
        (assoc grid :algorithm-name "aldous-broder")
        (recur (if neighbor-new?
                 (g/link-cells grid cell neighbor)
                 grid)
               neighbor
               (if neighbor-new? (dec unvisited) unvisited))))))

(defn wilsons-loop-erased-walk [grid start-coord unvisited]
  (let [unvisited-set (into #{} unvisited)]
    (loop [current-coord start-coord
           path [current-coord]]
      (if-not (contains? unvisited-set current-coord)
        path
        (let [next-coord (rand-nth (g/cell-neighbors (g/grid-cell grid current-coord)))
              position (.indexOf path next-coord)]
          (recur next-coord
                 (if (neg? position)
                   (conj path next-coord)
                   (subvec path 0 (inc position)))))))))

(defn wilsons-carve-passage [grid path unvisited]
  (loop [grid grid
         unvisited unvisited
         [[coord1 coord2] & pairs] (partition 2 1 path)]
    (let [new-grid (g/link-cells grid (g/grid-cell grid coord1) coord2)
          new-unvisited (remove (partial = coord1) unvisited)]
      (if (empty? pairs)
        [new-grid new-unvisited]
        (recur new-grid
               new-unvisited
               pairs)))))

(defn maze-wilsons [grid]
  (loop [grid grid
         unvisited (rest (shuffle (g/grid-coords grid)))
         coord (rand-nth unvisited)]
    (let [path (wilsons-loop-erased-walk grid coord unvisited)
          [new-grid new-unvisited] (wilsons-carve-passage grid path unvisited)]
      (if (empty? new-unvisited)
        (assoc new-grid :algorithm-name "wilsons")
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

(defn maze-hunt-and-kill [grid]
  (loop [grid grid
         current-coord (g/random-coord grid)]
    (let [[new-grid next-coord] (hunt-and-kill-step grid current-coord)]
      (if-not next-coord
        (assoc new-grid :algorithm-name "hunt-and-kill")
        (recur new-grid next-coord)))))

(defn maze-recursive-backtrack [grid]
  )

(defn find-distances [grid start]
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

(defn find-path [grid goal distances]
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
