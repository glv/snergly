(ns snergly.grid-properties
  (:require [clojure.test :refer :all]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.clojure-test :refer :all]
            [schema.test]
            [snergly.grid :refer :all]))

(use-fixtures :once schema.test/validate-schemas)

(def gen-dimen-and-coord
  (gen/bind gen/s-pos-int
            (fn [dimen] (gen/tuple (gen/return dimen) (gen/choose 0 (dec dimen))))))

(defn valid-coord?
  ([{:keys [rows cols]} [row col]] (valid-coord? rows cols row col))
  ([rows cols [row col]] (valid-coord? rows cols row col))
  ([rows cols row col]
   (and (>= row 0)
        (< row rows)
        (>= col 0)
        (< col cols))))

(defspec cell-is-within-grid
  40
  (prop/for-all [[rows row] gen-dimen-and-coord
                 [cols col] gen-dimen-and-coord]
    (let [cell (make-cell row col rows cols)]
      (valid-coord? rows cols (:coord cell)))))

(defspec cell-knows-about-neighbors
  50
  (prop/for-all [[rows row] gen-dimen-and-coord
                 [cols col] gen-dimen-and-coord]
    (let [cell (make-cell row col rows cols)]
      (and (if (> row 0)
             (= (:north cell) [(dec row) col])
             (nil? (:north cell)))
           (if (< row (dec rows))
             (= (:south cell) [(inc row) col])
             (nil? (:south cell)))
           (if (> col 0)
             (= (:west cell) [row (dec col)])
             (nil? (:west cell)))
           (if (< col (dec cols))
             (= (:east cell) [row (inc col)])
             (nil? (:east cell)))))))

(defspec cell-neighbors-returns-all-neighbors
  100
  (prop/for-all [[rows row] gen-dimen-and-coord
                 [cols col] gen-dimen-and-coord]
    (let [cell (make-cell row col rows cols)
          neighbors (into #{} (cell-neighbors cell))
          neighbor-test (fn [tf r c]
                          (= tf (contains? neighbors [r c])))
          is-neighbor (fn [r c]
                        (contains? neighbors [r c]))
          isnt-neighbor (fn [r c] (not (is-neighbor r c)))]
      (and (neighbor-test (> row 0) (dec row) col)
           (neighbor-test (< row (dec rows)) (inc row) col)
           (neighbor-test (> col 0) row (dec col))
           (neighbor-test (< col (dec cols)) row (inc col))))))

(defspec grids-are-well-formed
  30
  (prop/for-all [rows gen/s-pos-int
                 cols gen/s-pos-int]
    (let [grid (make-grid rows cols)]
      (and (= rows (:rows grid))
           (= cols (:columns grid))
           (= (* rows cols) (count (:cells grid)))))))

(defspec random-coords-are-within-grid
  100
  (prop/for-all [rows gen/s-pos-int
                 cols gen/s-pos-int]
    (let [grid (make-grid rows cols)
          [row col] (random-coord grid)]
      (valid-coord? rows cols row col))))

(defspec grid-row-coords-for-each-cell
  10
  (prop/for-all [rows gen/s-pos-int
                 cols gen/s-pos-int]
    (let [grid (make-grid rows cols)]
      (= (grid-size grid)
         (count (apply concat (grid-row-coords grid)))))))

(defspec grid-coords-for-each-cell
  10
  (prop/for-all [rows gen/s-pos-int
                 cols gen/s-pos-int]
    (let [grid (make-grid rows cols)]
      (= (grid-size grid)
         (count (grid-coords grid))))))
