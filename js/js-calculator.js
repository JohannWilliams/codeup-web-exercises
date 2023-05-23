"use strict";

console.log("Script reached.");
let input1 = 0;
let input2 = 0;
let operand = "";
let inputArr = ["left-input", "operand-input", "right-input"];
let activeInput = 0;

function getInput1(){
   input1 = parseFloat(document.getElementById(inputArr[0]).value);
}

function getInput2(){
   input2 = parseFloat(document.getElementById(inputArr[2]).value);
}

function getOperand(){
   operand = document.getElementById(inputArr[1]).value;
}

function clearAllFields(){
   document.getElementById("left-input").value = "";
   document.getElementById("operand-input").value = "";
   document.getElementById("right-input").value = "";
   document.getElementById("output").value = "";
   activeInput = 0;
}

function performOperation(){
    getInput1();
    getInput2();
    getOperand();
    if(operand === "*"){
        document.getElementById("output").value = input1 * input2;
    } else if(operand === "+"){
        document.getElementById("output").value = input1 + input2;
    }else if(operand === "-"){
        document.getElementById("output").value = input1 - input2;
    }else if(operand === "/"){
        document.getElementById("output").value = input1 / input2;
    } else {
        document.getElementById("output").value = "";
    }
    if(document.getElementById("output").value === "NaN"){
        document.getElementById("output").value = "";
        document.getElementById(inputArr[0]).value = "";
        document.getElementById(inputArr[2]).value = "";
    } else {
        document.getElementById(inputArr[0]).value = document.getElementById("output").value;
        document.getElementById(inputArr[2]).value = "";
    }
}

function percentOfInput(){
    let value = parseFloat(document.getElementById(inputArr[activeInput]).value)/100;
    if(activeInput === 0){
        input1 = value;
        document.getElementById(inputArr[activeInput]).value = value;
    } else if(activeInput === 2){
        input2 = value;
        document.getElementById(inputArr[activeInput]).value = value;
    }
}

function updateInputField(value){
    if(activeInput === 0){
        document.getElementById(inputArr[activeInput]).value += value;
    } else if(activeInput === 2){
        document.getElementById(inputArr[activeInput]).value += value;
    }
}

function updateOperandField(value){
    activeInput = 1;
    document.getElementById(inputArr[activeInput]).value = value;
    activeInput = 2;
}

function flipSign(){
    document.getElementById(inputArr[activeInput]).value = parseFloat(document.getElementById(inputArr[activeInput]).value) * -1;
}

document.getElementById("clear").addEventListener("click", clearAllFields);

document.getElementById("equals").addEventListener("click", performOperation);

document.getElementById("percent").addEventListener("click", percentOfInput);

let numBtnArr = [];

for(let i = 0; i < 10; i++){
    let numBtn = document.getElementById(i.toString());
    numBtn.addEventListener("click", function (){
        updateInputField(i);
    });
    numBtnArr.push(numBtn);
}

document.getElementById("dot").addEventListener("click", function (){
    updateInputField(".");
});

document.getElementById("divide").addEventListener("click", function (){
    updateOperandField("/");
});

document.getElementById("multiply").addEventListener("click", function (){
    updateOperandField("*");
});

document.getElementById("addition").addEventListener("click", function (){
    updateOperandField("+");
});

document.getElementById("minus").addEventListener("click", function (){
    updateOperandField("-");
});

document.getElementById("switch-sign").addEventListener("click", function (){
    flipSign();
});