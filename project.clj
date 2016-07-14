(defproject snergly "0.1.0-SNAPSHOT"
  :description "Maze algorithms in Clojure (from Jamis Buck's /Mazes for Programmers/ book)"
  :url "http://github.com/glv/snergly"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main ^:skip-aot snergly.core
  :dependencies [[org.clojure/clojure "1.9.0-alpha10"]
                 [org.clojure/clojurescript "1.9.89"]
                 [org.clojure/tools.cli "0.3.5"]
                 [org.clojure/core.async "0.2.385"]
                 ;[sablono "0.4.0"]
                 [org.omcljs/om "1.0.0-alpha34"] ; newest version is 1.0.0-alpha32
                 [org.clojure/test.check "0.9.0"] ; just to download
                 ;[com.datomic/simulant "0.1.8"] ; just to download
                 ;[com.cognitect/transit-clj "0.8.285"] ; just to download
                 ;[com.cognitect/transit-cljs "0.8.232"] ; just to download
                 ;[datascript "0.13.1"] ; just to download
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]
                 ]
  :profiles {:dev {:dependencies [[org.clojure/test.check "0.9.0"]]}}
  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-figwheel "0.5.4-3"] ; may require reversion to old version
            ;[figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"] ; just to download
            ]
  :source-paths ["src"]
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]

                        :figwheel {:on-jsload "snergly.core/on-js-reload"}

                        :compiler {:main snergly.core
                                   :asset-path "js/compiled/out"
                                   :output-to "resources/public/js/compiled/snergly.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "min"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/compiled/snergly.js"
                                   :main snergly.core
                                   :optimizations :advanced
                                   :parallel-build true
                                   :pretty-print false}}]}
  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
