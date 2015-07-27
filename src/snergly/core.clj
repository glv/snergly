(ns snergly.core)

(defn make-cell
  [row column rows columns]
  {:type  :Cell
   :coord [row column]
   :north (when (> row 0) [(dec row) column])
   :south (when (< row (dec rows)) [(inc row) column])
   :east  (when (< column (dec columns)) [row (inc column)])
   :west  (when (> column 0) [row (dec column)])
   :links #{}})

(defn make-grid
  "Creates and returns a new grid with the specified row and column sizes."
  [rows columns]
  {:type    :Grid
   :rows    rows
   :columns columns
   :cells   (into [] (for [row (range rows) column (range columns)]
                       (make-cell row column rows columns)))})

(defn cell-index
  ([grid [row column]] (cell-index grid row column))
  ([grid row column] (+ (* row (:columns grid)) column)))

(defn grid-cell
  ([grid [row column]] (grid-cell grid row column))
  ([grid row column]
   ((:cells grid) (cell-index grid row column))))

(defn random-cell [{rows :rows columns :columns :as grid}]
  (let [row (rand-int rows)
        column (rand-int columns)]
    (grid-cell grid row column)))

(defn grid-size [{rows :rows columns :columns}]
  (* rows columns))

(defn grid-rows [{cells :cells columns :columns}]
  (partition columns cells))

(defn grid-cells [grid]            ; just for a name to parallel grid-rows
  (:cells grid))

(defn link-cells [{cells :cells :as grid}
                  {cell-coord :coord cell-links :links :as cell} neighbor-coord]
  (let [neighbor (grid-cell grid neighbor-coord)
        neighbor-links (:links neighbor)]
    (assoc grid :cells
                (assoc cells (cell-index grid cell-coord)
                             (assoc cell :links (conj cell-links neighbor-coord))
                             (cell-index grid neighbor-coord)
                             (assoc neighbor :links (conj neighbor-links cell-coord))))))

(defn linked? [cell other-cell-coord]
  (contains? (:links cell) other-cell-coord))

(defn print-grid [{rows :rows columns :columns :as grid}]
  (println (apply str "+" (repeat columns "---+")))
  (doseq [row (grid-rows grid)]
    ;; cell space line
    (println (apply str "|"
                    (for [cell row]
                      (str "   " (if (linked? cell (:east cell))
                                   " "
                                   "|")))))
    ;; southern separator line
    (println (apply str "+"
                    (for [cell row]
                      (str (if (linked? cell (:south cell))
                             "   "
                             "---") "+"))))))



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