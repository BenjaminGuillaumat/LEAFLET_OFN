async function fetchGeoJSON() {
    try {
        const response = await fetch('https://brave-boa-49.deno.dev');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const geojsonFeature = await response.json();
        console.log(geojsonFeature);
        
        //MAPPPP
        var map = L.map('map').setView([50.594956, 4.594725], 9);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.geoJSON(geojsonFeature, { filter: f => f.properties.visibility }).addTo(map);

        return geojsonFeature;
    } catch (error) {
        console.error('Erreur lors de la récupération du GeoJSON:', error);
    }
}

// var geojsonFeature = {
//     "type": "FeatureCollection",
//     "features": [
//     {
//         "type": "Feature",
//         "geometry": {
//             "type": "LineString",
//             "coordinates": [
//                 [
//                     4.5866968,
//                     50.7042331
//                 ],
//                 [
//                     4.3709453,
//                     50.6829231
//                 ]
//             ]
//         },
//         "properties": {
//             "id": "3050",
//             "enterprise_relationship_id": "1340",
//             "name": "add_to_order_cycle",
//             "parent_id": "2",
//             "child_id": "25"
//         }
//     },
//     {
//         "type": "Feature",
//         "geometry": {
//             "type": "LineString",
//             "coordinates": [
//                 [
//                     2.4364721,
//                     48.861927
//                 ],
//                 [
//                     4.3709453,
//                     50.6829231
//                 ]
//             ]
//         },
//         "properties": {
//             "id": "3052",
//             "enterprise_relationship_id": "1341",
//             "name": "add_to_order_cycle",
//             "parent_id": "7",
//             "child_id": "25"
//         }
//     }
//     ]
// }

// var map = L.map('map').setView([50.594956, 4.594725], 9);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// function isOxfamCoordinate(coord) {
//     return oxfamCoordinates.some(oxfamCoord =>
//         oxfamCoord[0] === coord[1] && oxfamCoord[1] === coord[0]
//     );
// }

// // Vérifier 
// function filterFeatures(feature) {
//     if (feature.geometry.type === 'LineString') {
//         return !feature.geometry.coordinates.some(coord => isOxfamCoordinate(coord));
//     }
//     return true;
// }

// // Apply the filter to the geoJSON data
// L.geoJSON(geojsonFeature).addTo(map);

fetchGeoJSON().then(geojsonFeature => {
    console.log('salut');
});