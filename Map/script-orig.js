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
        layer.on('mouseover', function () { //will show the summary when you mouseover icon
            let summary = document.getElementById('info');
            summary.innerHTML = "<h4>" + "<b>" + feature.properties.name + "</b>" + "</h4>" + "<br> " + feature.properties.summary;
            summary.style.textAlign = "center"; //centers the text
        });
        layer.on('mouseout', function(){ //will hide the summary when mouse leaves icon
            let hideSummary = document.getElementById('info');
            hideSummary.innerHTML = null;
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
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
}); 

// L.marker([
//     geometry.coordinates
// ], {icon: myIcon}).addTo(museumMap);


//GOAL
//LIST ALL THE MUSEUMS
//loop through the data using the .map() method
let museumList = museums.features.map(function (feature){ //loop through the features in dataset
    return feature.properties.name; //returns array of museum names 
// }).filter(function (name) { //.filter() removes blank names (even though there are none)
//     return name !== "";
}).sort(function(name){ //sorts the names alphabetically
    return name;
}); //sorts the names alphabetically

//SHOW ALL THE MUSEUM LISTINGS IN THE DIV
museumList.forEach(function(name){ //loops through the array of cities
    $("#museum-list").append("<a href='#'> <li>" + name + "</li></a>"); //append each museum name to the div w/ id #neighborhoods and surround them w/ a href & li = clickable list
    if(museumList.indexOf(name) % 1 === 0) { //groups the names by 1 (1 space - if it was higher than it would be groups of 2, 3, 4 etc)
        $('#museum-list').append("<br>"); //add a break b/w each name
    }
});








//Create list of all sites per borough
//Pan to the site when you click the link 




//find the marker object and iterate based on city name - change color
//look up tutorial https://www.tutorialspoint.com/leafletjs/leafletjs_markers.htm

//CREATE THE FILTER DROPDOWN 
//https://learn.jquery.com/using-jquery-core/faq/how-do-i-get-the-text-value-of-a-selected-option/

//Used chatGPT to find a code on how to update the map using dropdown
$(document).ready(function (event) {
    //function to update the map based on the selected option
    function updateMap(pickBorough) {
        let museumFilter = museums.features.filter( //must reference the orig dataset(museums).features.filter
            function (museum) { //create function to make sure dropdown selection matches the item with city
                var normalizedMuseum = museum.properties.city.toLowerCase(); //makes everything lowercase
                var normalizedPickBorough = pickBorough.toLowerCase(); //makes everything lowercase
                return normalizedMuseum === normalizedPickBorough; //set dropdown = to items that had same city
            }
        );
        console.log('filter', museumFilter);
        //$('#map').filter(museums.feature.properties.city); // doesn't work - says properties is undefined
        // $('#museum-list').hide(); //this works - when option selected from dropdown, museum list hides
        console.log('pick', pickBorough);
    }
    //Event handler for dropdown change
    $('#selectBorough').on('change', function () {
        //Get the selected option value
        pickBorough = $(this).val();
        //Call the function to update the map
        updateMap(pickBorough);
        let borough = $('#selectBorough');
        console.log('borough', borough); //shows borough selected in console
    });
});

//Style the h1
$("h1").hide(500).delay(1500).show(300).css({
    "text-decoration": "underline",
    "font-style": "italic",
    "border": "6px solid pink",
    "border-style": "dashed",
    "border-radius": "20px",
    "font-size": "44px",
    "color": "rgb(129, 234, 144)"
});