;; method-1
; (max-of-three-nums 9 0.8 9)
(defn max-of-three-nums-1
  "Function which returns the maximum of the three nums"
  [x y z]
  (cond
        (and (> x y) (> x z)) x
        (and (> y z) (> y x)) y
        :else z))


;; method-2

(defn max-of-three-nums-2
  "Function which returns the maximum of the three nums"
  [x y z]
  (Math/max x y z))
