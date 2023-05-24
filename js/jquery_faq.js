"use strict";

$(function (){
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
});