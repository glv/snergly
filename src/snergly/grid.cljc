(ns snergly.grid
  (:require #?(:clj [clojure.spec :as s]
               :cljs [cljs.spec :as s])
            [snergly.util :as util]
            [clojure.set :as set]
            #?(:clj [clojure.spec.gen :as gen]
               :cljs [cljs.spec.impl.gen :as gen])))

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
(s/def ::cell-coord     pos-int?)
(s/def ::cell-position  (s/tuple ::cell-coord ::cell-coord))
;; restrict grid sizes for testing, but allow larger grids in production.
(s/def ::grid-dimen     (s/with-gen (s/and integer? #(>= % 2))
                                    #(s/gen (s/int-in 2 25))))

;; cell
(declare make-cell)
(s/def ::neighbor       (s/nilable ::cell-position))

(s/def ::coord          ::cell-position)
(s/def ::north          ::neighbor)
(s/def ::south          ::neighbor)
(s/def ::east           ::neighbor)
(s/def ::west           ::neighbor)
(s/def ::links          (s/coll-of ::cell-position :type set?))
;; What are the other validity constraints that *could* be specified here?
;; * nsew should either be nil or distance 1 from coord
;; * n should be nil only if (first coord) is 0
;; * w should be nil only if (second coord) is 0
;; * validity of nil values for s and e depend on information outside the cell
;;   (the dimensions of the grid)
;; * values in links must be in nsew
(s/def ::cell           (s/with-gen
                          (s/keys :req [::coord
                                        ::north ::south ::east ::west
                                        ::links])
                          (gen/fmap (fn [[rs cs]]
                                      (let [r (rand-int rs)
                                            c (rand-int cs)]
                                        (make-cell r c rs cs)))
                                    (let [dgen (s/gen ::grid-dimen)]
                                      (gen/tuple dgen dgen))
                                    )))

;; change tracking
(s/def ::changed-cells  (s/nilable (s/coll-of ::cell-position :type set?)))
(s/def ::with-changes   (s/keys :req [::changed-cells]))

;; grid
(declare make-grid)
(s/def ::algorithm-name string?)
(s/def ::rows           ::grid-dimen)
(s/def ::cols           ::grid-dimen)
(s/def ::cells          (s/coll-of ::cell :type vector?))
;; What are the other validity constraints that *could* be specified here?
;; * number of cells == (rows+1) * (cols+1)
;; * one cell for each [row, col] permutation
;; * cells are in row-major order
;; * cells with row == (rows-1) have e nil
;; * cells woth col == (cols-1) have s nil
(s/def ::grid           (s/with-gen
                          (s/keys :req [::algorithm-name
                                        ::rows ::cols
                                        ::cells])
                          (gen/fmap (fn [[rs cs]] (make-grid rs cs))
                                    (let [dgen (s/gen ::grid-dimen)]
                                      (gen/tuple dgen dgen)))))

;; distances
(s/def ::origin         ::cell-position)
(s/def ::max            pos-int?)
(s/def ::max-coord      ::cell-position)
(s/def ::dist-or-annot  (s/or :origin    (s/tuple #(= ::origin %)        ::cell-position)
                              :max-coord (s/tuple #(= ::max-coord %)     ::cell-position)
                              :max       (s/tuple #(= ::max %)           pos-int?)
                              :changes   (s/tuple #(= ::changed-cells %) ::changed-cells)
                              :dist      (s/tuple ::cell-position pos-int?)))

(s/def ::distances      (s/and (s/keys :req [::origin ::max] :opt [::max-coord])
                               (s/coll-of ::dist-or-annot :type map?)))
;; I think if I write the right macro, I can replace ::dist-or-annot
;; and ::distances with this:
;;
;; (s/def ::distance-annotations (s/keys :req [::origin ::max] :opt [::max-coord]))
;; (s/def ::distances            (s/merged ::distance-annotations
;;                                         ::with-changes
;;                                         (s/map-of ::cell-position pos-int?)))
;;
;; (I might have to use (s/coll-of [s/tuple ::cell-position pos-int?])
;; instead of map/of.)
;;
;; But here's what Alex and Rich are working on:
;;
;; (s/def ::distances (s/key-cond
;;                      keyword? (s/keys :req [::origin ::max] :opt [::max-coord])
;;                      vector? (s/map-of ::cell-position pos-int?)))
;;
;; Much, much better!

(s/fdef make-cell
        :args (s/and (s/cat :row  ::cell-coord
                            :col  ::cell-coord
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
                     :directions (s/? (s/coll-of #{:north :south :east :west} :type vector?)))
        :ret (s/coll-of ::cell-position :type vector?))

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
        :args (s/cat :grid ::grid :position ::cell-position)
        :ret pos-int?
        :fn #(= (-> % :args :position)
                (::coord (get (-> % :args :grid ::cells) (-> % :ret)))))

(defn cell-index [grid [row col]]
  (+ (* row (::cols grid)) col))

(s/fdef grid-cell
        ;; figure out how to name the destructured parts of :position
        :args (s/cat :grid ::grid :position ::cell-position)
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
        :ret pos-int?)

(defn grid-size [{:keys [::rows ::cols]}]
  (* rows cols))

(s/fdef grid-row-coords
        ;; figure out how to name the destructured part of :grid
        :args (s/cat :grid ::grid)
        ;; maybe this double-nesting could be made clearer by defining a
        ;; separate predicate, maybe ::row-coords or something.
        :ret (s/coll-of (s/coll-of ::cell-position :type vector?) :type vector?))

(defn grid-row-coords [{:keys [::rows ::cols]}]
  "Grid cell coordinates, batched into rows."
  (for [row (range rows)]
    (for [col (range cols)]
      [row col])))

(s/fdef grid-coords
        :args (s/cat :grid ::grid)
        :ret (s/coll-of ::cell-position :type vector?))

(defn grid-coords [{:keys [::rows ::cols]}]
  (for [row (range rows) col (range cols)]
    [row col]))

(s/fdef grid-deadends
        :args (s/cat :grid ::grid)
        :ret (s/coll-of ::cell :type vector?))

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
                     :coords (s/coll-of ::cell-position :type vector?)
                     :distance pos-int?)
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
