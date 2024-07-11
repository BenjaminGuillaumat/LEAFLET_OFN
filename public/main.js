var map = L.map('map').setView([50.594956, 4.594725], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([50.8466, 4.3528]); //.addTo(map)

var circle = L.circle([50.9466, 4.4528],{color:'red',radius:1000,fillColor:'black',fillOpacity:0.5});

var polygon = L.polygon([[50.8466, 4.3528],[50.9466, 4.4528],[50.7366, 4.4428]]);


// Popup
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(); // openPopup affiche directement
circle.bindPopup("I am a circle."); // bindPopup affiche en cliquant
polygon.bindPopup("I am a polygon.");

// Standalone Popup
var popup = L.popup()
    .setLatLng([50.8366, 4.3428])
    .setContent("I am a standalone popup.");
    // openOn(map);


// Créer un événement lors d'une action (ici cliquer sur la carte)
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

// Pareil qu'au dessus mais utiliser un élément (ici le Popup) pour afficher le message
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


// FLUX OFN

// Relation Id : 1340 / parent : 2 / child : 25
// parent : [50.7042331,4.5866968]
// child : [50.6829231,4.3709453]

var parent_LatLng = new L.LatLng(50.7042331,4.5866968);
var child_LatLng = new L.LatLng(50.6829231,4.3709453);

var parent = L.marker(parent_LatLng); //.addTo(map)
var child = L.marker(child_LatLng); //.addTo(map)
var polyline = L.polyline([parent_LatLng, child_LatLng], {color: 'red'}); //.addTo(map)

//GEOJson

var geojsonFeature = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        4.5866968,
                        50.7042331
                    ],
                    [
                        4.3709453,
                        50.6829231
                    ]
                ]
            },
            "properties": {
                "id": "3050",
                "enterprise_relationship_id": "1340",
                "name": "add_to_order_cycle",
                "parent_id": "2",
                "child_id": "25"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        2.4364721,
                        48.861927
                    ],
                    [
                        4.3709453,
                        50.6829231
                    ]
                ]
            },
            "properties": {
                "id": "3052",
                "enterprise_relationship_id": "1341",
                "name": "add_to_order_cycle",
                "parent_id": "7",
                "child_id": "25"
            }
        }
        ]
};

L.geoJSON(geojsonFeature).addTo(map);


//faire un ligne stylisée

var myLines = [{
    "type": "LineString",
    "coordinates": [[4.3528,50.9466], [4.3528,50.7466], [4.3528,50.8466]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}); //.addTo(map);