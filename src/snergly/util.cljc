(ns snergly.util)

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

