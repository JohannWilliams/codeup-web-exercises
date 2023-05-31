"use strict";

$(document).ready(function(){

    let lightMapStyle = 'mapbox://styles/mapbox/light-v11';
    let darkMapStyle = 'mapbox://styles/mapbox/dark-v11';
    let darkNavMapStyle = 'mapbox://styles/mapbox/navigation-night-v1';
    let lightNavMapStyle = 'mapbox://styles/mapbox/navigation-day-v1';
    let homeLatLong = [7.6725, 49.431];
    let homeZoom = 16;
    let homePitch = 0;
    let homeBearing = 0;
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
            name: "China Town Imbiss",
            address: "Kaiserstraße 14, 67661 Kaiserslautern, Germany",
            website: "http://chinatownimbiss.de/ImbissChinatown.html",
            info: "Place text here",
            imageURL:"../images/beef_imbiss.png"
        },{
            name: "Döner Time",
            address: "Kaiserstraße 1, 67661 Kaiserslautern, Germany",
            website: "https://www.facebook.com/DoenerTime",
            info: "Place text here",
            imageURL:"../images/doner_time_store_front.jpeg"
        },{
            name: "Pizza Hut Kaiserslautern, Kaiserstraße",
            address: "Kaiserstraße 34, 67661 Kaiserslautern, Germany",
            website: "https://pizzahut.de/restaurants/pizza-hut-kaiserslautern",
            info: "You never had Pizza Hut until you sit down in a fancy restaurant and dine on gourmet style pizza and finish with a cookie covered in ice cream and fudge.",
            imageURL:"../images/pizza-hut.jpg"
        }
    ];

    function createPopupBSCard(index){
        if(index === 0){

        }
        return `<div class="card h-100">
            <img src="${restaurantsArr[index].imageURL}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${restaurantsArr[index].name}</h5>
                    <p class="card-text">${restaurantsArr[index].info}</p>
                </div>
                <div class="card-footer">
                    <small class="text-end text-body-secondary">Website: <a href="${restaurantsArr[index].website}"> ${restaurantsArr[index].name}</a></small>
                </div>
        </div>`
    }

    restaurantsArr.forEach(function(restaurant, index){
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
                .setHTML(createPopupBSCard(index));

            marker.setPopup(restaurantPopup);
        });
    });

    $("#light-map").on("click", function(){
        map.setStyle(lightMapStyle);
    });

    $("#dark-map").on("click", function(){
        map.setStyle(darkMapStyle);
    });

    $("#light-nav-map").on("click", function(){
        map.setStyle(lightNavMapStyle);
    });

    $("#dark-nav-map").on("click", function(){
        map.setStyle(darkNavMapStyle);
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