(function (){
    "use strict";

    /**
     * start of while problem.
     * print the powers of 2 starting with 2 until 65536
     */
    let i = 1;

    while(2**i < 70000){
        console.log(2**i);
        i++;
    }



})();