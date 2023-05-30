"use strict";

$(document).ready(function(){
    mapboxgl.accessToken = MAPBOX_KEY_EX_1;
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
        zoom: 10, // starting zoom
        pitch: 75,
        bearing: 35,
        center: [7.725, 49.47] // [lng, lat]
    });

    let restaurantsArr = [
        {
            name: "restaurant SAPIENTIA",
            address: "Vorstadt 11, 67292 Kirchheimbolanden, Germany",
            times: " Dienstag - Sonntag<br>" +
                "* 11:30 - 14:00 Uhr<br>" +
                "* 17:30 - 22:00 Uhr<br>" +
                " Montag Ruhetag<br>" +
                "* (an Feiertagen geöffnet)"
        },{
            name: "Döner Time",
            address: "Kaiserstraße 1, 67661 Kaiserslautern, Germany",
            times: " Monday - Saturday<br>" +
                "* 11:00 - 21:00 Uhr<br>" +
                " Sunday<br>" +
                "* 12:00 - 21:00 Uhr"
        },{
            name: "Pizza Hut Kaiserslautern, Kaiserstraße",
            address: "Kaiserstraße 34, 67661 Kaiserslautern, Germany",
            times: " Monday - Thursday<br>" +
                "* 11:00 - 22:00 Uhr<br>" +
                " Friday - Saturday<br>" +
                "* 11:00 - 00:00 Uhr<br>" +
                " Sunday<br>" +
                "* 12:00 - 22:00 Uhr"
        }
    ];

    restaurantsArr.forEach(function(restaurant){
        geocode(restaurant.address, MAPBOX_KEY_EX_1).then(function(result) {
            console.log(result);
            map.setZoom(12);
            let marker = new mapboxgl.Marker()
                .setLngLat(result)
                .addTo(map);
            let restaurantPopup = new mapboxgl.Popup()
                .setHTML("<p>" + restaurant.name + "<hr>" + restaurant.times + "</p>");

            marker.setPopup(restaurantPopup);
        });
    });
});