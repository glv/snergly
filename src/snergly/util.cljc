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
  ([max-distance distance] (color-cell max-distance distance :green))
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

;; This is from clojure.core.async.lab, and is not available in the cljs
;; version of core.async.  But it works fine and it's exactly what I need.
(defn spool
  "Take a sequence and puts each value on a channel and returns the channel.
   If no channel is provided, an unbuffered channel is created. If the
   sequence ends, the channel is closed."
  ([s c]
   (go-loop [[f & r] s]
     (if f
       (do
         (async/>! c f)
         (recur r))
       (async/close! c)))
   c)
  ([s]
   (spool s (async/chan))))