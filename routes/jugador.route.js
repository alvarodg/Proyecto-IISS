const express = require('express');
const app = express();
const jugadorRoutes = express.Router();

let jugadorModel = require('../models/jugador');

// Defined store route
jugadorRoutes.route('/add').post(function (req, res) {
  let jugador = new jugadorModel(req.body);
  jugador.save()
    .then(game => {
    res.status(200).json({'jugador': 'jugador is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

module.exports = jugadorRoutes;