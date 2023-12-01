//Call the map
let museumMap;
museumMap = L.map("map");

//Create the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(museumMap);
//Can chain the different methods - could do L.tilelayer(.....{}).addTo(museumMap).setView([lat, lng], zoom);

museumMap.setView([40.7128, -74.0060], 13);

//Add the data
L.geoJSON(museums).addTo(museumMap); //map displays with markers for all places
