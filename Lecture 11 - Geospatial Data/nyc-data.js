//CALL THE MAP
let nycMap;
nycMap = L.map("map");

//CREATE TILE LAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
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
    style: function(feature) {
        return{
            color: 'indigo',
            fillColor: 'pink',
            fillOpacity: 0.5
        };
    },
    //ADD POPUPS TO SHOW NEIGHBORHOOD/BOROUGH NAMES
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

//2. Draw polylines that connect neighborhoods - not sure how to flip coordinates
let coordinates = nyc.features.find(function(feature){
    return feature.properties.neighborhood === "Upper East Side";
}).geometry.coordinates;
let polyline = L.polyline([
    [-73.943592454622546, 40.782747908206574], [-73.943648235390199, 40.782656161333449], [-73.943870759887162, 40.781273026571704], [-73.94345932494096, 40.780048275653243], [-73.943213862652243, 40.779317588660199], [-73.943004239504688, 40.779639495474292], [-73.942716005450905, 40.779544169476175], [-73.942712374762181, 40.779214856940001], [-73.942535563208608, 40.779090956062532], [-73.942893408188027, 40.778614093246276], [-73.942438481745029, 40.777315235766039], [-73.942244919522594, 40.777104088947254], [-73.942074188038887, 40.776917846977142], [-73.942002667222781, 40.776185317382648], [-73.942620205199006, 40.775180871576474], [-73.94285645694552, 40.774796600349191], [-73.94293043781397, 40.774676268036011], [-73.945870899588215, 40.771692257932997], [-73.946618690150586, 40.77093339256956], [-73.948664164778933, 40.768857624399587], [-73.950069793030679, 40.767025088383498], [-73.954418260786071, 40.762184104951245], [-73.95650786241211, 40.760285256574043], [-73.958787773424007, 40.758213471309809], [-73.973015157270069, 40.764278692864671], [-73.955760332998182, 40.787906554459667], [-73.944023, 40.782960000000301], [-73.943592454622546, 40.782747908206574]
], {
    color: 'yellow'
}).addTo(nycMap);


//3. Change color of Manhattan to red - error feature is undefined
function changeColor(){
    if (feature.properties.borough === "Manhattan") {
        return {
           style: function(borough) {
            return {
                color: 'brown',
                fillColor: 'red',
                fillOpacity: 0.5
            };
        } 
        } 
    }
}
changeColor();

