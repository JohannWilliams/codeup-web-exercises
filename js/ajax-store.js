"use strict";
$(document).ready(function() {
    "use strict";
    let htmlTableString = "";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    $.get("data/inventory.json").done(onSuccess);

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements

    /**
     * when called, the table will be populated with data from
     * inventory.json.
     * @param data
     */
    function onSuccess(data){
        data.forEach(function(tools){
            htmlTableString += `<tr>`;
            htmlTableString += `<td>${tools.title}</td>`;
            htmlTableString += `<td>${tools.quantity}</td>`;
            htmlTableString += `<td>${tools.price}</td>`;
            htmlTableString += `<td>${tools.categories.join(", ")}</td>`;
            htmlTableString += `</tr>`;
        });

        $("#insertProducts").html(htmlTableString);
    }

    /**
     * upon clicking the button reset the table.
     */
    $("#refresh-table").on("click", function (){
        htmlTableString = "";
        $.get("data/inventory.json").done(onSuccess);
    })

});