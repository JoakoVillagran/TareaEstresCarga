const db = require('../config/bd.js');


//Query que obtiene todos los juegos
exports.getAllGames = (req, res) => {
    db.query('SELECT * FROM juegos', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
//Query que obtiene un juego en especifico mediante la id
exports.getGameById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM juegos WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
};

//Query para crear un juego en la bd
exports.createGame = (req, res) => {
    const { nombre, genero, plataforma, fecha_lanzamiento, precio } = req.body;
    const newGame = { nombre, genero, plataforma, fecha_lanzamiento, precio };
    db.query('INSERT INTO juegos SET ?', newGame, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, ...newGame });
    });
};

//Query para actualizar el juego seleccionado mediante la id
exports.updateGame = (req, res) => {
    const { id } = req.params;
    const { nombre, genero, plataforma, fecha_lanzamiento, precio } = req.body;
    const updatedGame = { nombre, genero, plataforma, fecha_lanzamiento, precio };
    db.query('UPDATE juegos SET ? WHERE id = ?', [updatedGame, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Game updated' });
    });
};

//Query para eliminar el juego seleccionado por id
exports.deleteGame = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM juegos WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Game deleted' });
    });
};