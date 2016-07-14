(ns snergly.grid-test
  (:require [clojure.test :refer :all]
            [clojure.spec :as s]
            [clojure.spec.test :as st]
            [snergly.grid :as g]))

(st/instrument 'snergly.grid)

(deftest t-make-cell
  (testing "middle cell"
    (let [cell (g/make-cell 3 5 10 15)]
      (are [expected key] (= expected (key cell))
        [3 5] ::g/coord
        [2 5] ::g/north
        [4 5] ::g/south
        [3 6] ::g/east
        [3 4] ::g/west
        #{}   ::g/links)))
  (testing "north border cell"
    (let [cell (g/make-cell 0 5 10 15)]
      (are [expected key] (= expected (key cell))
        [0 5] ::g/coord
        nil   ::g/north
        [1 5] ::g/south
        [0 6] ::g/east
        [0 4] ::g/west)))
  (testing "south border cell"
    (let [cell (g/make-cell 9 5 10 15)]
      (is (= [9 5] (::g/coord cell)))
      (is (nil? (::g/south cell)))))
  (testing "east border cell"
    (let [cell (g/make-cell 3 14 10 15)]
      (is (= [3 14] (::g/coord cell)))
      (is (nil? (::g/east cell)))))
  (testing "west border cell"
    (let [cell (g/make-cell 3 0 10 15)]
      (is (= [3 0] (::g/coord cell)))
      (is (nil? (::g/west cell))))))

(deftest t-cell-neighbors
  (let [cell (g/make-cell 1 0 2 3)]
    (is (= #{[0 0] [1 1]} (set (g/cell-neighbors cell))))
    (is (= [[1 1]] (g/cell-neighbors cell [:south :east :west])))))

(deftest t-make-grid
  (let [grid (g/make-grid 2 3)]
    (are [expected key] (= expected (key grid))
      2 ::g/rows
      3 ::g/cols)
    (is (= 6 (count (::g/cells grid))))
    (is (= (g/make-cell 1 1 2 3)
           ((::g/cells grid) 4)))
    (is (= (g/make-cell 0 2 2 3)
           ((::g/cells grid) 2)))))

(deftest t-cell-index
  (let [grid3x5 (g/make-grid 3 5)
        grid5x3 (g/make-grid 5 3)]
    (is (= 6 (g/cell-index grid3x5 [1 1])))
    (is (= 4 (g/cell-index grid5x3 [1 1])))
    (is (= 14 (g/cell-index grid3x5 [2 4])))
    (is (= 14 (g/cell-index grid5x3 [4 2])))))

(deftest t-grid-cell
  (let [grid3x5 (g/make-grid 3 5)]
    (is (= (g/make-cell 2 3 3 5)
           (g/grid-cell grid3x5 [2 3])))))

(deftest t-grid-row-coords
  (let [grid3x5 (g/make-grid 3 5)
        rowseq (g/grid-row-coords grid3x5)]
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
  (let [grid (assoc (g/make-grid 3 5) ::g/changed-cells #{[0 1] [2 3]})
        reset-grid (g/begin-step grid)]
    (is (empty? (::g/changed-cells reset-grid))))
  (let [distances (assoc (g/make-distances [1 1]) ::g/changed-cells #{[0 1] [2 3]})
        reset-distances (g/begin-step distances)]
    (is (empty? (::g/changed-cells reset-distances)))))

(deftest t-new?
  (let [g (g/make-grid 2 2)]
    (is (g/new? g))
    (is (not (g/new? (g/begin-step g))))
    (is (not (g/new? (assoc g ::g/changed-cells #{[0 0]})))))
  (let [d (g/make-distances [0 0])]
    (is (not (g/new? d)))
    (is (not (g/new? (g/begin-step d))))
    (is (not (g/new? (assoc d ::g/changed-cells #{[0 0]}))))))

(deftest t-changed?
  (let [g (g/make-grid 2 2)]
    (is (not (g/changed? g)))
    (is (not (g/changed? (g/begin-step g))))
    (is (g/changed? (assoc g ::g/changed-cells #{[0 0]}))))
  (let [d (g/make-distances [0 0])]
    (is (g/changed? d))
    (is (not (g/changed? (g/begin-step d))))
    (is (g/changed? (assoc d ::g/changed-cells #{[0 0]})))))

(deftest t-link-cells
  (let [grid3x5 (assoc (g/make-grid 3 5) ::g/changed-cells #{[0 1] [2 3]})
        linked-grid (g/link-cells grid3x5
                                  (g/grid-cell grid3x5 [1 3])
                                  [2 3])]
    (is (contains? (::g/links (g/grid-cell linked-grid [1 3])) [2 3]))
    (is (contains? (::g/links (g/grid-cell linked-grid [2 3])) [1 3]))
    (is (= #{[0 1] [2 3] [1 3]} (::g/changed-cells linked-grid)))))

(deftest t-add-distances
  (let [dist (assoc (g/make-distances [0 0]) ::g/changed-cells #{[0 1] [2 3]})
        updated-dist (g/add-distances dist [[0 2] [2 3]] 1)]
    (is (= 1 (updated-dist [0 2])))
    (is (= 1 (updated-dist [2 3])))
    (is (= #{[0 1] [2 3] [0 2]} (::g/changed-cells updated-dist)))))

(deftest t-grid-annotate-cells
  (let [grid3x2 (g/make-grid 3 2)
        new (g/make-distances [1 1])
        changed (g/add-distances new [[0 1] [1 0] [2 1]] 1)
        complete (g/add-distances changed [[0 0] [2 0]] 2)
        annotated (g/grid-annotate-cells grid3x2 {:new-dist new
                                                  :changed-dist changed
                                                  :complete-dist complete})]
    (are [pos dist] (= dist (:new-dist (g/grid-cell annotated pos)))
                    [0 0] nil
                    [0 1] nil
                    [1 0] nil
                    [1 1] 0
                    [2 0] nil
                    [2 1] nil)
    (are [pos dist] (= dist (:changed-dist (g/grid-cell annotated pos)))
                    [0 0] nil
                    [0 1] 1
                    [1 0] 1
                    [1 1] 0
                    [2 0] nil
                    [2 1] 1)
    (are [pos dist] (= dist (:complete-dist (g/grid-cell annotated pos)))
                    [0 0] 2
                    [0 1] 1
                    [1 0] 1
                    [1 1] 0
                    [2 0] 2
                    [2 1] 1)))
