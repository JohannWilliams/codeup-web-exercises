"use strict";

(()=>{
    /**
     * Create Your Own Promise
     * Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
     */

    function wait(num){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num);
            }, num);
        });
    }

    console.log(wait(1000).then((message) => console.log(`You'll see this after ${message/1000} second.`)));
    console.log(wait(3000).then((message) => console.log(`You'll see this after ${message/1000} second.`)));
    for(let i = 0; i < 10; i++){
        console.log(wait(Math.floor(Math.random() * 5000) + 1000).then((message) => console.log(`You'll see this after ${message/1000} second. Loop index ${i}`)));
    }



})();