(function (){
    "use strict";

    /**
     * start of problem. times table. 1 - 10
     */
    function showMultiplicationTable(num){
        for(let i = 1; i <= 10; i++){
            console.log(num + " x " + i + " = " + (num * i));
        }
    }

    showMultiplicationTable(parseFloat(prompt("Enter a number for a Times Table from 1 to 10 of that number!")));


    /**
     * start of next problem display even odd for 10 random numbers from 20-200
     */

    function isEven(input){
        let even = false;
        if(!isNaN(input) && input !== Infinity && input !== true && input !== false && input != null){
            if(input % 2 === 0){
                even = true;
            }
        }
        return even;
    }

    for(let i = 0; i < 10; i++){
        let random = Math.floor((Math.random() * 180) + 20);
        if(isEven(random)){
            console.log(random + " is even!");
        } else {
            console.log(random + " is odd!");
        }
    }



    /**
     * start of next problem
     * display the below output with a for loop
     * 1
     * 22
     * 333
     * 4444
     * 55555
     * 666666
     * 7777777
     * 88888888
     * 999999999
     */

    for(let i = 1; i < 10; i++){
        console.log(i.toString().repeat(i));
    }


    /**
     * start of next problem, log all multiples of 5 starting from 100 and going down to 5.
     */

    for(let i = 100; i >= 5; i -= 5){
        console.log(i);
    }

})();