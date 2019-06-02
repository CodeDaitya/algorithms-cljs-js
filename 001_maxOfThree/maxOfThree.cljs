; (max-of-three-nums 9 0.8 9)
(defn max-of-three-nums 
  "Function which returns the maximum of the three nums"
  [x y z]
  (cond
        (and (> x y) (> x z)) x
        (and (> y z) (> y x)) y
        :else z))



