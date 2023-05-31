"use strict";

$(document).ready(function () {
    //TODO : code out the weather map.

    /**
     * create the map with a preset location and orientation.
     */
    mapboxgl.accessToken = MAPBOX_KEY;
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        zoom: 10, // starting zoom
        center: [0,0] // [lng, lat]
    });
    geocode("Austin, Tx", MAPBOX_KEY).then(function (result) {
        map.setCenter(result);
        console.log(result);
    });


});