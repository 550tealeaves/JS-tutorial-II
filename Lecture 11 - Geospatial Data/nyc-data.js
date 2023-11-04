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
    })
    console.log('flatbush', flatbush);
});
