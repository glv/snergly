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
;; * dist, r: (g/max-dist distances)
;; * dist, r: (g/max-pos distances)
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
(s/def ::cell-coord     (s/with-gen pos-int? #(s/gen (s/int-in 0 24))))
(s/def ::cell-position  (s/tuple ::cell-coord ::cell-coord))
;; restrict grid sizes for testing, but allow larger grids in production.
(s/def ::grid-dimen     (s/with-gen (s/and integer? #(>= % 2))
                                    #(s/gen (s/int-in 2 25))))

;; cell
(declare make-cell cell-neighbors)
(s/def ::neighbor       (s/nilable ::cell-position))

(s/def ::pos            ::cell-position)
(s/def ::max-pos        ::cell-position)
(s/def ::links          (s/coll-of ::cell-position :type set?))
(s/def ::cell           (s/with-gen
                          (s/and
                            (s/keys :req [::pos ::max-pos ::links])
                            #(<= (first (::pos %)) (first (::max-pos %)))
                            #(<= (second (::pos %)) (second (::max-pos %)))
                            #(set/subset? (::links %) (set (cell-neighbors %))))
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
(s/def ::cells          (s/every ::cell :kind vector?))
;; What are the other validity constraints that *could* be specified here?
;; * one cell for each [row, col] permutation
;; * cells are in row-major order
;; * cells all have proper ::max-pos
(s/def ::grid           (s/with-gen
                          (s/and
                            (s/keys :req [::algorithm-name
                                          ::rows ::cols
                                          ::cells])
                            #(= (* (::rows %) (::cols %)) (count (::cells %)))
                            )
                          (gen/fmap (fn [[rs cs]] (make-grid rs cs))
                                    (let [dgen (s/gen ::grid-dimen)]
                                      (gen/tuple dgen dgen)))))

;; distances
(s/def ::origin         ::cell-position)
(s/def ::max-dist       pos-int?)
(s/def ::dist-or-annot  (s/or :origin    (s/tuple #(= ::origin %)        ::cell-position)
                              :max-pos   (s/tuple #(= ::max-pos %)       ::cell-position)
                              :max-dist  (s/tuple #(= ::max-dist %)      pos-int?)
                              :changes   (s/tuple #(= ::changed-cells %) ::changed-cells)
                              :dist      (s/tuple ::cell-position pos-int?)))

(s/def ::distances      (s/and (s/keys :req [::origin ::max-dist] :opt [::max-pos])
                               (s/coll-of ::dist-or-annot :type map?)))
;; I think if I write the right macro, I can replace ::dist-or-annot
;; and ::distances with this:
;;
;; (s/def ::distance-annotations (s/keys :req [::origin ::max-dist] :opt [::max-pos]))
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
;;                      keyword? (s/keys :req [::origin ::max-dist] :opt [::max-pos])
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
        :fn (s/and #(= (-> % :ret ::pos first)  (-> % :args :row))
                   #(= (-> % :ret ::pos second) (-> % :args :col))
                   #(= (-> % :ret ::max-pos first) (dec (-> % :args :rows)))
                   #(= (-> % :ret ::max-pos second) (dec (-> % :args :cols)))
                   #(empty? (-> % :ret ::links))))

(defn make-cell
  [row col rows cols]
  {::pos   [row col]
   ::max-pos [(dec rows) (dec cols)]
   ::links #{}})

(s/fdef cell-neighbor
        :args (s/cat :cell ::cell :direction #{:north :south :east :west})
        :ret (s/nilable ::cell-position))

(defn cell-neighbor [cell direction]
  (let [[row col] (::pos cell)
        [mrow mcol] (::max-pos cell)]
    (case direction
      :north (when (> row 0) [(dec row) col])
      :west  (when (> col 0) [row (dec col)])
      :south (when (< row mrow) [(inc row) col])
      :east  (when (< col mcol) [row (inc col)]))))

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
        :args (s/cat :grid ::grid :position ::cell-position)
        :ret pos-int?
        :fn #(= (-> % :args :position)
                (::pos (get (-> % :args :grid ::cells) (-> % :ret)))))

(defn cell-index [grid [row col]]
  (+ (* row (::cols grid)) col))

(s/fdef grid-cell
        :args (s/cat :grid ::grid :position ::cell-position)
        :ret ::cell)

(defn grid-cell [grid [row col]]
  ((::cells grid) (cell-index grid [row col])))

(s/fdef random-pos
        :args (s/cat :grid ::grid)
        :ret ::cell-position)

(defn random-pos [{:keys [::rows ::cols] :as grid}]
  (let [row (rand-int rows)
        col (rand-int cols)]
    [row col]))

(s/fdef grid-size
        :args (s/cat :grid ::grid)
        :ret pos-int?)

(defn grid-size [{:keys [::rows ::cols]}]
  (* rows cols))

(s/fdef grid-row-positions
        :args (s/cat :grid ::grid)
        ;; maybe this double-nesting could be made clearer by defining a
        ;; separate predicate, maybe ::row-positions or something.
        :ret (s/every (s/every ::cell-position :kind vector?) :kind vector?))

(defn grid-row-positions [{:keys [::rows ::cols]}]
  "Grid cell positions, batched into rows."
  (for [row (range rows)]
    (for [col (range cols)]
      [row col])))

(s/fdef grid-positions
        :args (s/cat :grid ::grid)
        :ret (s/coll-of ::cell-position :type vector?))

(defn grid-positions [{:keys [::rows ::cols]}]
  (for [row (range rows) col (range cols)]
    [row col]))

(s/fdef grid-deadends
        :args (s/cat :grid ::grid)
        :ret (s/coll-of ::cell :type vector?))

(defn grid-deadends [grid]
  (filter #(= 1 (count (::links %)))
          (map #(grid-cell grid %) (grid-positions grid))))

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
        :args (s/cat :grid ::grid :cell ::cell :neighbor-pos ::cell-position)
        :ret ::grid)

(defn link-cells [{:keys [::cells ::changed-cells] :as grid}
                  {cell-pos ::pos cell-links ::links :as cell}
                  neighbor-pos]
  (let [neighbor (grid-cell grid neighbor-pos)
        neighbor-links (::links neighbor)]
    (assoc grid ::cells
                (assoc cells (cell-index grid cell-pos)
                             (assoc cell ::links (conj cell-links neighbor-pos))
                             (cell-index grid neighbor-pos)
                             (assoc neighbor ::links (conj neighbor-links cell-pos)))
                ::changed-cells (conj changed-cells cell-pos neighbor-pos))))

(s/fdef linked?
        :args (s/cat :cell ::cell :other-cell-pos ::cell-position)
        :ret boolean?)

(defn linked? [cell other-cell-pos]
  (contains? (::links cell) other-cell-pos))

(s/fdef make-distances
        :args (s/cat :origin ::cell-position)
        :ret (s/and ::distances ::with-changes))

(defn make-distances
  "Creates and returns a new distances object with the supplied origin."
  [origin]
  {::origin        origin
   ::max-dist      0
   origin          0
   ::changed-cells #{origin}})

(s/fdef add-distances
        :args (s/cat :distances ::distances
                     :positions (s/coll-of ::cell-position :type vector?)
                     :distance pos-int?)
        :ret ::distances)

(defn add-distances [{:keys [::changed-cells] :as distances}
                     positions
                     distance]
  (let [new-max-dist (max distance (::max-dist distances))]
    (apply assoc distances
           ::max-dist new-max-dist
           ::changed-cells (apply conj (or changed-cells #{}) positions)
           (mapcat #(vector % distance) positions))))

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
        cells-to-annotate (if changed-cells changed-cells (grid-positions grid))]
    (letfn [(get-annotations [cell-pos [label value-map]] (vector label (value-map cell-pos)))
            (assoc-cell [cell cell-pos]
              (apply assoc cell (mapcat (partial get-annotations cell-pos) specs)))
            (annotate-cell [grid cell-pos]
              (update-in grid
                         [::cells (cell-index grid cell-pos)]
                         assoc-cell cell-pos))]
      (assoc (reduce annotate-cell grid cells-to-annotate) ::changed-cells (set cells-to-annotate)))))

(defn intlabel [val]
  #?(:clj     (format "%2d" val)
     :default (util/pad 2 " " (str val))))

(defn print-grid
  ([grid] (print-grid grid false))
  ([{cols ::cols :as grid} print-positions?]
   (let [resolve (partial grid-cell grid)]
     (when print-positions?
       (println (apply str "   " (map #(str (intlabel %) "  ")) (range cols)))
       (print "  "))
     ;; top border
     (println (apply str "+" (repeat cols "---+")))
     (doseq [row (grid-row-positions grid)]
       ;; cell space line
       (when print-positions?
         (print (intlabel (ffirst row))))
       (println (apply str "|"
                       (for [cell (map resolve row)]
                         (str (if (::label cell)
                                (str " " (::label cell) " ")
                                "   ")
                              (if (linked? cell (cell-neighbor cell :east))
                                " "
                                "|")))))
       ;; bottom separator line
       (when print-positions? (print "  "))
       (println (apply str "+"
                       (for [cell (map resolve row)]
                         (str (if (linked? cell (cell-neighbor cell :south))
                                "   "
                                "---") "+"))))))))
