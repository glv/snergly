(ns snergly.algorithms
  (:require [snergly.grid :refer :all]))

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
  (let [cell (grid-cell grid coord)
        neighbors (filter identity (map cell [:north :east]))]
    (if (empty? neighbors)
      grid
      (link-cells grid cell (rand-nth neighbors)))))

(defn maze-binary-tree [grid]
  (reduce binary-tree-step grid (grid-coords grid)))

(defn sidewinder-end-run? [cell]
  (let [on-east-side? (not (:east cell))
        on-north-side? (not (:north cell))]
    (or on-east-side?
        (and (not on-north-side?)
             (= 0 (rand-int 2))))))

(defn sidewinder-end-run [grid run]
  (let [cell (grid-cell grid (rand-nth run))
        north-neighbor (:north cell)]
    (if north-neighbor
      (link-cells grid cell north-neighbor)
      grid)))

(defn sidewinder-step [grid coord run]
  (let [cell (grid-cell grid coord)
        end-run? (sidewinder-end-run? cell)
        new-grid (if end-run?
                   (sidewinder-end-run grid run)
                   (link-cells grid cell (:east cell)))]
    [new-grid (if end-run? [] run)]))

(defn maze-sidewinder [grid]
  (loop [grid grid
         [coord & coords] (grid-coords grid)
         current-run [coord]]
    (let [[new-grid processed-run] (sidewinder-step grid coord current-run)]
      (if (empty? coords)
        new-grid
        (recur new-grid
               coords
               (conj processed-run (first coords)))))))
