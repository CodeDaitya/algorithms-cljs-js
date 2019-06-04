; This is library method which relies on the shape of data being that of a map

(def data
  {:a 1 
   :b 2
   :c 3
   :d 4})


(clojure.set/rename-keys data {:a :d, :d :a})

