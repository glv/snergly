(ns snergly.image
  (:require [snergly.grid :as g]
            [snergly.util :as util]
            [schema.core :as s :include-macros true]
            [clojure.set :as set]))

;; File conventions:
;;
;; Any variable called 'g' is a CanvasRenderingContext2D object.

(def optimize-drawing false)

;; I think this animation-state stuff should really be in image as render-state
;; or something like that, because it will be useful in the plain Clojure
;; version as well.  But at the moment, this namespace doesn't have a dependency
;; on image, so I want to think about it before I do that.
(def ColorFamily
  (apply s/enum (keys util/color-families)))

(def RenderState
  "Schema for animation frame state"
  {:type              (s/eq :RenderState)
   :status            (s/maybe s/Str)
   :grid              (s/maybe g/Grid)
   :dist-1            (s/maybe g/Distances)
   :color-family-1    ColorFamily
   :dist-2            (s/maybe g/Distances)
   :color-family-2    ColorFamily
   :path              (s/maybe g/Distances)
   :color-family-path ColorFamily
   })

(def render-state {:type :RenderState
                   :status nil
                   :grid nil
                   :dist-1 nil
                   :color-family-1 :green
                   :dist-2 nil
                   :color-family-2 :blue
                   :path nil
                   :color-family-path :red
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

(def DistanceMap
  "Schema for Distances with rendering info"
  {:distances g/Distances
   :color-family s/Keyword
   :expected-max-distance s/Int})

(def PathMap
  "Schema for Path with rendering info"
  {:distances g/Distances
   :color-family s/Keyword})

(def strokewidth 1.0)

(s/defn draw-cell-backgrounds [g
                               grid :- g/Grid
                               cell-size :- g/NonNegativeInt
                               background :- s/Str
                               distance-maps :- [DistanceMap]
                               changed-cells]
  (doseq [coord changed-cells]
    (let [{:keys [distances color-family expected-max-distance] :as distance-map} (first (filter #(contains? (:distances %) coord) distance-maps))
          [y x] (map #(* % cell-size) coord)
          cell (g/grid-cell grid coord)
          x (if (g/linked? cell (:west cell)) (- x 0.5) x)
          y (if (g/linked? cell (:north cell)) (- y 0.5) y)
          w (if (g/linked? cell (:east cell)) (+ cell-size 0.5) cell-size)
          h (if (g/linked? cell (:south cell)) (+ cell-size 0.5) cell-size)
          ;; Ignore max-distance until optimized rendering is completely working.
          ;; Right now, this causes a distracting sudden darkening of the colors
          ;; at the end of each distances pass.
          ;; max-distance (if (:max-coord distances) (:max distances) expected-max-distance)
          max-distance (:max distances)
          color (if distance-map
                  (util/make-color max-distance (distances coord) color-family)
                  background)]
      (fill-rect g color x y w h))))

(s/defn draw-cell-walls [g
                         grid :- g/Grid
                         cell-size :- g/NonNegativeInt
                         wall :- s/Str
                         changed-cells]
  (doseq [coord changed-cells]
    (let [[y1 x1] (map #(* % cell-size) coord)
          [y2 x2] (map #(+ % cell-size) [y1 x1])
          cell (g/grid-cell grid coord)]
      (when-not (:north cell) (draw-line g wall x1 y1 x2 y1))
      (when-not (:west cell) (draw-line g wall x1 y1 x1 y2))

      (when-not (g/linked? cell (:east cell)) (draw-line g wall x2 y1 x2 y2))
      (when-not (g/linked? cell (:south cell)) (draw-line g wall x1 y2 x2 y2)))))

(defn center [coord cell-size]
  (map #(+ (* % cell-size) (/ cell-size 2)) (reverse coord)))

(s/defn draw-path [g
                   cell-size :- g/NonNegativeInt
                   path-map :- PathMap
                   changed-cells]
  ;(println (str "Would draw path for " (count changed-cells) " cells."))
  (let [path-distances (:distances path-map)
        color (util/make-color 1 1 (:color-family path-map))
        inverted-path-map (set/map-invert (dissoc path-distances :max))
        path-cells (take-while (complement nil?) (map inverted-path-map (range (:max path-distances) -1 -1)))
        move-to (fn [g [x y]] (.moveTo g x y))
        line-to (fn [g [x y]] (.lineTo g x y))]
    (aset g "strokeStyle" "#f00")
    (aset g "lineWidth" 2)
    (.beginPath g)
    (move-to g (center (first path-cells) cell-size))
    (doseq [next (rest path-cells)]
      (line-to g (center next cell-size)))
    (.stroke g)))

(s/defn draw-cells [g
                    grid :- g/Grid
                    cell-size :- g/NonNegativeInt
                    background :- s/Str
                    wall :- s/Str
                    distance-maps :- [DistanceMap]
                    path-map :- (s/maybe PathMap)]
  (let [changed-cells (or (when-not optimize-drawing (set (g/grid-coords grid)))
                          (when path-map (:changed-cells (:distances path-map)))
                          (first (map (comp :changed-cells :distances) distance-maps))
                          (:changed-cells grid)
                          (set (g/grid-coords grid)))]
    (draw-cell-backgrounds g grid cell-size background distance-maps changed-cells)
    (draw-cell-walls g grid cell-size wall changed-cells)
    (when path-map (draw-path g cell-size path-map changed-cells))
  ))

(s/defn image-grid [g
                    {:keys [grid
                            dist-1 color-family-1
                            dist-2 color-family-2
                            path color-family-path]} :- RenderState
                    cell-size :- g/NonNegativeInt]
  (let [{:keys [rows columns]} grid
        img-width (inc (* cell-size columns))
        img-height (inc (* cell-size rows))
        background "#fff"
        wall "#000"
        ;; The need for these DistanceMap values is a holdover, but for now I'm
        ;; going to leave them here to contain the ripple effects from changing
        ;; to the RenderState objects.
        dist-specs (remove #(nil? (:distances %))
                           [{:distances dist-2 :color-family color-family-2 :expected-max-distance (g/grid-size g)}
                            {:distances dist-1 :color-family color-family-1 :expected-max-distance (g/grid-size g)}])
        path-spec (when path {:distances path :color-family color-family-path})
        ;; if we aren't optimizing drawing, discard optimization information
        ;grid (if *optimize-drawing* grid (assoc grid :changed-cells nil))
        ]
    (aset g "imageSmoothingEnabled" false)
    (aset g "fillStyle" background)
    (aset g "lineWidth" strokewidth)
    (when (g/new? grid) (fill-rect g background 0 0 img-width img-height))
    (draw-cells g grid cell-size background wall dist-specs path-spec)
    )
  )
