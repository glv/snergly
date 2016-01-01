(ns snergly.grid
  (:require [schema.core :as s :include-macros true]
            [schema.experimental.abstract-map :as abstract-map :include-macros true]
            [snergly.util :as util]
            [clojure.set :as set]))

(def NonNegativeInt
  "Schema for cell coordinates and sizes"
  (s/constrained s/Int (comp not neg?) "non-negative integer"))

(def GridDimen
  "A maze doesn't make sense in a grid smaller than 2x2"
  (s/constrained s/Int #(> % 1) "integer > 1"))

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

(s/defschema TracksChanges
  (abstract-map/abstract-map-schema
    :type
    {:changed-cells (s/maybe #{CellPosition})}))

(abstract-map/extend-schema Grid TracksChanges [:Grid]
  {:algorithm-name s/Str ; algorithms should set this to indicate how the grid was generated
   :rows GridDimen
   :columns GridDimen
   :cells [Cell]})

(abstract-map/extend-schema Distances TracksChanges [:Distances]
  {:origin CellPosition ; the cell distances are relative to
   (s/optional-key :max-coord) CellPosition ; the farthest cell from :origin
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
  ([cell :- Cell] (cell-neighbors cell [:north :south :east :west]))
  ([cell :- Cell
    directions :- [(s/enum :north :south :east :west)]]
   (filter identity (map cell directions))))

(s/defn make-grid :- Grid
  "Creates and returns a new grid with the specified row and column sizes."
  [rows :- GridDimen columns :- GridDimen]
  {:type           :Grid
   :algorithm-name "none"
   :rows           rows
   :columns        columns
   :cells          (into [] (for [row (range rows) column (range columns)]
                              (make-cell row column rows columns)))
   :changed-cells  nil})

(s/defn cell-index :- NonNegativeInt
  ([grid :- Grid
    [row column] :- CellPosition] (cell-index grid row column))
  ([grid :- Grid row :- NonNegativeInt column :- NonNegativeInt] (+ (* row (:columns grid)) column)))

(s/defn grid-cell :- Cell
  ([grid :- Grid
    [row column] :- CellPosition] (grid-cell grid row column))
  ([grid :- Grid row :- NonNegativeInt column :- NonNegativeInt]
    ((:cells grid) (cell-index grid row column))))

(s/defn random-coord :- CellPosition
  [{:keys [rows columns] :as grid} :- Grid]
  (let [row (rand-int rows)
        column (rand-int columns)]
    [row column]))

(s/defn grid-size :- NonNegativeInt
  [{:keys [rows columns]} :- Grid]
  (* rows columns))

(s/defn grid-row-coords :- [[CellPosition]]
  [{:keys [rows columns]} :- Grid]
  "Grid cell coordinates, batched into rows."
  (for [row (range rows)]
    (for [column (range columns)]
      [row column])))

(s/defn grid-coords :- [CellPosition]
  [{:keys [rows columns]} :- Grid]
  (for [row (range rows) column (range columns)]
    [row column]))

(s/defn grid-deadends :- [Cell]
  [grid :- Grid]
  (filter #(= 1 (count (:links %)))
          (map #(grid-cell grid %) (grid-coords grid))))

(s/defn begin-step :- TracksChanges
  [thing :- TracksChanges]
  (assoc thing :changed-cells #{}))

(s/defn new? :- s/Bool
  [thing :- TracksChanges]
  (nil? (:changed-cells thing)))

(s/defn changed? :- s/Bool
  [thing :- TracksChanges]
  (boolean (or (new? thing)
               (not-empty (:changed-cells thing)))))

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

(s/defn linked? :- s/Bool
  [cell :- Cell other-cell-coord :- CellPosition]
  (contains? (:links cell) other-cell-coord))

(s/defn make-distances :- Distances
  "Creates and returns a new distances object with the supplied origin."
  [origin :- CellPosition]
  {:type   :Distances
   :origin origin
   :max 0
   origin 0
   :changed-cells nil})

(s/defn add-distances :- Distances
  [{:keys [changed-cells] :as distances} :- Distances
   coords :- [CellPosition]
   distance :- NonNegativeInt]
  (let [new-max (max distance (:max distances))]
    (apply assoc distances
           :max new-max
           :changed-cells (apply conj (or changed-cells #{}) coords)
           (mapcat #(vector % distance) coords))))

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
        changed-cells (apply set/union (map :changed-cells specs))
        get-annotations (fn [cell-coord [label value-map]] (vector label (value-map cell-coord)))
        assoc-cell (fn [cell cell-coord]
                     (apply assoc cell (mapcat (partial get-annotations cell-coord) specs)))
        annotate-cell (fn [grid cell-coord]
                        (update-in grid
                                   [:cells (cell-index grid cell-coord)]
                                   assoc-cell cell-coord))
        cells-to-annotate (if changed-cells changed-cells (grid-coords grid))]
    (assoc (reduce annotate-cell grid cells-to-annotate) :changed-cells (into #{} cells-to-annotate))))

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
