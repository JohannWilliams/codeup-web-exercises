"use strict";

$(function(){
    let keyArr = [];
    let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let isCode = false;

    $(document).keyup(function(event){
        if(event.key.toString() === "Enter"){
            if(checkCodeMatch()){
                playCorrectCodeAudio();
            } else {
                playInvalidCodeAudio();
            }
            resetVariables();
        }else{
            keyArr.push(event.key.toString());
        }
    });

    function checkCodeMatch(){
        if(konamiCode.length === keyArr.length){
            if(konamiCode.join(" ") === keyArr.join(" ")){
                isCode = true;
            }
        }
        return isCode;
    }

    function playCorrectCodeAudio(){
        $(".audio-correct-code").trigger("play");
    }
    function playInvalidCodeAudio(){
        $(".audio-invalid-code").trigger("play");
    }

    function resetVariables(){
        keyArr = [];
        isCode = false;
    }

});