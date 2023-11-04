//Call the map
let nycMap;
nycMap = L.map("map");

//Create the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(nycMap);
//Can chain the different methods - could do L.tilelayer(.....{}).addTo(nycMap).setView([lat, lng], zoom);

nycMap.setView([40.7128, -74.0060], 16);

//Add data
// L.geoJSON(nyc).addTo(nycMap);
