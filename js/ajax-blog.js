"use strict";

$(document).ready(function(){
    $.get("data/blog.json").done(onSuccess);
    $("#submit-form").on("click", function(event){
        event.preventDefault();
        $.post("data/blog.json",
            {
                title: $("#inputBlogTitle").val(),
                content: $("#blogContent").val(),
                date: $("#inputBlogDate").val()
            })
            .done(onPostSuccess).fail(onPostFail);
    });

    function onSuccess(data){
        let htmlPostString = "";
        data.forEach(function(post, index){
            let categoriesListHTML = `<p class="fs-4">Categories</p><ul class="list-group list-group-flush">`;
            post.categories.forEach(function(cat){
                categoriesListHTML += `<li class="list-group-item">${cat}</li>`;
            });
            categoriesListHTML += `</ul>`;

            htmlPostString += `<div class="card my-4">` +
                `<div class="card-header text-center">` +
                `Blog Post ${index + 1}` +
                `</div>` +
                `<div class="card-body">` +
                `<div class="row">` +
                `<div class="col-6 mx-auto">` +
                `<h5 class="card-title">${post.title}</h5>` +
                `<p class="card-text">${post.content}</p>` +
                `</div>` +
                `<div class="col-4">` +
                categoriesListHTML +
                `</div>` +
                `</div>` +
                `</div>` +
                `<div class="card-footer text-end text-body-secondary">` +
                `${post.date}` +
                `</div>` +
                `</div>`;
        });
        $("#posts").html(htmlPostString);
    }

    function onPostFail(){
        alert("failed to post");
    }

    function onPostSuccess(){
        alert("post successful");
    }
});