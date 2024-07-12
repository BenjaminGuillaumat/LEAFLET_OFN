// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const path = require('path');
const request = require('request');  // Ajoute ce module pour faire des requêtes HTTP

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
