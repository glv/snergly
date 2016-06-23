(ns snergly.grid
  (:require #?(:clj [clojure.spec :as s]
               :cljs [cljs.spec :as s])
            [snergly.util :as util]
            [clojure.set :as set]))

;; If we don't want other namespaces to have to use the keywords from this
;; namespace to gather information from these maps, what other methods would
;; we need to provide?
;;
;; For snergly.algorithms:
;;
;; * grid, w: (g/grid-set-algorithm grid "algorithm-name")
;; * √ cell, r: (g/cell-neighbor cell :east)
;; * cell, r: (g/cell-links cell)
;; * chgs, r: (g/changed-cells thing)
;; * dist, r: (g/max-distance distances)
;; * dist, r: (g/max-coord distances)
;; * dist, r: (g/origin distances)
;;
;; For snergly.image:
;;
;; * grid, r: (g/grid-rows grid) and (g/grid-cols grid)
;;            or maybe (g/grid-size grid) ; returning a pair
;;
;; For snergly.animation:
;;

;; basic type constraints
(s/def ::non-negative?  (s/and integer? (comp not neg?)))
(s/def ::cell-position  (s/tuple ::non-negative? ::non-negative?))

;; cell
(s/def ::neighbor       (s/nilable ::cell-position))

(s/def ::coord          ::cell-position)
(s/def ::north          ::neighbor)
(s/def ::south          ::neighbor)
(s/def ::east           ::neighbor)
(s/def ::west           ::neighbor)
(s/def ::links          (s/and (s/coll-of ::cell-position #{}) set?))
(s/def ::cell           (s/keys :req [::coord
                                      ::north ::south ::east ::west
                                      ::links])) ; any others? annotations?

;; change tracking
(s/def ::changed-cells  (s/nilable (s/and (s/coll-of ::cell-position #{}) set?)))
(s/def ::with-changes   (s/keys :req [::changed-cells]))

;; grid
(s/def ::grid-dimen     (s/and integer? #(> % 1)))

(s/def ::algorithm-name string?)
(s/def ::rows           ::grid-dimen)
(s/def ::cols           ::grid-dimen)
(s/def ::cells          (s/and (s/coll-of ::cell []) vector?))
(s/def ::grid           (s/keys :req [::algorithm-name
                                      ::rows ::cols
                                      ::cells]))

;; distances
(s/def ::origin         ::cell-position)
(s/def ::max            ::non-negative?)
(s/def ::max-coord      ::cell-position)
(s/def ::dist-or-annot  (s/or :origin (s/tuple ::origin ::cell-position)
                              :max-coord (s/tuple ::max-coord ::cell-position)
                              :max (s/tuple ::max ::non-negative?)
                              :dist (s/tuple ::cell-position ::non-negative?)))

(s/def ::distances      (and (s/coll-of ::dist-or-annot {}) map?))
;(s/def ::distances      (s/keys :req [::origin ::max]
;                                :opt [::max-coord])) ; also map-of ::cell-position ::non-negative?


(s/fdef make-cell
        :args (s/and (s/cat :row  ::non-negative?
                            :col  ::non-negative?
                            :rows ::grid-dimen
                            :cols ::grid-dimen)
                     #(< (:row %) (:rows %))
                     #(< (:col %) (:cols %)))
        :ret ::cell
        :fn (s/and #(= (-> % :ret ::coord first) (-> % :args :row))
                   #(= (-> % :ret ::coord second) (-> % :args :col))
                   #(empty? (-> % :ret ::links))))

(defn make-cell
  [row col rows cols]
  {::coord [row col]
   ::north (when (> row 0) [(dec row) col])
   ::south (when (< row (dec rows)) [(inc row) col])
   ::east  (when (< col (dec cols)) [row (inc col)])
   ::west  (when (> col 0) [row (dec col)])
   ::links #{}})

(s/fdef cell-neighbor
        :args (s/cat :cell ::cell :direction #{:north :south :east :west})
        :ret (s/nilable ::cell-position))

(defn cell-neighbor [cell direction]
  (cell (keyword "snergly.grid" (name direction))))

(s/fdef cell-neighbors
        :args (s/cat :cell ::cell
                     :directions (s/? (s/coll-of #{:north :south :east :west} [])))
        :ret (s/and (s/coll-of ::cell-position []) vector?))

(defn cell-neighbors
  ([cell] (cell-neighbors cell [:north :south :east :west]))
  ([cell directions]
    (filter identity (map #(cell-neighbor cell %) directions))))

(s/fdef make-grid
        :args (s/cat :rows ::grid-dimen :cols ::grid-dimen)
        :ret (s/and ::grid ::with-changes))

(defn make-grid
  "Creates and returns a new grid with the specified row and column sizes."
  [rows cols]
  {::algorithm-name "none"
   ::rows           rows
   ::cols           cols
   ::cells          (into [] (for [row (range rows) col (range cols)]
                              (make-cell row col rows cols)))
   ::changed-cells  nil})

(s/fdef cell-index
        ;; figure out how to name the destructured parts of :position
        :args (s/cat :grid ::grid :position (s/tuple ::non-negative? ::non-negative?))
        :ret ::non-negative?)

(defn cell-index [grid [row col]]
  (+ (* row (::cols grid)) col))

(s/fdef grid-cell
        ;; figure out how to name the destructured parts of :position
        :args (s/cat :grid ::grid :position (s/tuple ::non-negative? ::non-negative?))
        :ret ::cell)

(defn grid-cell [grid [row col]]
  ((::cells grid) (cell-index grid [row col])))

(s/fdef random-coord
        ;; figure out how to name the destructured part of :grid
        :args (s/cat :grid ::grid)
        :ret ::cell-position)

(defn random-coord [{:keys [::rows ::cols] :as grid}]
  (let [row (rand-int rows)
        col (rand-int cols)]
    [row col]))

(s/fdef grid-size
        ;; figure out how to name the destructured part of :grid
        :args (s/cat :grid ::grid)
        :ret ::non-negative?)

(defn grid-size [{:keys [::rows ::cols]}]
  (* rows cols))

(s/fdef grid-row-coords
        ;; figure out how to name the destructured part of :grid
        :args (s/cat :grid ::grid)
        ;; maybe this double-nesting could be made clearer by defining a
        ;; separate predicate, maybe ::row-coords or something.
        :ret (s/and (s/coll-of (s/and (s/coll-of ::cell-position [])
                                      vector?) [])
                    vector?))

(defn grid-row-coords [{:keys [::rows ::cols]}]
  "Grid cell coordinates, batched into rows."
  (for [row (range rows)]
    (for [col (range cols)]
      [row col])))

(s/fdef grid-coords
        :args (s/cat :grid ::grid)
        :ret (s/and (s/coll-of ::cell-position []) vector?))

(defn grid-coords [{:keys [::rows ::cols]}]
  (for [row (range rows) col (range cols)]
    [row col]))

(s/fdef grid-deadends
        :args (s/cat :grid ::grid)
        :ret (s/and (s/coll-of ::cell []) vector?))

(defn grid-deadends [grid]
  (filter #(= 1 (count (::links %)))
          (map #(grid-cell grid %) (grid-coords grid))))

(s/fdef begin-step
        :args (s/cat :thing ::with-changes)
        :ret ::with-changes
        :fn #(empty? (-> % :ret ::changed-cells)))

(defn begin-step [thing]
  (assoc thing ::changed-cells #{}))

(s/fdef new?
        :args (s/cat :thing ::with-changes)
        :ret boolean?)

(defn new? [thing]
  (nil? (::changed-cells thing)))

(s/fdef changed?
        :args (s/cat :thing ::with-changes)
        :ret boolean?)

(defn changed? [thing]
  (boolean (not-empty (::changed-cells thing))))

(s/fdef link-cells
        ;; figure out how to name the destructured parts
        :args (s/cat :grid ::grid :cell ::cell :neighbor-coord ::cell-position)
        :ret ::grid)

(defn link-cells [{:keys [::cells ::changed-cells] :as grid}
                  {cell-coord ::coord cell-links ::links :as cell}
                  neighbor-coord]
  (let [neighbor (grid-cell grid neighbor-coord)
        neighbor-links (::links neighbor)]
    (assoc grid ::cells
                (assoc cells (cell-index grid cell-coord)
                             (assoc cell ::links (conj cell-links neighbor-coord))
                             (cell-index grid neighbor-coord)
                             (assoc neighbor ::links (conj neighbor-links cell-coord)))
                ::changed-cells (conj changed-cells cell-coord neighbor-coord))))

(s/fdef linked?
        :args (s/cat :cell ::cell :other-cell-coord ::cell-position)
        :ret boolean?)

(defn linked? [cell other-cell-coord]
  (contains? (::links cell) other-cell-coord))

(s/fdef make-distances
        :args (s/cat :origin ::cell-position)
        :ret (s/and ::distances ::with-changes))

(defn make-distances
  "Creates and returns a new distances object with the supplied origin."
  [origin]
  {::origin        origin
   ::max           0
   origin          0
   ::changed-cells #{origin}})

(s/fdef add-distances
        ;; figure out how to name destructured parts
        :args (s/cat :distances ::distances
                     :coords (s/coll-of ::cell-position [])
                     :distance ::non-negative?)
        :ret ::distances)

(defn add-distances [{:keys [::changed-cells] :as distances}
                     coords
                     distance]
  (let [new-max (max distance (::max distances))]
    (apply assoc distances
           ::max new-max
           ::changed-cells (apply conj (or changed-cells #{}) coords)
           (mapcat #(vector % distance) coords))))

(s/fdef xform-values
        :args (s/cat :value-xform (s/fspec :args (s/cat :val int?) :ret identity)
                     :value-map ::distances)
        :ret ::distances)

(defn xform-values [value-xform value-map]
  "Returns a version of value-map with values transformed by value-xform."
  (reduce (fn [m cell] (assoc m cell (value-xform (value-map cell)))) value-map (::changed-cells value-map)))

(s/fdef grid-annotate-cells
        :args (s/cat :grid ::grid :label-specs (s/map-of keyword? ::distances))
        :ret ::grid)

(defn grid-annotate-cells [grid label-specs]
  (let [specs (seq label-specs)
        changed-cells (apply set/union (map (comp ::changed-cells second) specs))
        cells-to-annotate (if changed-cells changed-cells (grid-coords grid))]
    (letfn [(get-annotations [cell-coord [label value-map]] (vector label (value-map cell-coord)))
            (assoc-cell [cell cell-coord]
              (apply assoc cell (mapcat (partial get-annotations cell-coord) specs)))
            (annotate-cell [grid cell-coord]
              (update-in grid
                         [::cells (cell-index grid cell-coord)]
                         assoc-cell cell-coord))]
      (assoc (reduce annotate-cell grid cells-to-annotate) ::changed-cells (set cells-to-annotate)))))

(defn intlabel [val]
  #?(:clj     (format "%2d" val)
     :default (util/pad 2 " " (str val))))

(defn print-grid
  ([grid] (print-grid grid false))
  ([{cols ::cols :as grid} print-coords?]
   (let [resolve (partial grid-cell grid)]
     (when print-coords?
       (println (apply str "   " (map #(str (intlabel %) "  ")) (range cols)))
       (print "  "))
     ;; top border
     (println (apply str "+" (repeat cols "---+")))
     (doseq [row (grid-row-coords grid)]
       ;; cell space line
       (when print-coords?
         (print (intlabel (ffirst row))))
       (println (apply str "|"
                       (for [cell (map resolve row)]
                         (str (if (::label cell)
                                (str " " (::label cell) " ")
                                "   ")
                              (if (linked? cell (::east cell))
                                " "
                                "|")))))
       ;; bottom separator line
       (when print-coords? (print "  "))
       (println (apply str "+"
                       (for [cell (map resolve row)]
                         (str (if (linked? cell (::south cell))
                                "   "
                                "---") "+"))))))))
