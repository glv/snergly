(ns snergly.util
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go-loop]]))
  (:require #?(:clj [clojure.core.async :as async :refer [go-loop]]
               :cljs [cljs.core.async :as async])))

(defn- pad [size char s]
  (let [needed (- size (count s))]
    (if (<= needed 0)
      s
      (str (apply str (repeat needed char)) s))))

(def color-families
  (into {} (map-indexed (fn [i k] [k i]) [:dark-grey
                                          :blue
                                          :green
                                          :aqua
                                          :red
                                          :purple
                                          :olive
                                          :light-grey])))

(defn make-color
  ([max-distance distance] (make-color max-distance distance :green))
  ([max-distance distance color-family]
   (let [max-distance-f (float max-distance)
         distance-f (float distance)
         adjusted-distance (min max-distance-f (+ (* distance-f 0.9) (* max-distance-f 0.1)))
         intensity (/ (- max-distance-f adjusted-distance) max-distance-f)
         dark (Math/round (* 255 intensity))
         bright (Math/round (+ 128 (* 127 intensity)))
         color-pattern (color-families color-family)
         rgb (reverse (map (fn [n] (if (bit-test color-pattern n) bright dark)) (range 3)))]
     #?(:clj     (java.awt.Color. (nth rgb 0) (nth rgb 1) (nth rgb 2))
        :cljs    (let [hex2 #(pad 2 "0" (.toString % 16))]
                   (apply str "#" (map hex2 rgb)))))))

(defn base36 [num]
  #?(:clj (java.lang.Integer/toString num 36)
     :cljs (.toString num 36)))

#?(:clj
   (defmacro xact! [reconciler-or-component & forms]
     `(om.next/transact! ~reconciler-or-component
                         (apply vector [~@(map (fn [form#]
                                                 `(apply list [(quote ~(first form#)) ~@(rest form#)]))
                                               forms)])))
   )