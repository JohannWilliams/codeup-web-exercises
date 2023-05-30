"use strict";

$(document).ready(function(){
    mapboxgl.accessToken = MAPBOX_KEY_EX_1;
    var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        zoom: 10, // starting zoom
        center: [-98.4916, 29.4252] // [lng, lat]
    });

});