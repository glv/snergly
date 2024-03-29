(ns snergly.algorithms-properties
  (:import (clojure.lang PersistentQueue))
  (:require [clojure.test :refer :all]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.clojure-test :refer :all]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as sg]
            [clojure.spec.test.alpha :as st]
            [clojure.set :as set]
            [snergly.algorithms :refer :all]
            [snergly.grid :as grid]))

(st/instrument 'snergly.algorithms)
(st/instrument 'snergly.grid)

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

;; -----------------------------------------------------------------------------
;; Generators

(def gen-dimen (s/gen ::grid/grid-dimen))

(def gen-grid
  (sg/fmap #(apply grid/make-grid %) (sg/vector gen-dimen 2)))

(def gen-grid-and-coord
  (sg/bind gen-grid
           (fn [grid] (sg/tuple (sg/return grid)
                                (sg/tuple
                                  (s/gen (s/int-in 0 (::grid/rows grid)))
                                  (s/gen (s/int-in 0 (::grid/cols grid))))))))

(def gen-maze-and-coord
  (sg/bind gen-grid-and-coord
           (fn [[grid coord]] (sg/tuple (sg/return (last (binary-tree-seq grid)))
                                        (sg/return coord)))))

;; -----------------------------------------------------------------------------
;; Utility and validation functions

(defn grid-cells [g]
  (map #(grid/grid-cell g %) (grid/grid-positions g)))

(defn new-grid?
  [grid]
  (and (grid/new? grid)
       (every? empty?
               (map #(::grid/links (grid/grid-cell grid %)) (grid/grid-positions grid)))))

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
                   links (remove #(= parent %) (::grid/links cell))
                   next-frontier (apply conj frontier (map #(vector % current-coord) links))]
               (recur (peek next-frontier)
                      (pop next-frontier)
                      (conj visited current-coord)))))))

(defn actual-change-sets [grids]
  (letfn [(link-set [g coord]
            (set (::grid/links (grid/grid-cell g coord))))
          (cell-changed? [a b coord]
            (not= (link-set a coord) (link-set b coord)))
          (changed-cells [[a b]]
            {:pre [(and (= (::grid/rows a) (::grid/rows b))
                        (= (::grid/cols a) (::grid/cols b)))]}
            (set (filter (partial cell-changed? a b) (grid/grid-positions a))))]
    (map changed-cells (partition 2 1 grids))))

;; -----------------------------------------------------------------------------
;; Capturing asynchronous updates

(defn all-updates [algorithm-fn]
  (sequence updates-only (algorithm-fn)))

(defn final-update [algorithm-fn]
  (last (all-updates algorithm-fn)))

;; -----------------------------------------------------------------------------
;; Property definitions for maze algorithms

;; Is the final grid a perfect maze?
(defmacro check-algorithm-perfect-maze [alg-name]
  `(defspec ~(symbol (str alg-name "-produces-a-perfect-maze"))
     5
     (prop/for-all [grid# gen-grid]
       (let [final# (final-update (partial (algorithm-functions ~alg-name) grid#))
             links# (map ::grid/links (grid-cells final#))
             distances# (last (distances-seq final# [0 0]))
             ]
         (every? not-empty links#)                    ; quick check for no isolated cells
         (every? #(contains? distances# %) (grid/grid-positions final#)) ; every cell reachable
         (not (has-cycle? final#))                    ; no cycles
         ))))

;; Is every cell eventually changed?
(defmacro check-algorithm-all-cells-changed [alg-name]
  `(defspec ~(symbol (str alg-name "-all-cells-changed"))
     10
     (prop/for-all [grid# gen-grid]
       (let [updates# (all-updates (partial (algorithm-functions ~alg-name) grid#))
             change-sets# (filter identity (map ::grid/changed-cells updates#))
             changed-cells# (apply set/union change-sets#)]
         (= (set (grid/grid-positions grid#)) changed-cells#)))))

;; Does each update link exactly two cells?
(defmacro check-algorithm-updates-link-2 [alg-name]
  `(defspec ~(symbol (str alg-name "-links-two-cells-each-update"))
     5
     (prop/for-all [grid# gen-grid]
       (let [updates# (all-updates (partial (algorithm-functions ~alg-name) grid#))
             update-change-sets# (map ::grid/changed-cells updates#)]
         (every? (fn [cs#] (= 2 (count cs#)))
                 update-change-sets#)))))

;; Is each update's :changed-cells set accurate?
(defmacro check-algorithm-cells-changed-is-accurate [alg-name]
  `(defspec ~(symbol (str alg-name "-cells-changed-is-accurate"))
     5
     (prop/for-all [grid# gen-grid]
       (let [updates# (all-updates (partial (algorithm-functions ~alg-name) grid#))
             update-change-sets# (map ::grid/changed-cells updates#)
             actual-change-sets# (actual-change-sets (cons grid# updates#))]
         (every? (fn [[a# c#]] (= a# c#)) (partition 2 (interleave actual-change-sets# update-change-sets#)))))))

(defmacro check-algorithm-properties
  [alg-name & specs]

  (let [specs (cond
                (empty? specs)     #{:perfect :all-changed :accurate-changes :updates-link-2}
                :else              (set specs))]
    `(do
       (when (contains? ~specs :perfect)
         (check-algorithm-perfect-maze ~alg-name))

       (when (contains? ~specs :all-changed)
         (check-algorithm-all-cells-changed ~alg-name))

       (when (contains? ~specs :updates-link-2)
         (check-algorithm-updates-link-2 ~alg-name))

       (when (contains? ~specs :accurate-changes)
         (check-algorithm-cells-changed-is-accurate ~alg-name))

       )
    ))

;; -----------------------------------------------------------------------------
;; Checking the algorithms

(check-algorithm-properties "binary-tree")
(check-algorithm-properties "sidewinder")
(check-algorithm-properties "wilsons")
(check-algorithm-properties "aldous-broder")
(check-algorithm-properties "hunt-and-kill")
(check-algorithm-properties "recursive-backtracker")

;; -----------------------------------------------------------------------------
;; Properties for analysis algorithms

(defspec distances-seq-changes-each-cell-exactly-once
  10
  (prop/for-all [[grid start-coord] gen-grid-and-coord]
    (let [maze (final-update #((algorithm-functions "binary-tree") grid))
          updates (all-updates #(distances-seq maze start-coord))
          change-sets (filter identity (map ::grid/changed-cells updates))
          change-appearances (conj (apply concat change-sets) start-coord)
          change-counts (group-by identity change-appearances)]
      (every? #(= 1 (count %)) (vals change-counts))
      (= (set (grid/grid-positions grid))
         (set (keys change-counts))))))

(defspec distances-seq-each-intermediate-changes
  5
  (prop/for-all [[grid start-coord] gen-grid-and-coord]
    (let [maze (final-update #((algorithm-functions "binary-tree") grid))
          intermediates (butlast (all-updates #(distances-seq maze start-coord)))
          change-sets (map ::grid/changed-cells intermediates)]
      (every? not-empty change-sets))))

(defspec distances-seq-max-advances-by-1
  10
  (prop/for-all [[maze start-coord] gen-maze-and-coord]
    (let [intermediates (all-updates #(distances-seq maze start-coord))
          maxes (map ::grid/max-dist intermediates)]
      (every? #(= 1 %)
              (map (fn [[a b]] (- b a)) (partition 2 1 maxes))))))

(defspec path-seq-each-intermediate-changes
         5
         (prop/for-all [grid gen-grid]
                       (let [maze (final-update #((algorithm-functions "binary-tree") grid))
                             dist1 (last (distances-seq maze [0 0]))
                             dist2 (last (distances-seq maze (::grid/max-pos dist1)))
                             intermediates (all-updates #(path-seq maze dist2 (::grid/max-pos dist2)))
                             change-sets (map ::grid/changed-cells intermediates)]
                         (every? not-empty change-sets))))
