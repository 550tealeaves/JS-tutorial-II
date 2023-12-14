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

var myIcon = L.icon({
    iconUrl: 'museum.png',
    iconSize: [40, 86],
    iconAnchor: [22, 94]
}); 

//THIS DOES NOT WORK - MAP LOADS OBJECT BUT SHOWS NO MARKERS AND THE FILTER DOES NOT WORK
function filterResults(museumPlace) {
    return L.geoJSON(museums, {
        filter: function(feature, layer) {
            let borough = document.querySelector('#selectBorough');
            borough.addEventListener('change', function () {
                pickBorough = $(this).val();
                updateMap(pickBorough);
            });
            let museumFilter = museums.features.filter( //must reference the orig dataset(museums).features.filter
            function (museum) { //create function to make sure dropdown selection matches the item with city
                var normalizedMuseum = museum.properties.city; //makes everything lowercase
                var normalizedPickBorough = pickBorough; //makes everything lowercase
                return normalizedMuseum === normalizedPickBorough; //set dropdown = to items that had same city
            },  
        );
        console.log('filter', museumFilter);
            // $('#museum-list').hide(); //this works - when option selected from dropdown, museum list hides
        console.log('pick', pickBorough);
        },
        pointToLayer: function(feature, LatLng){
            return L.marker(LatLng, {
                icon: myIcon
            });
        },
        style: function (feature) {
            return {
                color: "green",
                fillColor: "purple",
                fillOpacity: 2
            };
        },
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
    }).addTo(museumMap)};

//THE COORDINATES, ZOOM, and MUSEUM LIST WORK
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
    museumMap.panInsideBounds(boundaries, { animate: false })
});

//LIST ALL THE MUSEUMS
//loop through the data using the .map() method
let museumList = museums.features.map(function (feature) { //loop through the features in dataset
    return feature.properties.name; //returns array of museum names 
}).sort(function (name) { //sorts the names alphabetically
    return name;
}); //sorts the names alphabetically

//SHOW ALL THE MUSEUM LISTINGS IN THE DIV
museumList.forEach(function (name) { //loops through the array of cities
    $("#museum-list").append("<a href='#'> <li>" + name + "</li></a>"); //append each museum name to the div w/ id #neighborhoods and surround them w/ a href & li = clickable list
    if (museumList.indexOf(name) % 1 === 0) { //groups the names by 1 (1 space - if it was higher than it would be groups of 2, 3, 4 etc)
        $('#museum-list').append("<br>"); //add a break b/w each name
    }
});

//ADD CLICK EVENT TO PAN TO THE MARKER WHEN THE NAME IS SELECTED FROM THE LIST
$('#museum-list').on("click", "li", function () { //target museum-list ID when li element is clicked
    let nameText = $(this).text(); //get the text of the museum name
    let coordinates = museums.features.find(function (feature) {
        return feature.properties.name === nameText; //check if the text matches the museum name from dataset
    }).geometry.coordinates; //get the coordinates for the museum name
    museumMap.panTo(new L.LatLng(coordinates[1], coordinates[0])); //will pan to these coordinates from the dataset for the name
    museumMap.setZoom(18); //zooms in this amount when clicked
    // L.marker(new L.LatLng(coordinates[1], coordinates[0])).bindPopup("<h3>" + nameText + "</h3> <hr> <a href=" + feature.properties.url + " + target='_blank' " + ">" + feature.properties.url + "</a>").addTo(museumMap);
});