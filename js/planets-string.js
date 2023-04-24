(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * This is useful becasue you can then place your string directly into the
     * innerHTML of the body, h1, p, or other document element and display that
     * information right on your page.
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let planetsStrBr = planetsArray.join("<br>");
    console.log(planetsStrBr);
    document.body.innerHTML += planetsStrBr;

    let uListPlanetStr = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    console.log((uListPlanetStr));
    document.body.innerHTML += uListPlanetStr;

    let oListPlanetStr = "<ol><li>" + planetsArray.join("</li><li>") + "</li></ol>";
    console.log((oListPlanetStr));
    document.body.innerHTML += oListPlanetStr;

})();