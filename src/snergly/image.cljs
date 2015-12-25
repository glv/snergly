(ns snergly.image
  (:require [snergly.grid :as g]))
  ;(:import [java.awt Color Graphics2D]
  ;         [java.awt.image BufferedImage])

;; File conventions:
;;
;; Any variable called 'g' is a CanvasRenderingContext2D object.

(defn draw-cells [g grid cell-size draw-fn]
  (doseq [coord (g/grid-coords grid)]
    (let [[y1 x1] (map #(* % cell-size) coord)
          [y2 x2] (map #(+ % cell-size) [y1 x1])
          cell (g/grid-cell grid coord)]
      (draw-fn g cell cell-size x1 y1 x2 y2))))

(defn draw-cell-background [g cell cell-size x1 y1 _ _]
  (let [color (:color cell)]
    (when color
      (aset g "fillStyle" color)
      (.fillRect g x1 y1 cell-size cell-size))))

(defn draw-line [g x1 y1 x2 y2]
  (.beginPath g)
  (.moveTo g x1 y1)
  (.lineTo g x2 y2)
  (.stroke g))

(defn draw-cell-walls [g cell _ x1 y1 x2 y2]
  (when-not (:north cell) (draw-line g x1 y1 x2 y1))
  (when-not (:west cell) (draw-line g x1 y1 x1 y2))

  (when-not (g/linked? cell (:east cell)) (draw-line g x2 y1 x2 y2))
  (when-not (g/linked? cell (:south cell)) (draw-line g x1 y2 x2 y2)))

(defn image-grid [g {:keys [rows columns] :as grid} cell-size]
  (let [img-width (inc (* cell-size columns))
        img-height (inc (* cell-size rows))
        background "#fff"
        wall "#000"]
    (aset g "fillStyle" background)
    (aset g "strokeStyle" wall)
    (aset g "lineWidth" 0.5)
    (.fillRect g 0 0 img-width img-height)
    (draw-cells g grid cell-size draw-cell-background)
    (draw-cells g grid cell-size draw-cell-walls)))