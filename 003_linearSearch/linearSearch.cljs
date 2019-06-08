;TODO I can't just do `lumo linearSearch.cljs`

(def a-list [1 2 3])

;; METHOD-1
 (map (fn [x]
         (if (= x 1)
           (println "1 found")))
       a-list)


;; METHOD-2
(for [i a-list]
        (if (= i 1)
           (println "1 found"))
       a-list)

