const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jugador = new Schema({

  nombre: {
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
  }
  
},{
    collection: 'jugador'
});

module.exports = mongoose.model('jugador', jugador);