(ns snergly.grid-test
  (:require [clojure.test :refer :all]
            [clojure.spec :as s]
            [clojure.spec.test :as st]
            [snergly.grid :refer :all]))

(s/instrument-ns 'snergly.grid)

(deftest t-make-cell
  (testing "middle cell"
    (let [cell (make-cell 3 5 10 15)]
      (are [expected key] (= expected (key cell))
        :Cell :snergly.grid/type
        [3 5] :snergly.grid/coord
        [2 5] :snergly.grid/north
        [4 5] :snergly.grid/south
        [3 6] :snergly.grid/east
        [3 4] :snergly.grid/west
        #{}   :snergly.grid/links)))
  (testing "north border cell"
    (let [cell (make-cell 0 5 10 15)]
      (are [expected key] (= expected (key cell))
        [0 5] :snergly.grid/coord
        nil   :snergly.grid/north
        [1 5] :snergly.grid/south
        [0 6] :snergly.grid/east
        [0 4] :snergly.grid/west)))
  (testing "south border cell"
    (let [cell (make-cell 9 5 10 15)]
      (is (= [9 5] (:snergly.grid/coord cell)))
      (is (nil? (:snergly.grid/south cell)))))
  (testing "east border cell"
    (let [cell (make-cell 3 14 10 15)]
      (is (= [3 14] (:snergly.grid/coord cell)))
      (is (nil? (:snergly.grid/east cell)))))
  (testing "west border cell"
    (let [cell (make-cell 3 0 10 15)]
      (is (= [3 0] (:snergly.grid/coord cell)))
      (is (nil? (:snergly.grid/west cell))))))

(deftest t-cell-neighbors
  (let [cell (make-cell 1 0 2 3)]
    (is (= #{[0 0] [1 1]} (set (cell-neighbors cell))))
    (is (= [[1 1]] (cell-neighbors cell [:south :east :west])))))

(deftest t-make-grid
  (let [grid (make-grid 2 3)]
    (are [expected key] (= expected (key grid))
      :Grid :snergly.grid/type
      2 :snergly.grid/rows
      3 :snergly.grid/cols)
    (is (= 6 (count (:snergly.grid/cells grid))))
    (is (= (make-cell 1 1 2 3)
           ((:snergly.grid/cells grid) 4)))
    (is (= (make-cell 0 2 2 3)
           ((:snergly.grid/cells grid) 2)))))

(deftest t-cell-index
  (let [grid3x5 (make-grid 3 5)
        grid5x3 (make-grid 5 3)]
    (is (= 6 (cell-index grid3x5 [1 1])))
    (is (= 4 (cell-index grid5x3 [1 1])))
    (is (= 14 (cell-index grid3x5 [2 4])))
    (is (= 14 (cell-index grid5x3 [4 2])))))

(deftest t-grid-cell
  (let [grid3x5 (make-grid 3 5)]
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
  (let [grid (assoc (make-grid 3 5) :snergly.grid/changed-cells #{[0 1] [2 3]})
        reset-grid (begin-step grid)]
    (is (empty? (:snergly.grid/changed-cells reset-grid))))
  (let [distances (assoc (make-distances [1 1]) :snergly.grid/changed-cells #{[0 1] [2 3]})
        reset-distances (begin-step distances)]
    (is (empty? (:snergly.grid/changed-cells reset-distances)))))

(deftest t-new?
  (let [g (make-grid 2 2)]
    (is (new? g))
    (is (not (new? (begin-step g))))
    (is (not (new? (assoc g :snergly.grid/changed-cells #{[0 0]})))))
  (let [d (make-distances [0 0])]
    (is (not (new? d)))
    (is (not (new? (begin-step d))))
    (is (not (new? (assoc d :snergly.grid/changed-cells #{[0 0]}))))))

(deftest t-changed?
  (let [g (make-grid 2 2)]
    (is (not (changed? g)))
    (is (not (changed? (begin-step g))))
    (is (changed? (assoc g :snergly.grid/changed-cells #{[0 0]}))))
  (let [d (make-distances [0 0])]
    (is (changed? d))
    (is (not (changed? (begin-step d))))
    (is (changed? (assoc d :snergly.grid/changed-cells #{[0 0]})))))

(deftest t-link-cells
  (let [grid3x5 (assoc (make-grid 3 5) :snergly.grid/changed-cells #{[0 1] [2 3]})
        linked-grid (link-cells grid3x5
                                (grid-cell grid3x5 [1 3])
                                [2 3])]
    (is (contains? (:snergly.grid/links (grid-cell linked-grid [1 3])) [2 3]))
    (is (contains? (:snergly.grid/links (grid-cell linked-grid [2 3])) [1 3]))
    (is (= #{[0 1] [2 3] [1 3]} (:snergly.grid/changed-cells linked-grid)))))

(deftest t-add-distances
  (let [dist (assoc (make-distances [0 0]) :snergly.grid/changed-cells #{[0 1] [2 3]})
        updated-dist (add-distances dist [[0 2] [2 3]] 1)]
    (is (= 1 (updated-dist [0 2])))
    (is (= 1 (updated-dist [2 3])))
    (is (= #{[0 1] [2 3] [0 2]} (:snergly.grid/changed-cells updated-dist)))))

(deftest t-grid-annotate-cells
  (let [grid3x2 (make-grid 3 2)
        new (make-distances [1 1])
        changed (add-distances new [[0 1] [1 0] [2 1]] 1)
        complete (add-distances changed [[0 0] [2 0]] 2)
        annotated (grid-annotate-cells grid3x2 {:new-dist new
                                                :changed-dist changed
                                                :complete-dist complete})]
    (are [pos dist] (= dist (:new-dist (grid-cell annotated pos)))
                    [0 0] nil
                    [0 1] nil
                    [1 0] nil
                    [1 1] 0
                    [2 0] nil
                    [2 1] nil)
    (are [pos dist] (= dist (:changed-dist (grid-cell annotated pos)))
                    [0 0] nil
                    [0 1] 1
                    [1 0] 1
                    [1 1] 0
                    [2 0] nil
                    [2 1] 1)
    (are [pos dist] (= dist (:complete-dist (grid-cell annotated pos)))
                    [0 0] 2
                    [0 1] 1
                    [1 0] 1
                    [1 1] 0
                    [2 0] 2
                    [2 1] 1)))
