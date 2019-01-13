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

// Defined get data(index or listing) route
jugadorRoutes.route('/').get(function (req, res) {
    jugadorModel.find(function (err, jugadores){
    if(err){
      console.log(err);
    }
    else {
      res.json(jugadores);
    }
  });
});

// Defined edit route
jugadorRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  jugadorModel.findById(id, function (err, jugador){
      res.json(jugador);
  });
});

//  Defined update route
jugadorRoutes.route('/update/:id').post(function (req, res) {
    jugadorModel.findById(req.params.id, function(err, next, jugador) {
    if (!jugador)
      return next(new Error('Could not load Document'));
    else {
        jugador.id = req.body.id;
        jugador.nombre = req.body.nombre;
        jugador.apellidos = req.body.apellidos;
        jugador.nickname = req.body.nickname;
        jugador.avatar = req.body.avatar;
        jugador.email = req.body.email;
        jugador.fecha_nac = req.body.fecha_nac;
        jugador.videojuegos = req.body.videojuegos;
        
        jugador.save().then(jugador => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
jugadorRoutes.route('/delete/:id').get(function (req, res) {
    jugadorModel.findByIdAndRemove({_id: req.params.id}, function(err, jugador){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = jugadorRoutes;