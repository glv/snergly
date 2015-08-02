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

(defn cell-neighbors
  ([cell] (cell-neighbors cell [:north :south :east :west]))
  ([cell directions]
   (filter identity (map cell directions))))

(defn make-grid
  "Creates and returns a new grid with the specified row and column sizes."
  [rows columns]
  {:type           :Grid
   ; algorithms should set this to indicate how the grid was generated:
   :algorithm-name "none"
   :rows           rows
   :columns        columns
   :cells          (into [] (for [row (range rows) column (range columns)]
                              (make-cell row column rows columns)))})

;; This code also makes frequent use of "distance" maps, which are
;; maps from [row column] vectors to integer distances.  In addition
;; to keys for some of the cells in a grid, distance maps also have
;; several keyword keys:
;;
;; * :origin - the coordinates of the origin from which the distances
;;             are measured
;; * :max-coord - the coordinates of the cell that is the maximum
;;             distance from the origin
;; * :max - the distance associated with :max-coord

(defn cell-index
  ([grid [row column]] (cell-index grid row column))
  ([grid row column] (+ (* row (:columns grid)) column)))

(defn grid-cell
  ([grid [row column]] (grid-cell grid row column))
  ([grid row column]
   ((:cells grid) (cell-index grid row column))))

(defn random-coord [{:keys [rows columns] :as grid}]
  (let [row (rand-int rows)
        column (rand-int columns)]
    [row column]))

(defn grid-size [{:keys [rows columns]}]
  (* rows columns))

(defn grid-row-coords [{:keys [rows columns]}]
  (for [row (range rows)]
    (for [column (range columns)]
      [row column])))

(defn grid-coords [{:keys [rows columns]}]
  (for [row (range rows) column (range columns)]
    [row column]))

(defn grid-deadends [grid]
  (filter #(= 1 (count (:links %)))
          (map #(grid-cell grid %) (grid-coords grid))))

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

(defn xform-values [value-xform value-map]
  "Returns a version of value-map with values transformed by value-xform."
  (reduce-kv (fn [m k v] (if (coll? k) (assoc m k (value-xform v)) m))
             {}
             value-map))

(defn grid-annotate-cells [grid & label-specs]
  (let [specs (partition 2 label-specs)
        get-annotations (fn [cell-coord [label value-map]] (vector label (value-map cell-coord)))
        assoc-cell (fn [cell cell-coord]
                     (apply assoc cell (mapcat (partial get-annotations cell-coord) specs)))
        annotate-cell (fn [grid cell-coord]
                        (update-in grid
                                   [:cells (cell-index grid cell-coord)]
                                   assoc-cell cell-coord))]
    (reduce annotate-cell grid (grid-coords grid))))

(defn print-grid
  ([grid] (print-grid grid false))
  ([{columns :columns :as grid} print-coords?]
   (let [resolve (partial grid-cell grid)]
     (when print-coords?
       (println (apply str "   " (map #(format "%2d  " %) (range columns))))
       (print "  "))
     ;; top border
     (println (apply str "+" (repeat columns "---+")))
     (doseq [row (grid-row-coords grid)]
       ;; cell space line
       (when print-coords?
         (print (format "%2d" (ffirst row))))
       (println (apply str "|"
                       (for [cell (map resolve row)]
                         (str (if (:label cell)
                                (str " " (:label cell) " ")
                                "   ")
                              (if (linked? cell (:east cell))
                                " "
                                "|")))))
       ;; bottom separator line
       (when print-coords? (print "  "))
       (println (apply str "+"
                       (for [cell (map resolve row)]
                         (str (if (linked? cell (:south cell))
                                "   "
                                "---") "+"))))))))
