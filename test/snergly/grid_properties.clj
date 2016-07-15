(ns snergly.grid-properties
  (:require [clojure.test :refer :all]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.spec :as s]
            [clojure.spec.gen :as sg]
            [clojure.spec.test :as st]
            [snergly.grid :as g]))

(st/instrument 'snergly.grid)

(def gen-dimen (s/gen ::g/grid-dimen))

(def gen-dimen-and-coord
  (sg/bind gen-dimen
           (fn [dimen] (sg/tuple (sg/return dimen) (s/gen (s/int-in 0 dimen))))))

(defn valid-pos?
  ([{:keys [rows cols]} [row col]] (valid-pos? rows cols row col))
  ([rows cols [row col]] (valid-pos? rows cols row col))
  ([rows cols row col]
   (and (>= row 0)
        (< row rows)
        (>= col 0)
        (< col cols))))

(defspec cell-is-within-grid
  40
  (prop/for-all [[rows row] gen-dimen-and-coord
                 [cols col] gen-dimen-and-coord]
    (let [cell (g/make-cell row col rows cols)]
      (valid-pos? rows cols (::g/pos cell)))))

(defspec cell-knows-about-neighbors
  50
  (prop/for-all [[rows row] gen-dimen-and-coord
                 [cols col] gen-dimen-and-coord]
    (let [cell (g/make-cell row col rows cols)]
      (and (if (> row 0)
             (= (::g/north cell) [(dec row) col])
             (nil? (::g/north cell)))
           (if (< row (dec rows))
             (= (::g/south cell) [(inc row) col])
             (nil? (::g/south cell)))
           (if (> col 0)
             (= (::g/west cell) [row (dec col)])
             (nil? (::g/west cell)))
           (if (< col (dec cols))
             (= (::g/east cell) [row (inc col)])
             (nil? (::g/east cell)))))))

(defspec cell-neighbors-returns-all-neighbors
  100
  (prop/for-all [[rows row] gen-dimen-and-coord
                 [cols col] gen-dimen-and-coord]
    (let [cell (g/make-cell row col rows cols)
          neighbors (into #{} (g/cell-neighbors cell))
          neighbor-test (fn [tf r c]
                          (= tf (contains? neighbors [r c])))
          is-neighbor (fn [r c]
                        (contains? neighbors [r c]))
          isnt-neighbor (fn [r c] (not (is-neighbor r c)))]
      (and (neighbor-test (> row 0) (dec row) col)
           (neighbor-test (< row (dec rows)) (inc row) col)
           (neighbor-test (> col 0) row (dec col))
           (neighbor-test (< col (dec cols)) row (inc col))))))

(defspec grid-is-well-formed
  30
  (prop/for-all [rows gen-dimen
                 cols gen-dimen]
    (let [grid (g/make-grid rows cols)]
      (and (= rows (::g/rows grid))
           (= cols (::g/cols grid))
           (= (* rows cols) (count (::g/cells grid)))))))

(defspec random-pos-is-within-grid
  100
  (prop/for-all [rows gen-dimen
                 cols gen-dimen]
    (let [grid (g/make-grid rows cols)
          [row col] (g/random-pos grid)]
      (valid-pos? rows cols row col))))

(defspec grid-row-positions-includes-all-cells
  10
  (prop/for-all [rows gen-dimen
                 cols gen-dimen]
    (let [grid (g/make-grid rows cols)]
      (= (g/grid-size grid)
         (count (apply concat (g/grid-row-positions grid)))))))

(defspec grid-positions-includes-all-cells
  10
  (prop/for-all [rows gen-dimen
                 cols gen-dimen]
    (let [grid (g/make-grid rows cols)]
      (= (g/grid-size grid)
         (count (g/grid-positions grid))))))
