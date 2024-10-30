const express = require('express');
const router = express.Router();
const gameController = require('../controllers/juegoControlador.js');

//Rutas de la api, se deben agregar al final de localhost:3000/api
router.get('/juegos', gameController.getAllGames);
router.get('/juegos/:id', gameController.getGameById);
router.post('/juegos', gameController.createGame);
router.put('/juegos/:id', gameController.updateGame);
router.delete('/juegos/:id', gameController.deleteGame);

module.exports = router;