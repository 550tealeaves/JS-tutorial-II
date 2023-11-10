//use this as template for final project

//CALL THE MAP
let nycMap;
nycMap = L.map("map");

//CREATE TILE LAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(nycMap);
//Can chain the different methods - could do L.tilelayer(.....{}).addTo(nycMap).setView([lat, lng], zoom);

nycMap.setView([40.7128, -74.0060], 13);

//ADD DATA
L.geoJSON(nyc).addTo(nycMap);

//STYLE THE DATA
//style function takes in a feature & returns object 
//style object - 3 properties: color, fillColor, fillOpacity
L.geoJSON(nyc, {
    //Challenge (3) - Change color of Manhattan to red - error feature is undefined
    style: function (feature) {
        if (feature.properties.borough === "Manhattan") { //if borough = Manhattan, outline, add color & transparency
            return {
                color: "navy",
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
    //ADD POPUPS TO SHOW NEIGHBORHOOD/BOROUGH NAMES
    //(1) Add new property to object: onEachFeature (separate them by commas)
    //(2) onEachFeature has 2 arguments (feature (neighborhood), layer (add to map & bindPop()))
    //(3) Use HTML to display the names in the popup - access feature > properties, then access neighborhood OR borough w/in the properties
    //(4) Add <hr> horiz tag to separate names
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.borough + "</h3> <hr> </h3>" + feature.properties.neighborhood + "</h3>");
    }
}).addTo(nycMap);

//ADDING BUTTONS
//Add click event to on the button to find neighborhood
$('#pan-to-flatbush').click(function () {
    //find flatbush neighborhood property in data
    let flatbush = nyc.features.find(function (feature) {  //use find() method to find the neighborhood - takes  a function that's called for each feature (neighborhood)
        return feature.properties.neighborhood === "Flatbush"; //returns the first neighborhood that matches the function
    });
    console.log('flatbush', flatbush);
    //find the coordinates of the flatbush property
    //need to access feature.geometry.coordinates
    let coordinates = nyc.features.find(function (feature) {
        return feature.properties.neighborhood === "Flatbush";
    }).geometry.coordinates;
    console.log('coords', coordinates); //coordinates = array of arrays
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
});

//LISTING THE NEIGHBORHOODS
//Loop through dataset objects & pull neighborhood names to be on list

//use .map() method to loop through data 
let neighborhoods = nyc.features.map(function (feature) {
    return feature.properties.neighborhood; //returns array of neighborhood names
}).filter(function (neighborhood) { //.filter() removes blank neighborhoods
    return neighborhood !== ""; //return neighborhoods NOT equal to blank 
}).sort(); //sorts names alphabetically
console.log('neighborhoods', neighborhoods); //make sure right data is used

//SHOW ALL THE NEIGHBORHOODS IN THE DIV
neighborhoods.forEach(function (neighborhood) { //forEach loops through neighborhoods array
    $("#neighborhoods").append("<a href='#'><li>" + neighborhood + "</li></a>"); //append each neighborhood to the div w/ id #neighborhoods and surround them w/ a href & li = clickable list
    //Display in columns
    if (neighborhoods.indexOf(neighborhood) % 4 === 0) { //find index of neighborhood in array, see if the # divisible by 4
        $("#neighborhoods").append("<br>"); //if # divisible by 4, then add <br> to separate the groups 
    }
});

//ADD CLICK EVENT TO EACH NEIGHBORHOOD TO PAN THE MAP TO THAT AREA
$("#neighborhoods").on("click", "li", function () { //target ID neighborhoods & if the li element is clicked
    let neighborhoodText = $(this).text(); //get the text of neighborhood
    let coordinates = nyc.features.find(function (feature) {
        return feature.properties.neighborhood === neighborhoodText; //check if text matches the neighborhood in data
    }).geometry.coordinates; //get neighborhood coordinates
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
    nycMap.setZoom(16); //zoom in
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).bindPopup("<h3>" + neighborhoodText + "</h3>").addTo(nycMap); //add marker to neighborhood polygon based on its coordinates and then popup to the marker that lists the neighborhood name
    // L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).bindPopup("<h3>" + neighborhoodText + "</h3>").addTo(nycMap); alternative way to write this the L.marker(...).bindPopup(...).addTo(nycMap);
});

//CHALLENGES
//1. Create a button that pans to favorite neighborhood
$('#pan-to-midtown').click(function () {
    //find midtown neighborhood property in data
    let midtown = nyc.features.find(function (feature) {  //use find() method to find the neighborhood - takes  a function that's called for each feature (neighborhood)
        return feature.properties.neighborhood === "Midtown"; //returns the first neighborhood that matches the function
    });
    console.log('midtown', midtown);
    //find the coordinates of the midtown property
    //need to access feature.geometry.coordinates
    let coordinates = nyc.features.find(function (feature) {
        return feature.properties.neighborhood === "Midtown";
    }).geometry.coordinates;
    console.log('coords', coordinates); //coordinates = array of arrays
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
});

//2. Create polylines connect neighborhoods
let travel = L.polyline([
    [
        40.759344113988675,
        -73.98020582812545
    ],
    [
        40.7526840144651,
        -73.9770611541751
    ],
    [
        40.75035039110381,
        -73.99310540902306
    ],
    [
        40.747690079775566,
        -74.0049988859669
    ],
    [
        40.73963804038286,
        -74.00905333806664
    ],
    [
        40.730877637298306,
        -73.99759454496697
    ],
    [
        40.72898485353983,
        -73.99708218467929
    ],
    [
        40.72559590566925,
        -74.00698507118821
    ],
    [
        40.71461738724645,
        -73.99394750696392
    ],
    [
        40.71140754007959,
        -74.0048423397788
    ],
    [
        40.711119136648364,
        -74.01699632457648
    ],
    [
        40.70573024211794,
        -74.01779688752589
    ],
    [
        40.70344832653177,
        -74.01658003184318
    ]
], {
    color: 'crimson',
    weight: 4,
}).addTo(nycMap).bringToFront();


//Trying to figure out how to flip the latlng coordinates b/c often given as flipped on geojson.io 
let travelCoords = [[
        -73.94517358159231,
        40.80693025140522
    ],
    [
        -73.95774074605423,
        40.808464473676935
    ],
    [
        -73.9668620750992,
        40.79526900297432
    ],
    [
        -73.9664566826971,
        40.781763945387354
    ],
    [
        -73.95956501186322,
        40.76840965450455
    ],
    [
        -73.98064541676692,
        40.75919823476576
    ]];
    console.log('travel', travelCoords); //returns array of 6 indices

    //function to reverse coordinates
function reverseCoordinates(coordinates){
    let newCoordinates = [travelCoords];
    for (let i = 0; i <coordinates.length; i++) {
        newCoordinates.push(coordinates[i].reverse());
    }
    return newCoordinates;
}
console.log("new coords", newCoordinates); //returns as undefined

