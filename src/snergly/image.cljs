(ns snergly.image
  (:require [snergly.grid :as g]))

;; File conventions:
;;
;; Any variable called 'g' is a CanvasRenderingContext2D object.

(def *optimize-drawing* false)

(defn fill-rect [g style x y w h]
  (aset g "fillStyle" style)
  (.fillRect g x y w h))

(defn draw-line [g style x1 y1 x2 y2]
  (aset g "strokeStyle" style)
  (.beginPath g)
  (.moveTo g x1 y1)
  (.lineTo g x2 y2)
  (.stroke g))

(defn draw-cells [{:keys [changed-cells] :as grid} cell-size draw-fn]
  (doseq [coord (if (g/new? grid) (g/grid-coords grid) changed-cells)]
    (let [[y1 x1] (map #(* % cell-size) coord)
          [y2 x2] (map #(+ % cell-size) [y1 x1])
          cell (g/grid-cell grid coord)]
      (draw-fn cell cell-size x1 y1 x2 y2))))

(defn draw-cell-background [g cell cell-size x y _ _]
  (let [color (:color cell)
        ;[x w] (if (g/linked? cell (:west cell)) [(dec x) (inc cell-size)] [x cell-size])
        ;[y h] (if (g/linked? cell (:north cell)) [(dec y) (inc cell-size)] [y cell-size])
        w (if (g/linked? cell (:east cell)) (inc cell-size) cell-size)
        h (if (g/linked? cell (:south cell)) (inc cell-size) cell-size)]
    (when color (fill-rect g color x y w h))))

(defn draw-cell-walls [g background wall cell _ x1 y1 x2 y2]
  (when-not (:north cell) (draw-line g wall x1 y1 x2 y1))
  (when-not (:west cell) (draw-line g wall x1 y1 x1 y2))

  (when-not (g/linked? cell (:east cell)) (draw-line g wall x2 y1 x2 y2))
  (when-not (g/linked? cell (:south cell)) (draw-line g wall x1 y2 x2 y2)))

(defn image-grid [g {:keys [rows columns] :as grid} cell-size]
  (let [img-width (inc (* cell-size columns))
        img-height (inc (* cell-size rows))
        background "#fff"
        wall "#000"
        ;; if we aren't optimizing drawing, discard optimization information
        grid (if *optimize-drawing* grid (assoc grid :changed-cells nil))]
    (aset g "imageSmoothingEnabled" false)
    (aset g "fillStyle" background)
    (aset g "lineWidth" 0.5)
    (when (g/new? grid) (fill-rect g background 0 0 img-width img-height))
    (draw-cells grid cell-size (partial draw-cell-background g))
    (draw-cells grid cell-size (partial draw-cell-walls g background wall))))