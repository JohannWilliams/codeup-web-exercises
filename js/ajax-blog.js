"use strict";

$(document).ready(function(){
    $.get("data/blog.json").done(onSuccess);

    function onSuccess(data){
        let htmlPostString = "";
        data.forEach(function(post){
            let categoriesListHTML = `<p class="fs-4">Categories</p><ul className="list-group list-group-flush">`;
                    // `<li className="list-group-item">An item</li>` +
                    // `<li className="list-group-item">A second item</li>` +
                    // `<li className="list-group-item">A third item</li>` + ;
            post.categories.forEach(function(cat){
                categoriesListHTML += `<li className="list-group-item">${cat}</li>`;
            });
            categoriesListHTML += `</ul>`;

            htmlPostString += `<div class="card my-2">` +
                `<div class="card-header text-center">` +
                `Blog Post` +
                `</div>` +
                `<div class="card-body">` +
                `<h5 class="card-title">${post.title}</h5>` +
                `<p class="card-text">${post.content}</p>` +
                categoriesListHTML +
                `</div>` +
                `<div class="card-footer text-end text-body-secondary">` +
                `${post.date}` +
                `</div>` +
                `</div>`;
        });
        $("#posts").html(htmlPostString);
        htmlPostString = "";
    }

});