//CALL THE MAP
let nycMap;
nycMap = L.map("map");

//CREATE TILE LAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(nycMap);
//Can chain the different methods - could do L.tilelayer(.....{}).addTo(nycMap).setView([lat, lng], zoom);

nycMap.setView([40.7128, -74.0060], 16);

//ADD DATA
L.geoJSON(nyc).addTo(nycMap);

//STYLE THE DATA
//style function takes in a feature & returns object 
//style object - 3 properties: color, fillColor, fillOpacity
L.geoJSON(nyc, {
    style: function(feature) {
        return{
            color: 'indigo',
            fillColor: 'pink',
            fillOpacity: 0.5
        };
    }, //ADD POPUPS TO SHOW NEIGHBORHOOD/BOROUGH NAMES
    //(1) Add new property to object: onEachFeature (separate them by commas)
    //(2) onEachFeature has 2 arguments (feature (neighborhood), layer (add to map & bindPop()))
    //(3) Use HTML to display the names in the popup - access feature > properties, then access neighborhood OR borough w/in the properties
    //(4) Add <hr> horiz tag to separate names
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.borough + "</h3> <hr> </h3>" + feature.properties.neighborhood + "</h3>");
    }
}).addTo(nycMap);

//ADDING BUTTONS
//Add click event to on the button to find neighborhood
$('#pan-to-flatbush').click(function(){
    //find flatbush neighborhood property in data
    let flatbush = nyc.features.find(function(feature){  //use find() method to find the neighborhood - takes  a function that's called for each feature (neighborhood)
        return feature.properties.neighborhood === "Flatbush"; //returns the first neighborhood that matches the function
    });
    console.log('flatbush', flatbush);
    //find the coordinates of the flatbush property
    //need to access feature.geometry.coordinates
    let coordinates = nyc.features.find(function(feature){
        return feature.properties.neighborhood === "Flatbush";
    }).geometry.coordinates; 
    console.log('coords', coordinates); //coordinates = array of arrays
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
});

//LISTING THE NEIGHBORHOODS
//Loop through dataset objects & pull neighborhood names to be on list

//use .map() method to loop through data 
let neighborhoods = nyc.features.map(function(feature){
    return feature.properties.neighborhood; //returns array of neighborhood names
}).filter(function (neighborhood) { //.filter() removes blank neighborhoods
    return neighborhood !== ""; //return neighborhoods NOT equal to blank 
}).sort(); //sorts names alphabetically
console.log('neighborhoods', neighborhoods); //make sure right data is used

//SHOW ALL THE NEIGHBORHOODS IN THE DIV
neighborhoods.forEach(function(neighborhood){ //forEach loops through neighborhoods array
    $("#neighborhoods").append("<a href='#'><li>" + neighborhood + "</li></a>"); //append each neighborhood to the div w/ id #neighborhoods and surround them w/ a href & li = clickable list
    //Display in columns
    if (neighborhoods.indexOf(neighborhood) % 4 === 0) { //find index of neighborhood in array, see if the # divisible by 4
        $("#neighborhoods").append("<br>"); //if # divisible by 4, then add <br> to separate the groups 
    }
});

//ADD CLICK EVENT TO EACH NEIGHBORHOOD TO PAN THE MAP TO THAT AREA
$("#neighborhoods").on("click", "li", function(){ //target ID neighborhoods & if the li element is clicked
    let neighborhoodText = $(this).text(); //get the text of neighborhood
    let coordinates = nyc.features.find(function(feature){
        return feature.properties.neighborhood === neighborhoodText; //check if text matches the neighborhood in data
    }).geometry.coordinates; //get neighborhood coordinates
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
    nycMap.setZoom(16); //zoom in
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).bindPopup("<h3>" + neighborhoodText + "</h3>").addTo(nycMap); //add marker to neighborhood polygon based on its coordinates and then popup to the marker that lists the neighborhood name
    // L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).bindPopup("<h3>" + neighborhoodText + "</h3>").addTo(nycMap); alternative way to write this the L.marker(...).bindPopup(...).addTo(nycMap);
});
