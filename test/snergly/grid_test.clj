(ns snergly.grid-test
  (:require [clojure.test :refer :all]
            [schema.test]
            [snergly.grid :refer :all]))

(use-fixtures :once schema.test/validate-schemas)

(deftest t-make-cell
  (testing "middle cell"
    (let [cell (make-cell 3 5 10 15)]
      (are [expected key] (= expected (key cell))
        :Cell :type
        [3 5] :coord
        [2 5] :north
        [4 5] :south
        [3 6] :east
        [3 4] :west
        #{} :links)))
  (testing "north border cell"
    (let [cell (make-cell 0 5 10 15)]
      (are [expected key] (= expected (key cell))
        [0 5] :coord
        nil :north
        [1 5] :south
        [0 6] :east
        [0 4] :west)))
  (testing "south border cell"
    (let [cell (make-cell 9 5 10 15)]
      (is (= [9 5] (:coord cell)))
      (is (nil? (:south cell)))))
  (testing "east border cell"
    (let [cell (make-cell 3 14 10 15)]
      (is (= [3 14] (:coord cell)))
      (is (nil? (:east cell)))))
  (testing "west border cell"
    (let [cell (make-cell 3 0 10 15)]
      (is (= [3 0] (:coord cell)))
      (is (nil? (:west cell))))))

(deftest t-cell-neighbors
  (let [cell (make-cell 1 0 2 3)]
    (is (= #{[0 0] [1 1]} (set (cell-neighbors cell))))
    (is (= [[1 1]] (cell-neighbors cell [:south :east :west])))))

(deftest t-make-grid
  (let [grid (make-grid 2 3)]
    (are [expected key] (= expected (key grid))
      :Grid :type
      2 :rows
      3 :columns)
    (is (= 6 (count (:cells grid))))
    (is (= (make-cell 1 1 2 3)
           ((:cells grid) 4)))
    (is (= (make-cell 0 2 2 3)
           ((:cells grid) 2)))))

(deftest t-cell-index
  (let [grid3x5 (make-grid 3 5)
        grid5x3 (make-grid 5 3)]
    (is (= 6 (cell-index grid3x5 1 1)))
    (is (= 4 (cell-index grid5x3 1 1)))
    (is (= 14 (cell-index grid3x5 2 4)))
    (is (= 14 (cell-index grid5x3 4 2)))))

(deftest t-grid-cell
  (let [grid3x5 (make-grid 3 5)]
    (is (= (make-cell 2 3 3 5)
           (grid-cell grid3x5 2 3)))
    (is (= (make-cell 2 3 3 5)
           (grid-cell grid3x5 [2 3])))))

(deftest t-grid-row-coords
  (let [grid3x5 (make-grid 3 5)
        rowseq (grid-row-coords grid3x5)]
    (is (seq? rowseq))
    (is (= 3 (count rowseq)))
    (doseq [row rowseq]
      (is (seq? row))
      (is (= 5 (count row))))
    (is (= [1 3]
           (-> rowseq (nth 1) (nth 3))))
    (is (= [2 4]
           (-> rowseq (nth 2) (nth 4))))))

(deftest t-begin-step
  (let [grid3x5 (assoc (make-grid 3 5) :changed-cells #{[0 1] [2 3]})]
    (let [reset-grid (begin-step grid3x5)]
      (is (empty? (:changed-cells reset-grid))))))

(deftest t-link-cells
  (let [grid3x5 (assoc (make-grid 3 5) :changed-cells #{[0 1] [2 3]})]
    (let [linked-grid (link-cells grid3x5
                                  (grid-cell grid3x5 1 3)
                                  [2 3])]
      (is (contains? (:links (grid-cell linked-grid 1 3)) [2 3]))
      (is (contains? (:links (grid-cell linked-grid 2 3)) [1 3]))
      (is (= #{[0 1] [2 3] [1 3]} (:changed-cells linked-grid))))))

(deftest t-grid-annotate-cells
  (let [grid3x2 (make-grid 3 2)
        labels {:origin [1 1]
                :max-coord [0 0]
                :max 2
                [0 0] 2
                [0 1] 1
                [1 0] 1
                [1 1] 0
                [2 0] 2
                [2 1] 1}
        annotated (grid-annotate-cells grid3x2 {:distance labels})]
    (are [pos dist] (= dist (:distance (grid-cell annotated pos)))
                    [0 0] 2
                    [0 1] 1
                    [1 0] 1
                    [1 1] 0
                    [2 0] 2
                    [2 1] 1)))
