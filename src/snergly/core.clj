(ns snergly.core
  (:require [clojure.string :as string]
            [clojure.tools.cli :refer [parse-opts]]
            [snergly.algorithms :refer :all]
            [snergly.grid :as grid]))

(def algorithms
  #{"binary-tree"
    "sidewinder"})

(defn parse-grid-size [spec]
  (condp re-matches spec
    #"^(\d{1,5})$"
    :>> (fn [match] (Integer/parseInt (match 1)))
    #"^(\d{1,5})x(\d{1,5})$"
    :>> (fn [match] (map #(Integer/parseInt %) (rest match)))
    (throw (Exception. "Grid size should be an integer (for a square grid) or a ROWSxCOLUMNS spec (e.g., 10x20)"))))

(defn usage [options-summary algorithms]
  (->> ["Snergly: run and print a maze generation algorithm."
        ""
        "Usage: lein run [options] algorithm"
        ""
        "Options:"
        options-summary
        ""
        "Algorithms:"
        (string/join \newline (map #(str "  " %) algorithms))
        "  all"]
       (string/join \newline)))

(defn error-msg [errors]
  (str "The following errors occurred while parsing your command:\n\n"
       (string/join \newline errors)))

(defn exit [status msg]
  (println msg)
  (System/exit status))

(def cli-options
  [["-s" "--size DIMENS" "Grid size (e.g. 5 or 8x5)"
    :default [5 5]
    :parse-fn parse-grid-size]
   ["-h" "--help"]])

(defn alg-fn [name]
  (ns-resolve 'snergly.algorithms (symbol (str "maze-" name))))

(defn run-and-print [algorithm-name grid-size]
  (println (str "running " algorithm-name))
  (grid/print-grid
    ((alg-fn algorithm-name) (apply grid/make-grid grid-size)))
  (println))

(defn -main [& args]
  (let [{:keys [options arguments errors summary]} (parse-opts args cli-options)]
    ;; Handle help and error conditions
    (cond
      (:help options) (exit 0 (usage summary algorithms))
      (not= (count arguments) 1) (exit 1 (usage summary algorithms))
      errors (exit 1 (error-msg errors)))
    ;; Execute program with options
    (let [algorithm-name (first arguments)]
      (cond
        (contains? algorithms algorithm-name)
        (run-and-print algorithm-name (:size options))
        (= "all" algorithm-name)
        (doseq [algorithm-name algorithms]
          (run-and-print algorithm-name (:size options)))
        :else
        (println (str "not running unknown algorithm " algorithm-name))))))
