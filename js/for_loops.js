(function (){
    "use strict";

    function showMultiplicationTable(num){
        for(let i = 1; i <= 10; i++){
            console.log(num + " x " + i + " = " + (num * i));
        }
    }

    showMultiplicationTable(parseFloat(prompt("Enter a number for a Times Table from 1 to 10 of that number!")));

})();