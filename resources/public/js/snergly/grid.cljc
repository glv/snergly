(ns snergly.grid
  (:require [schema.core :as s :include-macros true]
            [snergly.util :as util]))

(def NonNegativeInt
  "Schema for cell coordinates and sizes"
  (s/constrained s/Int (comp not neg?) "non-negative integer"))

(def CellPosition
  "Schema for cell [row col] coordinates"
  (s/pair NonNegativeInt "row" NonNegativeInt "column"))

(def Cell
  "Schema for maze cells"
  {:type (s/eq :Cell)
   :coord CellPosition
   :north (s/maybe CellPosition)
   :south (s/maybe CellPosition)
   :east (s/maybe CellPosition)
   :west (s/maybe CellPosition)
   :links #{CellPosition}
   s/Keyword s/Any ; for annotations: distances, colors, labels, etc.
   })

(def Grid
  "Schema for maze grid"
  {:type (s/eq :Grid)
   :algorithm-name s/Str
   :rows NonNegativeInt
   :columns NonNegativeInt
   :cells [Cell]
   :changed-cells (s/maybe #{CellPosition})})

(def Distances
  "Schema for a distance map"
  {:origin CellPosition ; the cell distances are relative to
   :max-coord CellPosition ; the farthest cell from :origin
   :max NonNegativeInt ; the distance of :max-coord from :origin
   CellPosition NonNegativeInt ; the distance from :origin to CellPosition
   })

(s/defn make-cell :- Cell
  [row column rows columns]
  {:type  :Cell
   :coord [row column]
   :north (when (> row 0) [(dec row) column])
   :south (when (< row (dec rows)) [(inc row) column])
   :east  (when (< column (dec columns)) [row (inc column)])
   :west  (when (> column 0) [row (dec column)])
   :links #{}})

(s/defn cell-neighbors :- [CellPosition]
  ([cell] (cell-neighbors cell [:north :south :east :west]))
  ([cell :- Cell
    directions :- [(s/enum :north :south :east :west)]]
   (filter identity (map cell directions))))

(s/defn make-grid :- Grid
  "Creates and returns a new grid with the specified row and column sizes."
  [rows columns]
  {:type           :Grid
   ; algorithms should set this to indicate how the grid was generated:
   :algorithm-name "none"
   :rows           rows
   :columns        columns
   :cells          (into [] (for [row (range rows) column (range columns)]
                              (make-cell row column rows columns)))
   :changed-cells  nil})

(s/defn cell-index :- NonNegativeInt
  ([grid [row column]] (cell-index grid row column))
  ([grid row column] (+ (* row (:columns grid)) column)))

(s/defn grid-cell :- Cell
  ([grid [row column]] (grid-cell grid row column))
  ([grid row column]
   ((:cells grid) (cell-index grid row column))))

(s/defn random-coord :- CellPosition
  [{:keys [rows columns] :as grid}]
  (let [row (rand-int rows)
        column (rand-int columns)]
    [row column]))

(s/defn grid-size :- NonNegativeInt
  [{:keys [rows columns]}]
  (* rows columns))

(s/defn grid-row-coords :- [[CellPosition]]
  [{:keys [rows columns]}]
  "Grid cell coordinates, batched into rows."
  (for [row (range rows)]
    (for [column (range columns)]
      [row column])))

(s/defn grid-coords :- [CellPosition]
  [{:keys [rows columns]}]
  (for [row (range rows) column (range columns)]
    [row column]))

(s/defn grid-deadends :- [Cell]
  [grid]
  (filter #(= 1 (count (:links %)))
          (map #(grid-cell grid %) (grid-coords grid))))

(s/defn begin-step :- Grid
  [grid :- Grid]
  (assoc grid :changed-cells #{}))

(s/defn new? [grid :- Grid]
  (nil? (:changed-cells grid)))

(s/defn changed? [grid :- Grid]
  (or (new? grid)
      (not-empty (:changed-cells grid))))

(s/defn link-cells :- Grid
  [{:keys [cells changed-cells] :as grid} :- Grid
   {cell-coord :coord cell-links :links :as cell} :- Cell
   neighbor-coord :- CellPosition]
  (let [neighbor (grid-cell grid neighbor-coord)
        neighbor-links (:links neighbor)]
    (assoc grid :cells
                (assoc cells (cell-index grid cell-coord)
                             (assoc cell :links (conj cell-links neighbor-coord))
                             (cell-index grid neighbor-coord)
                             (assoc neighbor :links (conj neighbor-links cell-coord)))
                :changed-cells (conj changed-cells cell-coord neighbor-coord))))

(defn linked? [cell other-cell-coord]
  (contains? (:links cell) other-cell-coord))

(s/defn xform-values :- Distances
  [value-xform
   value-map :- Distances]
  "Returns a version of value-map with values transformed by value-xform."
  (reduce-kv (fn [m k v] (if (coll? k) (assoc m k (value-xform v)) m))
             {}
             value-map))

(s/defn grid-annotate-cells :- Grid
  [grid :- Grid
   label-specs :- {s/Keyword Distances}]
  (let [specs (seq label-specs)
        get-annotations (fn [cell-coord [label value-map]] (vector label (value-map cell-coord)))
        assoc-cell (fn [cell cell-coord]
                     (apply assoc cell (mapcat (partial get-annotations cell-coord) specs)))
        annotate-cell (fn [grid cell-coord]
                        (update-in grid
                                   [:cells (cell-index grid cell-coord)]
                                   assoc-cell cell-coord))]
    (reduce annotate-cell grid (grid-coords grid))))

(defn intlabel [val]
  #?(:clj     (format "%2d" val)
     :default (util/pad 2 " " (str val))))

(defn print-grid
  ([grid] (print-grid grid false))
  ([{columns :columns :as grid} print-coords?]
   (let [resolve (partial grid-cell grid)]
     (when print-coords?
       (println (apply str "   " (map #(str (intlabel %) "  ")) (range columns)))
       (print "  "))
     ;; top border
     (println (apply str "+" (repeat columns "---+")))
     (doseq [row (grid-row-coords grid)]
       ;; cell space line
       (when print-coords?
         (print (intlabel (ffirst row))))
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
