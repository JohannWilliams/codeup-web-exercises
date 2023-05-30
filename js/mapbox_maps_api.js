"use strict";

$(document).ready(function(){
    mapboxgl.accessToken = MAPBOX_KEY_EX_1;
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        zoom: 10, // starting zoom
        center: [-98.4916, 29.4252] // [lng, lat]
    });

    geocode("Vorstadt 11, 67292 Kirchheimbolanden, Germany", MAPBOX_KEY_EX_1).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(15);
        let marker = new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map);
        let restaurantPopup = new mapboxgl.Popup()
            .setHTML("<p>Sapientia Restaurant Inh. Nursel Inci</p>")

        marker.setPopup(restaurantPopup)
    });

});