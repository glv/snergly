(ns snergly.algorithms
  (:require [snergly.grid :refer :all]))

(defn maze-binary-tree [grid]
  (let [process-cell
        (fn [grid cell]
          (let [neighbors (filter identity (map cell [:north :east]))
                neighbor (when-not (empty? neighbors)
                           (rand-nth neighbors))]
            (if (nil? neighbor)
              grid
              (link-cells grid cell neighbor))))]
    (reduce process-cell grid (grid-cells grid))))

(defn maze-sidewinder [grid]
  (loop [grid grid
         [cell & cells] (grid-cells grid)
         current-run [cell]]
    (let [east-side? (nil? (:east cell))
          north-side? (nil? (:north cell))
          finish-run? (or east-side?
                          (and (not north-side?)
                               (= 0 (rand-int 2))))
          new-grid (if finish-run?
                     (let [member (rand-nth current-run)]
                       (if (:north member)
                         (link-cells grid member (:north member))
                         grid))
                     (link-cells grid cell (:east cell)))
          run-finished? (not= grid new-grid)]
      (if (empty? cells)
        new-grid
        (recur new-grid
               cells
               (if run-finished?
                 [(first cells)]
                 (conj current-run (first cells))))))))