(ns snergly.fulcro
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]]
    ;; [snergly.util :refer [xact!]]
    )
  (:require
    [snergly.algorithms :as algs]
    [snergly.animation :as anim]
    [snergly.image :as image]
    [snergly.protocols :as protocols]
    [cljs.core.async :as async]
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]
    ;; [goog.dom :as gdom]
    ;; [om.next :as om :refer-macros [defui]]
    ;; [om.dom :as dom]
    ))

(enable-console-print!)

(defonce app (app/fulcro-app))

(defsc Root [this props]
  (dom/div "TODO"))

(defn ^:export init
  "Shadow-cljs sets this up to be our entry-point function.
See shadow-cljs.edn `:init-fn` in the modules of the main build."
  []
  (app/mount! app Root "app")
  (js/console.log "Loaded"))

(defn ^:export refresh
  "During development, shadow-cljs will call this on every hot reload of source.
See shadow-cljs.edn"
  []
  (app/mount! app Root "app")
  (comp/refresh-dynamic-queries! app)
  (js/console.log "Hot reload"))

;; This file, for now, is just a place to map out and describe the behavior
;; of snergly.core (the Om Next version) so that I can start to remember the
;; details and map how it would work in a Fulcro version.

;; ui: an implementation of protocols/UI.
;; (report-status) transacts the set-status mutation with the passed message
;; (report-update) transacts two mutations: first, set-status with the status
;;     message from the render state, then set-render-state with the
;;     :render-state field.

;; init-data: sets the initial state of the data. There are two parts:
;;     1. Lists of algorithms and analyses. These can probably be just vars.
;;     2. :maze
;;        * :animation
;;          * :active boolean
;;          * :animator an anim/AsyncAnimator containing a channel
;;          * :cell-size int
;;          * :render-state starts as nil
;;        * :params
;;          * :algorithm string
;;          * :rows int
;;          * :cols int
;;          * :analysis string
;;          * :start-row int
;;          * :start-col int
;;          * :end-row int
;;          * :end-col int

;; ------- Om multimethods

;; a default implementation of read that just pulls the value of a single key
;;     from the state

;; 3 mutations:
;; - set-maze-param
;; - set-status
;; - set-render-state

;; ------- Components

;; utility ready-to-go: used to control enabled state of the Go button
;; utility animate-if-active: called in the maze component's mount and update
;;     callbacks
;; utility randomize-params: used to implement the Choose random parameters
;;     function

;; MazeDisplay (and factory):
;; * <mount and update callbacks that call animate-if-active>
;; * div
;;   * Go button (disabled if active or not ready-to-go) that starts animation
;;   * canvas (if render-state in state is not nil)

;; MazeControl Panel (and factory): straightforward HTML

;; ------- Initialization

;; probably not needed for Fulcro

;; ------- Utilities

;; various REPL and JS console helper methods
