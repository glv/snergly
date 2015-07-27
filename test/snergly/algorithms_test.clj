(ns snergly.algorithms-test
  (:require [clojure.test :refer :all]
            [snergly.grid :as grid]
            [snergly.algorithms :refer :all]))

(deftest t-maze-binary-tree
  (grid/print-grid
    (maze-binary-tree (grid/make-grid 5 5))))

(deftest t-maze-sidewinder
  (grid/print-grid
    (maze-sidewinder (grid/make-grid 5 5))))