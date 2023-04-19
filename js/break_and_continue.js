(function (){
    "use strict";

    let num = parseInt(prompt("Enter an odd number from 1 to 50"));

    /**
     * NOTE:
     * the while loop can have a condition to check for the correct input type
     * and if the correct input type is not given then you just prompt the user
     * again. The prompt will display until the condition is met for a correct
     * input.
     */
    while(true){
        if(isNaN(num) || num % 2 === 0 || num < 1 || num > 50 || num === undefined){
            num = parseInt(prompt("Incorrect input please try again. Odd Number between 1 and 50"));
        } else {
            break;
        }
    }

    console.log("Number to skip is: " + num);

    for(let i = 1; i <= 50; i++){
        if(i % 2 !== 0) {
            if(i === num){
                console.log("Yikes! Skipping number: " + i);
                continue;
            }
            console.log("Here is an odd number: " + i);
        }
    }

})();