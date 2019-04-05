ES5
    function
    var -   scoping/hoisting
    apply method
    callback

            function A() {

            }

            function B(cb) { // CB is Function A
                cb(); // A()
            }

            B(A)
    closure


            function seq(startValue) {
                let i = startValue;

                return function incr() {
                    i++;
                    return i;
                }   
            }

            const seq1Func = seq(0)

            seq1Func(); 


            const seq1000Func = seq(1000)

            seq1000Func(); 