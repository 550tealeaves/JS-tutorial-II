//Call the map
let museumMap;
museumMap = L.map("map");

//Create the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors and <a href = "https://data.cityofnewyork.us/Recreation/New-York-City-Museums/ekax-ky3z">NYC Open Data</a>'
}).addTo(museumMap);
console.log('museums', museums);
//Can chain the different methods - could do L.tilelayer(.....{}).addTo(museumMap).setView([lat, lng], zoom);

museumMap.setView([40.7128, -74.0060], 10.4);

//Add the data
L.geoJSON(museums).addTo(museumMap); //map displays with markers for all places

L.geoJSON(museums, {
    
    //Challenge (3) - Change color of Manhattan to red - error feature is undefined
    style: function (feature) {
        if (feature.properties.city === "Manhattan") { //if city = Manhattan, outline, add color & transparency
            return {
                color: "red",
                fillColor: "gold",
                fillOpacity: 0.4
            };
        } else { //if not Manhattan, then outline, color, and transparency
            return {
                color: 'indigo',
                fillColor: 'pink',
                fillOpacity: 0.5
            };
        }

    },
    //ADD POPUPS TO SHOW url/city NAMES
    //(1) Add new property to object: onEachFeature (separate them by commas)
    //(2) onEachFeature has 2 arguments (feature (url), layer (add to map & bindPop()))
    //(3) Use HTML to display the names in the popup - access feature > properties, then access url OR city w/in the properties
    //(4) Add <hr> horiz tag to separate names
    //(5) Assign variable to feature.properties.url and create a <a href=" + feature.properties.url + ">" + feature.properties.link + "</a>";
    //(6) Add target='_blank' so link opens in new tab
    onEachFeature: function (feature, layer) {
        let link = feature.properties.url; //got the link to show up
        layer.bindPopup("<h3>" + feature.properties.name + "</h3> <hr> <a href=" + link + " + target='_blank' " + ">" + link + "</a>");
        //Add the summary of the places 
        layer.on('click', function () {
            let summary = document.getElementById('info');
            summary.innerHTML = feature.properties.summary;
        });
    }
}).addTo(museumMap);




//FIND THE COORDINATES USING CONSOLE LOG
museumMap.on('click', function (e) {  //click on map, .on() method calls function
    const latLng = e.latlng; // Get the coordinates w/ the latlng property of the e object
    console.log(latLng.lat); //get the lat value of the new .latLng object
    console.log(latLng.lng);//get the lon value of the new .latLng object
});

//Map boundaries
//Sets bounds but can click outside bounds and it will drag you back 
let westBoundary = L.latLng(40.4752, -74.3087);
let eastBoundary = L.latLng(40.9571, -73.5436);
let boundaries = L.latLngBounds(westBoundary, eastBoundary);


//Stop user from dragging map outside of bounds
museumMap.setMaxBounds(boundaries);
museumMap.on('drag', function () { 
    museumMap.panInsideBounds(boundaries, {animate: false})
});


let myIcon = L.icon({
    iconUrl: 'museum.png',
    iconSize: [140, 86],
    iconAnchor: [25, 70],
    popupAnchor: [-3, -76]
}); 


//find the marker object and iterate based on city name - change color
//look up tutorial https://www.tutorialspoint.com/leafletjs/leafletjs_markers.htm

//CREATE THE FILTER DROPDOWN 
//https://learn.jquery.com/using-jquery-core/faq/how-do-i-get-the-text-value-of-a-selected-option/

$('#selectBorough').on('change', function(){
    let borough = $('#selectBorough');
    console.log('borough', borough);
    
})

$("h1").hide(500).delay(1500).show(300);
