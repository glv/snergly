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

(defn sidewinder-step [grid cell run]
  (let [printing? true ;(= (:coord cell) [1, 0])
        _ (when printing? (println (str "cell " (:coord cell) ": " cell))
                          (println (apply str "  run: " (map :coord run))))
        east-side? (nil? (:east cell))
        north-side? (nil? (:north cell))
        finish-run? (or east-side?
                        (and (not north-side?)
                             (= 0 (rand-int 2))))
        _ (when printing? (println (str "  east: " east-side? " north: " north-side? " finish: " finish-run?))
                          (when (not finish-run?) (println "linking east")))
        new-grid (if finish-run?
                   (let [member (rand-nth run)]
                     (when printing? (println (str "  member: " member " linking north? " (not (nil? (:north member))))))
                     (if (:north member)
                       (link-cells grid member (:north member))
                       grid))
                   (link-cells grid cell (:east cell)))
        _ (when printing? (println (str "  new links: " (:links (grid-cell new-grid (:coord cell))))))]
    [new-grid (if finish-run? [] run)]))

(defn maze-sidewinder [grid]
  (loop [grid grid
         [cell & cells] (grid-cells grid)
         current-run [cell]]
    (let [[new-grid processed-run] (sidewinder-step grid cell current-run)]
      (if (empty? cells)
        new-grid
        (recur new-grid
               cells
               (if (empty? processed-run)
                 [(first cells)]
                 (conj processed-run (first cells))))))))