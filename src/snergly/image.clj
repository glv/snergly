(ns snergly.image
  (:import [java.awt Color Graphics2D]
           [java.awt.image BufferedImage])
  (:require [snergly.grid :refer :all]))

;; TODO: update this to work like the cljs version and use a RenderState
;; object and not require annotating the cells.
(defn draw-cells [^Graphics2D g grid cell-size draw-fn]
  (doseq [coord (grid-coords grid)]
    (let [[y1 x1] (map #(* % cell-size) coord)
          [y2 x2] (map #(+ % cell-size) [y1 x1])
          cell (grid-cell grid coord)]
      (draw-fn g cell cell-size x1 y1 x2 y2))))

(defn draw-cell-background [^Graphics2D g cell cell-size x1 y1 _ _]
  (let [color (:color cell)]
    (when color
      (.setColor g color)
      (.fillRect g x1 y1 cell-size cell-size))))

(defn draw-cell-walls [^Graphics2D g cell _ x1 y1 x2 y2]
  (when-not (:north cell) (.drawLine g x1 y1 x2 y1))
  (when-not (:west cell) (.drawLine g x1 y1 x1 y2))

  (when-not (linked? cell (:east cell)) (.drawLine g x2 y1 x2 y2))
  (when-not (linked? cell (:south cell)) (.drawLine g x1 y2 x2 y2)))

(defn image-grid [{:keys [rows columns] :as grid} cell-size]
  (let [img-width (inc (* cell-size columns))
        img-height (inc (* cell-size rows))
        background Color/white
        wall Color/black
        img (BufferedImage. img-width img-height BufferedImage/TYPE_INT_RGB)
        g (.createGraphics img)]
    (.setColor g background)
    (.fillRect g 0 0 img-width img-height)
    (draw-cells g grid cell-size draw-cell-background)
    (.setColor g wall)
    (draw-cells g grid cell-size draw-cell-walls)
    img))