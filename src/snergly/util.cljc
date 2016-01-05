(ns snergly.util
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go-loop]]))
  (:require #?(:clj [clojure.core.async :as async :refer [go-loop]]
               :cljs [cljs.core.async :as async])))

(defn- pad [size char s]
  (let [needed (- size (count s))]
    (if (<= needed 0)
      s
      (str (apply str (repeat needed char)) s))))

(defn color-cell [max-distance distance]
  (let [intensity (/ (float (- max-distance distance)) max-distance)
        dark (Math/round (* 255 intensity))
        bright (Math/round (+ 128 (* 127 intensity)))]
    #?(:clj     (java.awt.Color. dark bright dark)
       :cljs    (let [hex2 #(pad 2 "0" (.toString % 16))]
                  (str "#" (hex2 dark) (hex2 bright) (hex2 dark))))))

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