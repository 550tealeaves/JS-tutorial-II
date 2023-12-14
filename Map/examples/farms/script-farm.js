//https://gis.stackexchange.com/questions/426874/filtering-and-adding-geojson-features-using-function-in-leaflet

var myGeoJson = [{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -116.921847,
                        44.245915
                    ],
                    [
                        -116.921986,
                        44.245442
                    ],
                    [
                        -116.922721,
                        44.245423
                    ]
                ]
            },
            "properties": {
                "name": "Calf Pasture",
                "farm": "Kerner",
                "description": "calf pasture fence N end.",
                "group": "fence"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -116.915847,
                        44.243915
                    ],
                    [
                        -116.915986,
                        44.243442
                    ],
                    [
                        -116.916721,
                        44.243423
                    ]
                ]
            },
            "properties": {
                "name": "Other Pasture",
                "farm": "Kerner",
                "description": "other pasture fence S end.",
                "group": "fence"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates":
                    [-116.9210, 44.2450]
            },
            "properties": {
                "name": "foodo",
                "farm": "Kerner",
                "description": "another dog yet.",
                "group": "dog"
            }
        }
    ]
}];
//console.log(data)
var grayscale = new L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
})
var groups = {
    dogs: new L.featureGroup(),
};
var mapOptions = {
    center: [44.2457, -116.9228],
    zoom: 14,
    layers: [grayscale]
}

var dog1 = new L.marker([44.2441, -116.9228]).bindPopup('This is just a placeholder.')

map = new L.Map("map", mapOptions);
var dog2 = new L.marker([44.2450, -116.9240]).bindPopup('Another dog').addTo(groups.dogs);
// ========  function call
var fence2 = newFeature('red', 'fence')
console.log(fence2);
var dog = newFeature('red', 'dog')


// layercontrol
var baseMaps = {
    "Grayscale": grayscale,
};
var overlayMaps = {
    "new L.marker dog": dog1,
    "not from function": groups.dogs,
    
};
L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

function newFeature(eColor, group) {
    L.geoJson(myGeoJson, {
        filter: function (feature, layer) {
            return (feature.properties.farm === "Kerner" && feature.properties.group === group);
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup('farm: ' + feature.properties.farm + '<br />Notes: ' + feature.properties.description)
        },

        style: function (feature) {
            return {
                color: eColor,
                weight: 3,
                opacity: 1,
                dashArray: 4
            }
        }
        // only works if I add to map here inside the function
        // adds the layer on load
    }).addTo(map)};



