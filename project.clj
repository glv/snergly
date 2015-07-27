(defproject snergly "0.1.0-SNAPSHOT"
  :description "Maze algorithms in Clojure (from Jamis Buck's /Mazes for Programmers/ book)"
  :url "http://github.com/glv/snergly"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main ^:skip-aot snergly.core
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/tools.cli "0.3.1"]])
