"use strict";

$(function (){
    let linkToAdd = `<a class="toggle-visibility" href="#">Show/Hide Answers</a>`

    //add link to div section below list
    $(".add-link").append(linkToAdd);

    /**
     * add event of click to each title to toggle highlighting
     * the specific element(dt) that was clicked.
     */
    $("dt").on("click", function (){
        $(this).toggleClass("highlight");
    });

    /**
     * add event of click to link at bottom of list. when
     * clicked, all dd's are toggled between visible/invisible
     */
    $(".toggle-visibility").on("click", function (){
        $("dd").toggleClass("invisible");
    });

    /**
     * add event to button, so it highlights the last li of
     * each ul group.
     */
    $("#highlight-last-li").on("click", function (){
        $("ul").each(function(index){
            $(this).children().last().addClass("highlight");
        });
    });

    /**
     * add event to each h3 so the ul and its list items get bolded when that
     * h3 is clicked.
     */
    $("h3").on("click", function (){
        $(this).next().children().css("font-weight", "bold");
    });

    /**
     * add event to each li item so that it makes the first li of its ul
     * group blue when clicked.
     */
    $("li").on("click", function(){
        $(this).parent().children().first().css("color", "blue");
    });


    // Placeholder for all divs with background images
    let divImages = $(".swap-image")

    /**
     * When left button is pushed. swap its background image with
     * the background image in the middle.
     */
    $("#swap-left-btn").on("click", function(){
        let tempImageURL = divImages.eq(0).css("background-image").toString();
        divImages.eq(0).css("background-image", divImages.eq(1).css("background-image").toString());
        divImages.eq(1).css("background-image", tempImageURL);
    })

    /**
     * when middle button is pushed. swap its background image with
     * either the left or right background image. position is selected
     * at random. if position = 1 (middle image) get a new random number.
     */
    $("#swap-middle-btn").on("click", function(){
        let randomPos;
        do{
            randomPos = Math.floor(Math.random() * 3)
        }while(randomPos === 1);
        let tempImageURL = divImages.eq(1).css("background-image").toString();
        divImages.eq(1).css("background-image", divImages.eq(randomPos).css("background-image").toString());
        divImages.eq(randomPos).css("background-image", tempImageURL);
    })

    /**
     * when right button is pushed. swap its background image with
     * the background image in the middle.
     */
    $("#swap-right-btn").on("click", function(){
        let tempImageURL = divImages.eq(2).css("background-image").toString();
        divImages.eq(2).css("background-image", divImages.eq(1).css("background-image").toString());
        divImages.eq(1).css("background-image", tempImageURL);
    })
});