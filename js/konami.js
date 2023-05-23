"use strict";

$(function(){
    let keyArr = [];
    let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let isCode = false;

    $(document).keyup(function(event){
        if(event.key.toString() === "Enter"){
            keyArr.forEach(function(key){
            });
            checkCodeMatch();
            keyArr = [];
        }else{
            keyArr.push(event.key.toString());
        }
    });

    function checkCodeMatch(){
        if(konamiCode.length === keyArr.length){
            for(let i = 0; i < konamiCode.length; i++){
                if(konamiCode[i] !== keyArr[i]){
                    isCode = false;
                    break;
                } else {
                    isCode = true;
                }
            }
        }
        if(isCode){
            alert("You have added 30 lives!");
        }
        isCode = false;
    }

});