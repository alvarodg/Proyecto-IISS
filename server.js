const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();

    const jugadorRoutes = require('./routes/jugador.route');

    app.use(bodyParser.json());
    app.use(cors());
    app.use('/addJugador', jugadorRoutes);
    const port = process.env.PORT || 4000;


    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });