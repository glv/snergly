(ns snergly.algorithms
  (:require [snergly.grid :refer :all]))

(defn maze-binary-tree [grid]
  (let [process-cell
        (fn [grid coord]
          (let [cell (grid-cell grid coord)
                neighbors (filter identity (map cell [:north :east]))]
            (if (empty? neighbors)
              grid
              (link-cells grid cell (rand-nth neighbors)))))]
    (reduce process-cell grid (grid-coords grid))))

(defn sidewinder-step [grid coord run]
  (let [resolve (partial grid-cell grid)
        cell (resolve coord)
        east-side? (nil? (:east cell))
        north-side? (nil? (:north cell))
        finish-run? (or east-side?
                        (and (not north-side?)
                             (= 0 (rand-int 2))))
        new-grid (if finish-run?
                   (let [member (resolve (rand-nth run))]
                     (if (:north member)
                       (link-cells grid member (:north member))
                       grid))
                   (link-cells grid cell (:east cell)))]
    [new-grid (if finish-run? [] run)]))

(defn maze-sidewinder [grid]
  (loop [grid grid
         [coord & coords] (grid-coords grid)
         current-run [coord]]
    (let [[new-grid processed-run] (sidewinder-step grid coord current-run)]
      (if (empty? coords)
        new-grid
        (recur new-grid
               coords
               (if (empty? processed-run)
                 [(first coords)]
                 (conj processed-run (first coords))))))))