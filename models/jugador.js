const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jugador = new Schema({
  id: {
    type: String
  },
  nombre: {
    type: String
  },
  apellidos: {
    type: String
  },
  nickname: {
    type: String
  },
  avatar: {
    type: String
  },
  email: {
    type: String
  },
  fecha_nac: {
    type: String
  },
  videojuegos: {
    type: Array
  },
},{
    collection: 'jugador'
});

module.exports = mongoose.model('jugador', jugador);