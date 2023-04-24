"use strict";

(function (){
    // Declaring an array.
    let emptyArr = [];

    console.log(Array.isArray(emptyArr));

    let cheeses = ["Cheddar", "String", "Wensleydale",]; // This array contains 3 elements.

    let falsyValues = [0, "", false, undefined, null]; // We can collect different data types using arrays.
    //...However, this can lead to some unintended results with a looping/iterative structure.

    console.log(cheeses[1]); // This will print the second element in our cheese array.
    console.log(cheeses.indexOf("Cheddar")); // this will return and print 0.
    console.log(cheeses[0].indexOf("Brie")); // this returns -1
    console.log(cheeses[0].indexOf("dar")); // this returns 4
    console.log(cheeses.indexOf("White Cheddar")); // This will return and print -1
    console.log(cheeses[cheeses.length - 1]); // This will return and print Wensleydale.

    console.log(cheeses.length); // this will return the length of the array cheeses.

    // Let's create a loop to print all of our cheeses to the console.

    for(let i = 0; i < cheeses.length; i++){
        console.log(cheeses[i]);
    }

    // print the array in reverse.
    for(let i = cheeses.length - 1; i >= 0; i--){
        console.log(cheeses[i]);
    }

    // for each loop
    cheeses.forEach(function (cheese){
        console.log(cheese);
    });

    // for each using index param.
    cheeses.forEach(function (cheese, index){
        console.log(`${index}: ${cheese}`);
    });

    // for each using array param. element and index change with each iteration and array does not.
    cheeses.forEach(function (cheese, index, array){
        console.log(`${index}: ${cheese}`);
        console.log(array);
    });

})();