(ns snergly.image
  (:require [cljs.spec :as s]
            [snergly.grid :as g]
            [snergly.util :as util]
            [clojure.set :as set]))

;; File conventions:
;;
;; Any variable called 'g' is a CanvasRenderingContext2D object.

(def optimize-drawing false)

(s/def ::color-family (set (keys util/color-families)))
(s/def ::status (s/nilable string?))
(s/def ::grid (s/nilable ::g/grid))
(s/def ::dist-1 (s/nilable ::g/distances))
(s/def ::dist-2 (s/nilable ::g/distances))
(s/def ::path (s/nilable ::g/distances))
(s/def ::color-family-1 ::color-family)
(s/def ::color-family-2 ::color-family)
(s/def ::color-family-path ::color-family)
(s/def ::render-state (s/keys :req [::status
                                    ::grid
                                    ::dist-1
                                    ::color-family-1
                                    ::dist-2
                                    ::color-family-2
                                    ::path
                                    ::color-family-path]))
(s/def ::distances (s/and ::g/distances))
(s/def ::color-family ::color-family)
(s/def ::expected-max-dist int?)
(s/def ::distance-map (s/keys :req [::distances
                                    ::color-family
                                    ::expected-max-dist]))
(s/def ::path-map (s/keys :req [::distances
                                ::color-family]))


;; I think this animation-state stuff should really be in image as render-state
;; or something like that, because it will be useful in the plain Clojure
;; version as well.  But at the moment, this namespace doesn't have a dependency
;; on image, so I want to think about it before I do that.

(def render-state {::status nil
                   ::grid nil
                   ::dist-1 nil
                   ::color-family-1 :green
                   ::dist-2 nil
                   ::color-family-2 :blue
                   ::path nil
                   ::color-family-path :red
                   })

;; To debug the optimized drawing:
;; * set snergly.image/optimize-drawing to true
;; * set snergly.core/sync-by-frame to false
;; * in snergly.core/sync-chan, change the parameter of async/timeout
;;   from 0 to 1000.
;;
;; When I do this, I can tell that the cell background starts too far up
;; and to the left, so that redrawing the background makes the top and left
;; borders half-width.  And the right and left borders, if they are drawn,
;; become progressively thicker; I think this is just because of the canvas
;; drawing strokes with translucency for some reason, even

(defn fill-rect [g style x y w h]
  (aset g "fillStyle" style)
  (.fillRect g x y w h))

(defn draw-line [g style x1 y1 x2 y2]
  (aset g "strokeStyle" style)
  (.beginPath g)
  (.moveTo g x1 y1)
  (.lineTo g x2 y2)
  (.stroke g))

(def strokewidth 1.0)

(s/fdef draw-cell-backgrounds
        :args (s/cat :g identity :grid ::g/grid :cell-size ::g/non-negative?
                     :background string? :distance-maps (s/coll-of ::distance-map :type map?)
                     :changed-cells (s/coll-of ::g/cell-position :type set?)))

(defn draw-cell-backgrounds [g
                             grid
                             cell-size
                             background
                             distance-maps
                             changed-cells]
  (doseq [pos changed-cells]
    (let [{:keys [::distances ::color-family ::expected-max-dist] :as distance-map} (first (filter #(contains? (::distances %) pos) distance-maps))
          [y x] (map #(* % cell-size) pos)
          cell (g/grid-cell grid pos)
          x (if (g/linked? cell (::g/west cell)) (- x 0.5) x)
          y (if (g/linked? cell (::g/north cell)) (- y 0.5) y)
          w (if (g/linked? cell (::g/east cell)) (+ cell-size 0.5) cell-size)
          h (if (g/linked? cell (::g/south cell)) (+ cell-size 0.5) cell-size)
          ;; Ignore max-dist until optimized rendering is completely working.
          ;; Right now, this causes a distracting sudden darkening of the colors
          ;; at the end of each distances pass.
          ;; max-dist (if (:max-pos distances) (:max-dist distances) expected-max-dist)
          max-dist (::g/max-dist distances)
          color (if distance-map
                  (util/make-color max-dist (distances pos) color-family)
                  background)]
      (fill-rect g color x y w h))))

(s/fdef draw-cell-walls
        :args (s/cat :g identity :grid ::g/grid :cell-size ::g/non-negative?
                     :wall string? ::changed-cells (s/coll-of ::g/cell-position :type set?)))

(defn draw-cell-walls [g
                       grid
                       cell-size
                       wall
                       changed-cells]
  (doseq [pos changed-cells]
    (let [[y1 x1] (map #(* % cell-size) pos)
          [y2 x2] (map #(+ % cell-size) [y1 x1])
          cell (g/grid-cell grid pos)]
      (when-not (::g/north cell) (draw-line g wall x1 y1 x2 y1))
      (when-not (::g/west cell) (draw-line g wall x1 y1 x1 y2))

      (when-not (g/linked? cell (::g/east cell)) (draw-line g wall x2 y1 x2 y2))
      (when-not (g/linked? cell (::g/south cell)) (draw-line g wall x1 y2 x2 y2)))))

(defn center [pos cell-size]
  (map #(+ (* % cell-size) (/ cell-size 2)) (reverse pos)))

(s/fdef draw-path
        :args (s/cat :g identity :cell-size ::g/non-negative?
                     :path-map ::path-map :changed-cells (s/coll-of ::g/cell-position :type set?)))

(defn draw-path [g
                 cell-size
                 path-map
                 changed-cells]
  ;(println (str "Would draw path for " (count changed-cells) " cells."))
  (let [path-distances (::distances path-map)
        color (util/make-color 1 1 (::color-family path-map))
        inverted-path-map (set/map-invert (dissoc path-distances ::g/max-dist))
        path-cells (take-while (complement nil?) (map inverted-path-map (range (::g/max-dist path-distances) -1 -1)))
        move-to (fn [g [x y]] (.moveTo g x y))
        line-to (fn [g [x y]] (.lineTo g x y))]
    (aset g "strokeStyle" "#f00")
    (aset g "lineWidth" 2)
    (.beginPath g)
    (move-to g (center (first path-cells) cell-size))
    (doseq [next (rest path-cells)]
      (line-to g (center next cell-size)))
    (.stroke g)))

(s/fdef draw-cells
        :args (s/cat :g identity :grid ::g/grid :cell-size ::g/non-negative?
                     :background string? :wall string?
                     :distance-maps (s/coll-of ::distance-map :type vector?)
                     :path-map (s/? ::path-map)))

(defn draw-cells [g
                  grid
                  cell-size
                  background
                  wall
                  distance-maps
                  path-map]
  (let [changed-cells (or (when-not optimize-drawing (set (g/grid-positions grid)))
                          (when path-map (::g/changed-cells (::distances path-map)))
                          (first (map (comp ::g/changed-cells ::distances) distance-maps))
                          (::g/changed-cells grid)
                          (set (g/grid-positions grid)))]
    (draw-cell-backgrounds g grid cell-size background distance-maps changed-cells)
    (draw-cell-walls g grid cell-size wall changed-cells)
    (when path-map (draw-path g cell-size path-map changed-cells))
  ))

(s/fdef image-grid
        :args (s/cat :g identity :render-state ::render-state :cell-size ::g/non-negative?))

(defn image-grid [g
                  {:keys [::grid
                          ::dist-1 ::color-family-1
                          ::dist-2 ::color-family-2
                          ::path ::color-family-path] :as render-state}
                  cell-size]
  (let [{rows ::g/rows cols ::g/cols} grid
        _ (println (str "rows: " rows))
        img-width (inc (* cell-size cols))
        img-height (inc (* cell-size rows))
        background "#fff"                                ; cljs
        wall "#000"                                      ; cljs
        ;; The need for these DistanceMap values is a holdover, but for now I'm
        ;; going to leave them here to contain the ripple effects from changing
        ;; to the RenderState objects.
        dist-specs (remove #(nil? (::distances %))
                           [{::distances dist-2 ::color-family color-family-2 ::expected-max-dist (g/grid-size grid)}
                            {::distances dist-1 ::color-family color-family-1 ::expected-max-dist (g/grid-size grid)}])
        path-spec (when path {::distances path ::color-family color-family-path})
        ;; if we aren't optimizing drawing, discard optimization information
        ;grid (if *optimize-drawing* grid (assoc grid :changed-cells nil))
        ]
    (aset g "imageSmoothingEnabled" false)               ; cljs
    (aset g "fillStyle" background)                      ; cljs
    (aset g "lineWidth" strokewidth)                     ; cljs
    (when (g/new? grid)
      (fill-rect g background 0 0 img-width img-height)) ; cljs
    (draw-cells g grid cell-size background wall dist-specs path-spec)
    )
  )
