//Call the map
let museumMap;
museumMap = L.map("map");

//Create the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 10,
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & <a href ="https://data.cityofnewyork.us/Recreation/New-York-City-Museums/ekax-ky3z">NYC Open Data</a>'
}).addTo(museumMap);
console.log('museums', museums);
//Can chain the different methods - could do L.tilelayer(.....{}).addTo(museumMap).setView([lat, lng], zoom);

museumMap.setView([40.7128, -74.0060], 5);

let myIcon = L.icon({
    iconUrl: 'museum.png',
    iconSize: [40, 25],
    iconAnchor: [20, 25],
    popupAnchor: [0, -25]
}); 



//Add the data
L.geoJSON(museums).addTo(museumMap); //map displays with markers for all places


L.geoJSON(museums, {
    pointToLayer: (feature, latlng) => L.marker(latlng, { icon: myIcon }),
    onEachFeature: function (feature, layer) {
        let link = feature.properties.url; //got the link to show up
        layer.bindPopup("<h3>" + feature.properties.name + "</h3> <hr> <a href=" + link + " + target='_blank' " + ">" + link + "</a>");
        //Add the summary of the places 
        layer.on('mouseover', function () { //will show the summary when you mouseover icon
            let summary = document.getElementById('info');
            summary.innerHTML = "<h4>" + "<b>" + feature.properties.name + "</b>" + "</h4>" + "<br> " + feature.properties.summary;
            summary.style.textAlign = "center"; //centers the text
        });
        layer.on('mouseout', function () { //will hide the summary when mouse leaves icon
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


//MAP BOUNDARIES
//Sets bounds but can click outside bounds and it will drag you back 
let westBoundary = L.latLng(40.4752, -74.3087);
let eastBoundary = L.latLng(40.9571, -73.5436);
let boundaries = L.latLngBounds(westBoundary, eastBoundary);


//Stop user from dragging map outside of bounds
museumMap.setMaxBounds(boundaries);
museumMap.on('drag', function () { 
    museumMap.panInsideBounds(boundaries, {animate: false})
});


// L.marker([
//     feature.geometry.coordinates
// ], {icon: myIcon}).addTo(museumMap);


//LIST ALL THE MUSEUMS
//loop through the data using the .map() method
let museumList = museums.features.map(function (feature){ //loop through the features in dataset
    return feature.properties.name; //returns array of museum names 
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

//ADD CLICK EVENT TO PAN TO THE MARKER WHEN THE NAME IS SELECTED FROM THE LIST
$('#museum-list').on("click", "li", function (){ //target museum-list ID when li element is clicked
    let nameText = $(this).text(); //get the text of the museum name
    let coordinates = museums.features.find(function (feature){
        return feature.properties.name === nameText; //check if the text matches the museum name from dataset
    }).geometry.coordinates; //get the coordinates for the museum name
    museumMap.panTo(new L.LatLng(coordinates[1], coordinates[0])); //will pan to these coordinates from the dataset for the name
    museumMap.setZoom(18); //zooms in this amount when clicked
    // L.marker(new L.LatLng(coordinates[1], coordinates[0])).bindPopup("<h3>" + nameText + "</h3> <hr> <a href=" + feature.properties.url + " + target='_blank' " + ">" + feature.properties.url + "</a>").addTo(museumMap);
});


//find the marker object and iterate based on city name - change color
//look up tutorial https://www.tutorialspoint.com/leafletjs/leafletjs_markers.htm


//STYLE THE H1
$("h1").hide(500).delay(1500).show(300).css({
    "text-decoration": "underline",
    "color": "rgb(129, 234, 144)",
    "text-align": "center",
    "font-style": "italic",
    "font-size": "44px",
    "border": "0.5rem outset pink",
    "border-style": "dashed",
    "border-radius": "16px",
    "border-width": "6px",
    "box-shadow": "0 0 0 1.5rem navy",
    "outline": "0.5rem solid gold",
    "outline-offset": "1rem",
    "padding": "40px",
    "width": "30%"

    
});


// === FILTER MUSEUMS BY BOROUGH ===

// Create a single Leaflet layer so we can clear & refill it
const museumLayer = L.geoJSON(null, {
  onEachFeature: function (feature, layer) {
    const link = feature.properties.url;
    layer.bindPopup(
      `<h3>${feature.properties.name}</h3><hr>
       <a href="${link}" target="_blank">${link}</a>`
    );
    layer.on("mouseover", function () {
      document.getElementById("info").innerHTML =
        `<h4><b>${feature.properties.name}</b></h4><br>${feature.properties.summary}`;
    });
    layer.on("mouseout", function () {
      document.getElementById("info").innerHTML = "";
    });
  },
  pointToLayer: (feature, latlng) => L.marker(latlng, { icon: myIcon })
}).addTo(museumMap);

// Function to update the layer + list
function updateMap(selected) {
  museumLayer.clearLayers();
  $("#museum-list").empty();

  // Pick features: all if no borough chosen
  const filtered = !selected
    ? museums.features
    : museums.features.filter(f => f.properties.city === selected);

  museumLayer.addData(filtered);

  filtered
    .map(f => f.properties.name)
    .sort()
    .forEach(name => {
      $("#museum-list").append(`<a href="#"><li>${name}</li></a><br>`);
    });

  if (filtered.length) {
    const first = filtered[0].geometry.coordinates;
    museumMap.setView([first[1], first[0]], 12);
  }
}

// When dropdown changes, update
document.getElementById("selectBorough").addEventListener("change", e => {
  updateMap(e.target.value);
});

// Initialize with all museums
updateMap("");

// Keep click-to-pan behaviour
$("#museum-list").on("click", "li", function () {
  const name = $(this).text();
  const feature = museums.features.find(f => f.properties.name === name);
  if (feature) {
    const [lng, lat] = feature.geometry.coordinates;
    museumMap.panTo([lat, lng]);
    museumMap.setZoom(18);
  }
});
