(ns snergly.algorithms-properties
  (:import (clojure.lang PersistentQueue))
  (:require [clojure.test :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.core.async :as async]
            [clojure.set :as set]
            [schema.test]
            [snergly.algorithms :refer :all]
            [snergly.grid :as grid]))

;; This seems like a perfect application for property-based testing.  There's
;; no way to inspect a maze and prove that it was generated by a correct
;; implementation of, say, Wilson's algorithm.  And the inherent randomness of
;; the algorithms means that any particular example I come up with might not
;; expose all of the issues.
;;
;; But we do know that all of these algorithms are supposed to produce
;; "perfect" mazes (fully connected, no loops).  And I know that I want them
;; all to report intermediate results for animation purposes according to
;; particular rules.
;;
;; So if I can find a way to validate that the final maze is a perfect maze,
;; then I can have a fair degree of confidence that an implementation that
;; seems (from inspection) to correctly implement the algorithm is, in fact,
;; correct, because nearly all bugs would either disrupt that property or cause
;; a crash or non-termination.  (A bug that didn't do any of those things would
;; actually mean it was a different algorithm.)
;;
;; And if I can find a way to validate that the intermediate results are
;; reported according to my rules, then I can be confident that the animations
;; are correct.

(use-fixtures :once schema.test/validate-schemas)

;; -----------------------------------------------------------------------------
;; Generators

(def gen-dimen
  (gen/fmap inc gen/s-pos-int))

(def gen-grid
  (gen/fmap #(apply grid/make-grid %) (gen/vector gen-dimen 2)))

;; -----------------------------------------------------------------------------
;; Utility and validation functions

(defn grid-cells [g]
  (map #(grid/grid-cell g %) (grid/grid-coords g)))

(defn new-grid?
  [grid]
  (and (grid/new? grid)
       (every? empty?
               (map #(:links (grid/grid-cell grid %)) (grid/grid-coords grid)))))

(defn has-cycle?
  ([grid] (has-cycle? grid [0 0]))
  ([grid start]
   (loop [[current-coord parent] [start nil]
          frontier PersistentQueue/EMPTY
          visited #{}]
     (cond
       (nil? current-coord) false
       (contains? visited current-coord) true
       :else (let [cell (grid/grid-cell grid current-coord)
                   links (remove #(= parent %) (:links cell))
                   next-frontier (apply conj frontier (map #(vector % current-coord) links))]
               (recur (peek next-frontier)
                      (pop next-frontier)
                      (conj visited current-coord)))))))

(defn actual-change-sets [grids]
  (letfn [(link-set [g coord]
            (set (:links (grid/grid-cell g coord))))
          (cell-changed? [a b coord]
            (not= (link-set a coord) (link-set b coord)))
          (changed-cells [[a b]]
            {:pre [(and (= (:rows a) (:rows b))
                        (= (:columns a) (:columns b)))]}
            (set (filter (partial cell-changed? a b) (grid/grid-coords a))))]
    (map changed-cells (partition 2 (interleave grids (rest grids))))))

;; -----------------------------------------------------------------------------
;; Capturing asynchronous updates

(defn final-grid [algorithm-fn grid]
  (let [intermediate-chan (async/chan)
        result-chan (algorithm-fn grid intermediate-chan)]
    (async/<!! (async/go-loop []
                 (if (async/<! intermediate-chan)
                   (recur)
                   (async/<! result-chan))))))

(defn all-grids [algorithm-fn grid]
  (let [intermediate-chan (async/chan)
        result-chan (algorithm-fn grid intermediate-chan)]
    (async/<!! (async/go-loop [grids []]
                 (if-let [g (async/<! intermediate-chan)]
                   (recur (conj grids g))
                   (conj grids (async/<! result-chan)))))))

;; -----------------------------------------------------------------------------
;; Property definitions

;; In these definitions, some names are used consistently to help make
;; things clearer.
;;
;; * the word "final" refers to the final grid (the one that is the return
;;   value from the algorithm)
;; * the word "update" refers to all grids.  Each update is supposed to
;;   include changes (because there's no sense supplying them for animation
;;   unless they've changed).
;; * the word "incomplete" refers to all of the updates *prior* to the final
;;   grid.

;; Is the final grid a perfect maze?
(defmacro check-algorithm-perfect-maze [alg-name]
  `(defspec ~(symbol (str alg-name "-produces-a-perfect-maze"))
     5
     (prop/for-all [grid# gen-grid]
       (let [final# (final-grid (algorithm-functions "binary-tree") grid#)
             links# (map :links (grid-cells final#))
             distances# ((synchronous-fn find-distances) final# [0 0])
             ]
         (every? not-empty links#)                    ; quick check for no isolated cells
         (every? #(contains? distances# %) (grid/grid-coords final#)) ; every cell reachable
         (not (has-cycle? final#))                    ; no cycles
         ))))

;; Is every cell eventually changed?
(defmacro check-algorithm-all-cells-changed [alg-name]
  `(defspec ~(symbol (str alg-name "-all-cells-changed"))
     10
     (prop/for-all [grid# gen-grid]
       (let [updates# (all-grids (algorithm-functions ~alg-name) grid#)
             change-sets# (filter identity (map :changed-cells updates#))
             changed-cells# (apply set/union change-sets#)]
         (= (set (grid/grid-coords grid#)) changed-cells#)))))

;; Do all updates actually change the grid?
(defmacro check-algorithm-each-update-changes [alg-name]
  `(defspec ~(symbol (str alg-name "-each-update-changes"))
     5
     (prop/for-all [grid# gen-grid]
       (let [updates# (all-grids (algorithm-functions ~alg-name) grid#)
             change-sets# (map :changed-cells updates#)]
         (every? not-empty change-sets#)))))

;; Do all incompletes actually change the grid?
;; (A looser version of each-update-changes allowing a redundant final update)
(defmacro check-algorithm-each-incomplete-changes [alg-name]
  `(defspec ~(symbol (str alg-name "-each-incomplete-changes"))
     5
     (prop/for-all [grid# gen-grid]
       (let [incompletes# (butlast (all-grids (algorithm-functions ~alg-name) grid#))
             change-sets# (map :changed-cells incompletes#)]
         (every? not-empty change-sets#)))))

;; Does each update link exactly two cells?
(defmacro check-algorithm-updates-link-2 [alg-name]
  `(defspec ~(symbol (str alg-name "-links-two-cells-each-update"))
     5
     (prop/for-all [grid# gen-grid]
       (let [updates# (all-grids (algorithm-functions ~alg-name) grid#)
             update-change-sets# (map :changed-cells updates#)]
         (every? (fn [cs#] (= 2 (count cs#)))
                 update-change-sets#)))))

;; Does each incomplete link exactly two cells?
;; (A looser version of updates-link-2 allowing a redundant final update)
(defmacro check-algorithm-incompletes-link-2 [alg-name]
  `(defspec ~(symbol (str alg-name "-links-two-cells-each-incomplete"))
     5
     (prop/for-all [grid# gen-grid]
       (let [incompletes# (butlast (all-grids (algorithm-functions ~alg-name) grid#))
             incomplete-change-sets# (map :changed-cells incompletes#)]
         (every? (fn [cs#] (= 2 (count cs#)))
                 incomplete-change-sets#)))))

;; Is each update's :changed-cells set accurate?
(defmacro check-algorithm-cells-changed-is-accurate [alg-name]
  `(defspec ~(symbol (str alg-name "-cells-changed-is-accurate"))
     5
     (prop/for-all [grid# gen-grid]
       (let [updates# (all-grids (algorithm-functions ~alg-name) grid#)
             update-change-sets# (map :changed-cells updates#)
             actual-change-sets# (actual-change-sets (cons grid# updates#))]
         (every? (fn [[a# c#]] (= a# c#)) (partition 2 (interleave actual-change-sets# update-change-sets#)))))))

(defmacro check-algorithm-properties
  [alg-name & specs]

  (let [specs (cond
                (empty? specs)     #{:perfect :all-changed :accurate-changes :each-changes :updates-link-2}
                (= [:loose] specs) #{:perfect :all-changed :accurate-changes :each-incomplete-changes :incompletes-link-2}
                :else              (set specs))]
    `(do
       (when (contains? ~specs :perfect)
         (check-algorithm-perfect-maze ~alg-name))

       (when (contains? ~specs :all-changed)
         (check-algorithm-all-cells-changed ~alg-name))

       (when (contains? ~specs :each-changes)
         (check-algorithm-each-update-changes ~alg-name))

       (when (contains? ~specs :each-incomplete-changes)
         (check-algorithm-each-incomplete-changes ~alg-name))

       (when (contains? ~specs :updates-link-2)
         (check-algorithm-updates-link-2 ~alg-name))

       (when (contains? ~specs :incompletes-link-2)
         (check-algorithm-incompletes-link-2 ~alg-name))

       (when (contains? ~specs :accurate-changes)
         (check-algorithm-cells-changed-is-accurate ~alg-name))

       )
    ))

;; -----------------------------------------------------------------------------
;; Checking the algorithms

(check-algorithm-properties "binary-tree")
(check-algorithm-properties "sidewinder")
(check-algorithm-properties "wilsons")
;; The following two can't pass :each-changes because the last update might be a duplicate.
(check-algorithm-properties "aldous-broder" :loose)
(check-algorithm-properties "hunt-and-kill" :loose)
(check-algorithm-properties "recursive-backtracker" :loose)

;; What kinds of properties can I assert about find-distances?
;;
;; * Each cell is changed exactly once
;; * :max is monotonically increasing (starting with 1)
;; * Each step, every changed cell has distance :max
;; * (maybe) if no intermediate-chan, the result grid shows all cells changed