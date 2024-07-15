const express = require('express');
const path = require('path');
const request = require('request'); 

const app = express();
const PORT = 3000;

// Servir les fichiers statiques à partir du dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route proxy pour contourner les problèmes de CORS
app.get('/proxy', (req, res) => {
    const url = 'https://brave-boa-49.deno.dev';
    req.pipe(request(url)).pipe(res);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
