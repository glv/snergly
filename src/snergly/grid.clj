(ns snergly.grid
  (:import [java.awt Color Graphics2D]
           [java.awt.image BufferedImage]))

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

(defn draw-cells [^Graphics2D g grid cell-size draw-fn]
  (doseq [coord (grid-coords grid)]
    (let [[y1 x1] (map #(* % cell-size) coord)
          [y2 x2] (map #(+ % cell-size) [y1 x1])
          cell (grid-cell grid coord)]
      (draw-fn g cell cell-size x1 y1 x2 y2))))

(defn draw-cell-background [^Graphics2D g cell cell-size x1 y1 _ _]
  (let [color (:color cell)]
    (when color
      (.setColor g color)
      (.fillRect g x1 y1 cell-size cell-size))))

(defn draw-cell-walls [^Graphics2D g cell _ x1 y1 x2 y2]
  (when-not (:north cell) (.drawLine g x1 y1 x2 y1))
  (when-not (:west cell) (.drawLine g x1 y1 x1 y2))

  (when-not (linked? cell (:east cell)) (.drawLine g x2 y1 x2 y2))
  (when-not (linked? cell (:south cell)) (.drawLine g x1 y2 x2 y2)))

(defn image-grid [{:keys [rows columns] :as grid} cell-size]
  (let [img-width (inc (* cell-size columns))
        img-height (inc (* cell-size rows))
        background Color/white
        wall Color/black
        img (BufferedImage. img-width img-height BufferedImage/TYPE_INT_RGB)
        g (.createGraphics img)]
    (.setColor g background)
    (.fillRect g 0 0 img-width img-height)
    (draw-cells g grid cell-size draw-cell-background)
    (.setColor g wall)
    (draw-cells g grid cell-size draw-cell-walls)
    img))
