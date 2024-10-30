//Desde aqui se inicia la api con express agregando las rutas que se obtienen del archivo de rutas de juegos
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const gameRoutes = require('./routes/rutasJuego.js');


app.use(express.json());


app.use('/api', gameRoutes);

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});