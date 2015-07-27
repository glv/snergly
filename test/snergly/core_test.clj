(ns snergly.core-test
  (:require [clojure.test :refer :all]
            [snergly.core :refer :all]))

(deftest t-parse-grid-size
  (println (str "match: " (parse-grid-size "5")))
  (println (str "match: " (parse-grid-size "6x7"))))
