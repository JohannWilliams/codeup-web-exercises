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
     * Warmup 5 prints numbers 1-100
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

    // fizzBuzz();



    // Warmup 6:
    // Create a do-while loop that starts at 2, and displays the number squared on each line while the number is less than 1,000,000. Output should equal:
    // 2
    // 4
    // 16
    // 256
    // 65536

    /**
     * Warmup 6
     * log a number for each time it is squared
     * until that number gets to 1M.
     */
    let x = 2;
    do{
        //console.log(x);
        // x = x**2;
        // x *= x;
        x = Math.pow(x, 2);
    } while(x < 1000000);


    // Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).

    /**
     * Warmup 7
     * add all numbers in array and return sum.
     * @param numArr
     * @returns {number}
     */
    function addEmUp(numArr) {
        let sum = 0;
        numArr.forEach(function (num){
           sum +=  num;
        });
        return sum;
    }
    //
    // console.log(addEmUp([2,6,19])); // returns 27
    // console.log(addEmUp([-99, 180, -5])); // returns 76
    // console.log(addEmUp([44,10,7])); // returns 61
    // console.log(addEmUp([-100])); // returns -100
    // console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
    // console.log(addEmUp([-13, -92, -3500])) // returns -3605


    // Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and a isEvenLength property that contains a boolean for whether the string's length is even or not.


    /**
     * used for warmup 8 explainString
     * returns true if number is even else false
     * @param num
     * @returns {boolean}
     */
    function isEven(num){
        return num % 2 === 0;
    }

    /**
     * Warmup 8 takes in a string and makes an object out of the string
     * returning object with the string, count of e's in string and is
     * length even or not.
     * @param str
     * @returns {{numberOfEs: boolean, string, isEvenLength: boolean}}
     */
    function explainString(str) {
        let strObj = {
            string: str,
            numberOfEs: countEs(str),
            isEvenLength: isEven(str.length)
        }
        return strObj;
    }
    //
    // console.log(explainString("cheese")); // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
    // console.log(explainString("dog")); // returns {string: "dog", numberOfEs: 0, isEvenLength: false}





    // Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

    /**
     * object for use in warmup 9 extractNames
     * @type {[{fur: string[], gender: string, name: string, dateOfBirth: string, heightInMM: number},{fur: string[], gender: string, name: string, dateOfBirth: string, heightInMM: number},{fur: string[], gender: string, name: string, dateOfBirth: string, heightInMM: number},{fur: string[], gender: string, name: string, dateOfBirth: string, heightInMM: number},{fur: string[], gender: string, name: string, dateOfBirth: string, heightInMM: number}]}
     */
    const hamsters = [
        {
            name: "Hamtaro",
            heightInMM: 86,
            fur: ['orange', 'white'],
            gender: "male",
            dateOfBirth: "August 6"
        } , {
            name: "Bijou",
            heightInMM: 75,
            fur: ['white'],
            gender: "female",
            dateOfBirth: "July 10"
        } , {
            name: "Oxnard",
            heightInMM: 100,
            fur: ['grey', 'white'],
            gender: "male",
            dateOfBirth: "May 3"
        } , {
            name: "Boss",
            heightInMM: 120,
            fur: ['brown', 'white'],
            gender: "male",
            dateOfBirth: "September 21"
        } , {
            name: "Snoozer",
            heightInMM: 85,
            fur: ['brown', 'white', "pink"],
            gender: "male",
            dateOfBirth: "January 14"
        }
    ];

    /**
     * Warmup 9
     * from array of objects return an array with just their names.
     * @param objArr
     * @returns {*[]}
     */
    function extractNames(objArr){
        let names = [];
        objArr.forEach(function (obj){
            names.push(obj.name);
        });
        return names;
    }

    // console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];


    /**
     * Warup 10
     * Take in an array of objects and return the
     * object with the highest heightInMM.
     * @param objArr
     * @returns {boolean}
     */
    function getTallest(objArr){
        let returnObj = null;

        objArr.forEach(function (obj){
            if(returnObj === null){
                returnObj = obj;
            } else {
                if(returnObj.heightInMM < obj.heightInMM){
                    returnObj = obj;
                }
            }
        })

        if(returnObj === null){
            returnObj = false;
        }

        return returnObj;
    }

    console.log(getTallest(hamsters));

})();
