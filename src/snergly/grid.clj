(ns snergly.grid)

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

(defn random-cell [{:keys [rows columns] :as grid}]
  (let [row (rand-int rows)
        column (rand-int columns)]
    (grid-cell grid row column)))

(defn grid-size [{:keys [rows columns]}]
  (* rows columns))

(defn grid-rows [{:keys [cells columns]}]
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

(defn print-grid
  ([grid] (print-grid grid false))
  ([{columns :columns :as grid} print-coords?]
   (when print-coords?
     (println (apply str "   " (map #(format "%2d  " %) (range columns))))
     (print "  "))
   (println (apply str "+" (repeat columns "---+")))
   (doseq [row (grid-rows grid)]
     ;; cell space line
     (when print-coords?
       (print (format "%2d" (first (:coord (first row))))))
     (println (apply str "|"
                     (for [cell row]
                       (str "   " (if (linked? cell (:east cell))
                                    " "
                                    "|")))))
     ;; southern separator line
     (when print-coords? (print "  "))
     (println (apply str "+"
                     (for [cell row]
                       (str (if (linked? cell (:south cell))
                              "   "
                              "---") "+")))))))