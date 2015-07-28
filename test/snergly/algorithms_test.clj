(ns snergly.algorithms-test
  (:require [clojure.test :refer :all]
            [snergly.grid :as grid]
            [snergly.algorithms :refer :all]))

(defn finish-a [north-side? east-side? rand-choice]
  (or east-side?
      (and (not north-side?)
           (= 0 rand-choice))))

(defn finish-b [north-side? east-side? rand-choice]
  (let [continue-run? (fn [has-north-neighbor? has-east-neighbor? rand-choice]
                        (and has-east-neighbor?
                             (not (and has-north-neighbor?
                                       (= 1 rand-choice)))))]
    (not (continue-run? (not north-side?)
                        (not east-side?)
                        (if (= rand-choice 0) 1 0)))))

(deftest check-finish-algorithms
  (are [north-side? east-side? rand-choice] (= (finish-a north-side? east-side? rand-choice)
                                               (finish-b north-side? east-side? rand-choice))
    true true 0
    true true 1
    true false 0
    true false 1
    false true 0
    false true 1
    false false 0
    false false 1))