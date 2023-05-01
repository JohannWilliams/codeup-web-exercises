(function (){
    "use strict";

    /**
     * Warmup 1
     * make a function that returns the number 7
     * @returns {number}
     */

    function returnSeven(){
        return 7;
    }

    // console.log(`Calling returnSeven function to get: ${returnSeven()}`);


    // Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

    /**
     * Warmup 2.
     * return all factors of a number as an array.
     * @param num
     * @returns {*[]}
     */
    function findFactors(num) {
        let factorArr = [];

        if(typeof num === "number"){
            for(let i = 1; i <= num / 2; i++){
                if(num % i === 0){
                    factorArr.push(i);
                }
            }
            if(num !== 0) {
                factorArr.push(num);
            }
        } else {
            factorArr = false;
        }

        return factorArr;
    }

    console.log(findFactors(6)); // returns [1,2,3,6];
    console.log(findFactors(16)); // returns [1,2,4,8,16];
    console.log(findFactors(0)); // returns [];
    console.log(findFactors(true)); // returns false;
    console.log(findFactors("13")); // returns false;
    console.log(findFactors([54, 72, 144])); // returns false;
    console.log(findFactors({value: 64})); // returns false;
    console.log(findFactors()); // returns false;


})();
