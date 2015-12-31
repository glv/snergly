(ns snergly.image
  (:require [snergly.grid :as g]))

;; File conventions:
;;
;; Any variable called 'g' is a CanvasRenderingContext2D object.

(def *optimize-drawing* false)

(defn draw-cells-orig [{:keys [changed-cells] :as grid} cell-size draw-fn]
  (doseq [coord (g/grid-coords grid)]
    (when (or (g/new? grid) (contains? changed-cells coord))
      (let [[y1 x1] (map #(* % cell-size) coord)
            [y2 x2] (map #(+ % cell-size) [y1 x1])
            cell (g/grid-cell grid coord)]
        (draw-fn cell cell-size x1 y1 x2 y2)))))

(defn draw-cells [{:keys [changed-cells] :as grid} cell-size draw-fn]
  (doseq [coord (if (g/new? grid) (g/grid-coords grid) changed-cells)]
    (let [[y1 x1] (map #(* % cell-size) coord)
          [y2 x2] (map #(+ % cell-size) [y1 x1])
          cell (g/grid-cell grid coord)]
      (draw-fn cell cell-size x1 y1 x2 y2))))

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

(defn draw-cell-walls [g background wall cell _ x1 y1 x2 y2]
  (aset g "strokeStyle" wall)
  (when-not (:north cell) (draw-line g x1 y1 x2 y1))
  (when-not (:west cell) (draw-line g x1 y1 x1 y2))

  (aset g "strokeStyle" (if (g/linked? cell (:east cell)) background wall))
  (draw-line g x2 y1 x2 y2)
  (aset g "strokeStyle" (if (g/linked? cell (:south cell)) background wall))
  (draw-line g x1 y2 x2 y2))

(defn image-grid [g {:keys [rows columns] :as grid} cell-size]
  (let [img-width (inc (* cell-size columns))
        img-height (inc (* cell-size rows))
        background "rgba(255, 255, 255, 1)"
        wall "rgba(0, 0, 0, 1)"
        ;; if we aren't optimizing drawing, discard optimization information
        grid (if *optimize-drawing* grid (assoc grid :changed-cells nil))
        ]
    (aset g "imageSmoothingEnabled" false)
    (aset g "fillStyle" background)
    (aset g "lineWidth" 0.5)
    (when (g/new? grid) (.fillRect g 0 0 img-width img-height))
    (draw-cells grid cell-size (partial draw-cell-background g))
    (draw-cells grid cell-size (partial draw-cell-walls g background wall))))