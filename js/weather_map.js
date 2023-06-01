"use strict";

$(document).ready(function () {

    /**
     * global variables
     */
    let currentLocWeatherResults = {};
    let homeLocation = "Austin, Tx"
    let locationArr = [homeLocation];
    let mapCenterLoc = [0,0];
    let daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentUnits = "imperial";
    let windSpeedStr = "";
    let degreeStr = "";
    /**
     * create a marker at the maps center location.
     *  Set it to be draggable on the map and
     *  add it to the map when map is loaded
     */
    let marker = new mapboxgl.Marker({
        draggable: true,
        color: "pink"
    })

    /**
     * create the map with a preset location and orientation.
     */
    mapboxgl.accessToken = MAPBOX_KEY;
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        zoom: 10, // starting zoom
        center: mapCenterLoc// [lng, lat]
    });
    geocode(homeLocation, MAPBOX_KEY).then(function (result) {
        mapCenterLoc = result;
        map.setCenter(result);
        getWeatherData();
        marker.setLngLat(mapCenterLoc).addTo(map);  // add the marker to the map.
    });


    /**
     * When the marker is dropped set the maps center
     * to the markers lng and lat. then get weather
     * data for that location.
     */
    function dragEnded() {
        let markerLoc = marker.getLngLat();
        mapCenterLoc[0] = markerLoc.lng;
        mapCenterLoc[1] = markerLoc.lat;
        map.setCenter(mapCenterLoc)
        getWeatherData();
    }

    /**
     * add event of drag end to the marker.
     * calls dragEnded function to update info
     */
    marker.on('dragend', dragEnded);

    /**
     * click event for search button. calls the address
     * search method.
     */
    $("#location-search-btn").on("click",searchAddress);

    /**
     * when called. takes the value that is in the text
     * input and then pass it into the geocode function in
     * the utils file to get back the lat and long of what
     * was searched. moves map and marker to that location.
     * updates current location weather data.
     */
    function searchAddress(event) {
        event.preventDefault();
        console.log("I was clicked.");
        geocode($("#location-search-input").val(), MAPBOX_KEY).then(function (result) {
            mapCenterLoc = result;
            map.setCenter(mapCenterLoc);
            map.setZoom(12);
            marker.setLngLat(mapCenterLoc);
            getWeatherData()
        });
    }

    /**
     * when a style dropdown selection is clicked. update
     * the map's style
     */
    $(".map-style-selection").on("click", function(){
        let styleStr = `mapbox://styles/mapbox/${this.id}`;
        map.setStyle(styleStr);
    });

    /**
     * when a unit of measure dropdown selection is clicked
     * update the current pages display to those units.
     */
    $(".weather_units_selection").on("click", function(){
        currentUnits = this.id;
        getWeatherData();
    });

    /**
     * when called, get the current weather data for the
     * selected location. then call a function to create
     * a BS Card for displaying that information.
     */
    function getWeatherData(){
        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${mapCenterLoc[1]}&lon=${mapCenterLoc[0]}&units=${currentUnits}&appid=${WEATHER_MAP_KEY}`).done(function(data){
            currentLocWeatherResults = data;
            createBSCardForLocationWeather(currentLocWeatherResults);
            createBSFiveDayForecastCards((currentLocWeatherResults));
        });
    }

    /**
     * takes in weather data then set the current locations
     * current weather data with a card.
     * @param data
     */
   function createBSCardForLocationWeather(data) {
       let todayDate = new Date(data.list[0].dt * 1000);
       let iconSrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
       if(currentUnits === "imperial"){
           windSpeedStr = "mph";
           degreeStr = "°F";
       } else if(currentUnits === "metric"){
           windSpeedStr = "m/s";
           degreeStr = "°C";
       } else {
           windSpeedStr = "m/s";
           degreeStr = "°K";
       }
       let htmlString = `<div class="card h-100">
                                  
                                  <div class="card-body">
                                    <h2 class="card-title">${data.city.name} <img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" class="card-img-top icon-sizing" id="loc-weather-icon" alt="..."></h2>
                                    <p class="card-text fs-4">${daysOfWeek[todayDate.getDay()]}, ${monthsOfYear[todayDate.getMonth()]} ${todayDate.getDate()}</p><hr>
                                    <p class="card-text">Temp:      ${Math.round(data.list[0].main.temp)}${degreeStr}</p>
                                    <p class="card-text">Weather:   ${data.list[0].weather[0].main} - ${data.list[0].weather[0].description}</p>
                                    <p class="card-text">Wind:      ${data.list[0].wind.speed} ${windSpeedStr}</p> 
                                    <p class="card-text">Gusting to: ${data.list[0].wind.speed + data.list[0].wind.gust} ${windSpeedStr}</p>
                                    <p class="card-text">Cloudiness: ${data.list[0].clouds.all}%</p>
                                    <p class="card-text">Visibility: ${data.list[0].visibility / 100}%</p>
                                  </div>
                                  <div class="card-footer">
                                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                                  </div>
                                </div>`;
       $("#current-loc-weather-info").html(htmlString);
   }

   function createBSFiveDayForecastCards(data){
       if(currentUnits === "imperial"){
           windSpeedStr = "mph";
           degreeStr = "°F";
       } else if(currentUnits === "metric"){
           windSpeedStr = "m/s";
           degreeStr = "°C";
       } else {
           windSpeedStr = "m/s";
           degreeStr = "°K";
       }

       let htmlString = `<div class="card w-100 my-2">
                                  <div class="card-body">
                                    <h4 class="card-title">${data.city.name}'s</h4>
                                    <p class="card-text fs-3 ms-3">5 Day Forecast</p>
                                  </div>
                                </div>`;

       for(let i = 0; i < data.list.length; i+=8){
           let todayDate = new Date(data.list[i].dt * 1000);
           htmlString += `<div class="card w-100 my-2">
                                  <div class="card-body">
                                    <h4 class="card-title">${daysOfWeek[todayDate.getDay()]}, ${monthsOfYear[todayDate.getMonth()]} ${todayDate.getDate()} <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" class="card-img-top icon-sizing" id="loc-weather-icon" alt="..."></h4>
                                    <p class="card-text">Temp:      ${Math.round(data.list[i].main.temp)}${degreeStr}</p>
                                    <p class="card-text">Weather:   ${data.list[i].weather[0].main}</p>
                                  </div>
                                </div>`;
       }
       $("#right-side-scroll").html(htmlString);
   }

    /**
     * Takes in an array of Lat Long in the format of Mapbox
     * and converts it into the Weather Map format.
     * @param locArr
     * @returns {*[]}
     */
    function convertMapboxLocToWeatherLoc(locArr){
        return [locArr[1], locArr[0]]
    }
});