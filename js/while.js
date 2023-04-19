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

    /**
     * end of while problem
     */

    /**
     * start of do while
     * ice cream shop
     *  -Sale all of your cones for the day.
     */

    let numCones = Math.floor(Math.random() * 50) + 50;
    console.log(numCones + " cones you need to sale.")

    do{
        let currentSaleAmount = Math.floor(Math.random() * 5) + 1;
        if(numCones - currentSaleAmount < 0){
            console.log("Cannot sale " + currentSaleAmount + " to you.\nI only have " + numCones + " left!");
        } else if(numCones - currentSaleAmount === 0){
            console.log(currentSaleAmount + " cones sold...");
            console.log("Yay! I sold them all!");
            numCones -= currentSaleAmount;
        } else {
            console.log(currentSaleAmount + " cones sold...");
            numCones -= currentSaleAmount;
        }

    } while(numCones > 0);

    /**
     * end of ice cream
     */

})();