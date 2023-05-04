(function () {
    "use strict";

    /**
     * Warmup 1
     * make a function that returns the number 7
     * @returns {number}
     */

    function returnSeven() {
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

        if (typeof num === "number") {
            for (let i = 1; i <= num / 2; i++) {
                if (num % i === 0) {
                    factorArr.push(i);
                }
            }
            if (num !== 0) {
                factorArr.push(num);
            }
        } else {
            factorArr = false;
        }

        return factorArr;
    }

    // console.log(findFactors(6)); // returns [1,2,3,6];
    // console.log(findFactors(16)); // returns [1,2,4,8,16];
    // console.log(findFactors(0)); // returns [];
    // console.log(findFactors(true)); // returns false;
    // console.log(findFactors("13")); // returns false;
    // console.log(findFactors([54, 72, 144])); // returns false;
    // console.log(findFactors({value: 64})); // returns false;
    // console.log(findFactors()); // returns false;

    // Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

    /**
     * Warmup 3 count "e" in string
     * return count of "e" or false.
     * @param str
     * @returns {boolean}
     */
    function countEs(str) {
        let eCount = false;
        if (typeof str === "string") {
            // eCount = 0;
            str = str.toLowerCase();

            // take the string and split it at each instance
            // of e. returns an array with length 1 greater
            // than the count of e's.
            eCount = str.split("e").length - 1;

            // search each index of str for e and increment eCount;
            // for(let i = 0; i < str.length; i++){
            //     if(str[i] === "e"){
            //         eCount++;
            //     }
            // }
        }
        return eCount;
    }

    //
    // console.log(countEs("Ease")); // returns 2;
    // console.log(countEs("teleconference")); // returns 5;
    // console.log(countEs("TOM")); // returns 0;
    // console.log(countEs(true)); // returns false;
    // console.log(countEs(['e', 'E'])); // returns false;
    // console.log(countEs()); // returns false;


    // Write a function that takes in a string and returns true if the argument contains at least one instance of the letter 'e'. This should be case-insensitive. If the argument is not a string, or if the argument does not contain 'e' it should return false.

    /**
     * Warmup 4 contains "e" case insensitive
     * return true if string and contains "e" else false.
     * @param str
     * @returns {boolean}
     */
    function containsE(str) {
        let contains = false;
        if (typeof str === "string") {
            contains = str.toLowerCase().includes("e");
        }
        return contains
    }

    // console.log(containsE("Ease")); // returns true;
    // console.log(containsE("teleconference")); // returns true;
    // console.log(containsE("TOME")); // returns true;
    // console.log(containsE("TOM")); // returns false;
    // console.log(containsE(true)); // returns false;
    // console.log(containsE(['e', 'E'])); // returns false;
    // console.log(containsE()); // returns false;


    // Write a function named fizzBuzz that prints to the console the number 1 - 100. If the number is divisible by 3 print fizz instead of the number. If the number is divisible by 5 print buzz. If the number is divisible by both 3 and 5 print fizzBuzz

    /**
     * Warmup 4 prints numbers 1-100
     * if number / 3 has a remainder of 0 print fizz
     * if number / 5 has a remainder of 0 print Buzz
     * if both reminders are 0 print fizzBuzz
     */
    function fizzBuzz(){
        let output;
        for(let i = 1; i <= 100; i++){
            if(i % 3 === 0){
                output = "fizz";
                if(i % 5 === 0){
                    output += "Buzz";
                }
            } else if(i % 5 === 0){
                output = "Buzz";
            } else {
                output = i;
            }
            console.log(output);
        }


    }

    fizzBuzz();

})();
