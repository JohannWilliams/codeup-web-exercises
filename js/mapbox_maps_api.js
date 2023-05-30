"use strict";

$(document).ready(function(){

    let darkMapStyle = 'mapbox://styles/mapbox/navigation-night-v1';
    let lightMapStyle = 'mapbox://styles/mapbox/navigation-day-v1';
    let homeLatLong = [7.725, 49.47];
    let homeZoom = 12
    let homePitch = 75;
    let homeBearing = 35;
    let mapCenterLocation = homeLatLong;

    let currentZoomIndex = 4;
    let zoomArr = [0, 5, 10, 12, 15, 17, 20];


    mapboxgl.accessToken = MAPBOX_KEY_EX_1;
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: darkMapStyle, // style URL
        zoom: homeZoom, // starting zoom
        pitch: homePitch,
        bearing: homeBearing,
        center: homeLatLong // [lng, lat]
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
        restaurant.htmlEl = document.createElement('div');
        restaurant.htmlEl.className = 'marker';
        geocode(restaurant.address, MAPBOX_KEY_EX_1).then(function(result) {
            restaurant.latLong = result;
            restaurant.zoom = 16;
            restaurant.pitch = 0;
            restaurant.bearing = 0;
            let marker = new mapboxgl.Marker(restaurant.htmlEl)
                .setLngLat(restaurant.latLong)
                .addTo(map);
            let restaurantPopup = new mapboxgl.Popup()
                .setHTML("<p>" + restaurant.name + "<hr>" + restaurant.times + "</p>");

            marker.setPopup(restaurantPopup);
        });
    });

    $("#light-map").on("click", function(){
        map.setStyle(lightMapStyle);
    });

    $("#dark-map").on("click", function(){
        map.setStyle(darkMapStyle);
    });

    $("#home-location").click(updateMapLocation);

    $("#location-1").click(updateMapLocation);
    $("#location-2").click(updateMapLocation);
    $("#location-3").click(updateMapLocation);


    function updateMapLocation(){
        if(parseInt(this.value) === 0){
            mapCenterLocation = homeLatLong
            map.setCenter(homeLatLong);
            map.setPitch(homePitch);
            map.setBearing(homeBearing);
            map.setZoom(homeZoom);
        } else {
            mapCenterLocation = restaurantsArr[this.value - 1].latLong;
            map.setCenter(restaurantsArr[this.value - 1].latLong);
            map.setPitch(restaurantsArr[this.value - 1].pitch);
            map.setBearing(restaurantsArr[this.value - 1].bearing);
            map.setZoom(restaurantsArr[this.value - 1].zoom);
        }
    }

    $("#zoom-in-map").click(zoomIn);
    $("#zoom-out-map").click(zoomOut);


    function zoomIn(){
        if(currentZoomIndex === zoomArr.length - 1){
            currentZoomIndex = 0
        } else {
            currentZoomIndex++;
        }
        map.setZoom(zoomArr[currentZoomIndex]);
        map.setCenter(mapCenterLocation);
    }
    function zoomOut(){
        if(currentZoomIndex === 0){
            currentZoomIndex = zoomArr.length - 1;
        } else {
            currentZoomIndex--;
        }
        map.setZoom(zoomArr[currentZoomIndex]);
        map.setCenter(mapCenterLocation);
    }

    $("#address-search-button").click(searchAddress);

    function searchAddress(){
        geocode($("#address-search").val(), MAPBOX_KEY_EX_1).then(function(result) {
            mapCenterLocation = result;
            map.setCenter(mapCenterLocation);
            map.setZoom(12);
            map.setPitch(0);
            map.setBearing(0);
            let marker = new mapboxgl.Marker()
                .setLngLat(result)
                .addTo(map);
        });
    }

});