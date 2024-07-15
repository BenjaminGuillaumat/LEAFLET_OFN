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

fetchGeoJSON().then(geojsonFeature => {
    console.log('salut');
});