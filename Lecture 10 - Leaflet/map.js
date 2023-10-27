//Create new leaflet map
let poemMap; //declare a variable - it is now a object that is used to modify the map
poemMap = L.map("map"); //L.map() = leaflet method that creates map w/in the div w/ ID map

//Add tile layer using L.tileLayer() method - which takes 2 parameters (1) URL of tile layer source & (2) object w/ 2 properties (1) maxZoon - max zoom of map & (2) attribution - attirbution = shows map source at bottom
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap); //.addTo() method takes 1 parameter = map object

poemMap.setView([40.7128, -74.0060], 16); //.setView() method takes 2 parameters (coords + zoom level)

//add Marker - adding Times Square - use L.marker() object - takes 1 parameter (coords) 
let timesSquare = L.marker([40.7580, -73.9855]).addTo(poemMap);

//add marker for GC coordinates
let theGC = L.marker([40.7486, -73.9840]).addTo(poemMap);

//Add marker for favorite restaurant
let vivThai = L.marker([40.7629, -73.9897]).addTo(poemMap);

//Add popup to marker using .bindPopup() method, which takes 1 parameter (text that will show up)
timesSquare.bindPopup("<b>Times Square</b>");



//Add circle using L.circle() method - takes 2 parameters (coordinates) & object w/ following properties (color, fillColor, fillOpacity, radius)
let circle = L.circle([40.7580, -73.9855], {
    color: 'indigo',
    fillColor: '#f06',
    fillOpacity: 0.5,
    radius: 500
}).addTo(poemMap);

//Add polyline from Times Square to Grad Center using the L.polyline() method – 3 parameters  (coords 1st & 2nd pts, & object w/ color property)
let polyline = L.polyline([
    [40.7580, -73.9855],
    [40.7486, -73.9840]
], {
    color: 'brown'
}).addTo(poemMap);


//Create popup that shows how you get to Grand Central terminal
// each coordinates represents a new line
let walkToStop = L.polyline([
    [40.7629, -73.9897],
    [40.7603, -73.9912],
    [40.7543, -73.9769],
    [40.7524, -73.9783],
    [40.7527, -73.9771]
], {
    color: 'green'
}).addTo(poemMap);



//Can bind popups to shapes - add popup to line from Times Square to GC
polyline.bindPopup("<b>Times Square to the Graduate Center</b>");

//Add popup to the circle
circle.bindPopup("I'm a circle - fear me!");


//leaflet has diff methods to handle coords - .getLatLng()
let latLng = timesSquare.getLatLng();
console.log('lat', latLng.lat); //shows latitude 
console.log('lon', latLng.lng);//shows longitude

//Use .panTo() method to shift map's view (pan) to Times Square
poemMap.panTo(timesSquare.getLatLng()); 
//poemMap.panTo(latLng); - shorter way to write the above code

//Add click event that logs lat/lon of point the user clicks - use .on('click') method
poemMap.on('click', function(e) {  //click on map, .on() method calls function
    const latLng = e.latlng; // Get the coordinates w/ the latlng property of the e object
    console.log(latLng.lat); //get the lat value of the new .latLng object
    console.log(latLng.lng);//get the lon value of the new .latLng object
});