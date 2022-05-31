'use strict'

var express = require('express');
var bodyParser = require('body-parser');
const { application } = require('express');
var app = express();

//Cargar rutas
var fruta_routes = require('./routes/fruta');

// body-parser (es una middleware es una instruccion que se ejecuta antes de una peticion, despues el resto de cosas.)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar CORS

// rutas base
app.use('',express.Router().get('', function pruebas(req,res){res.status(200)
    .send('Esta ruta es pruebas en esta nueva api');
}))
app.use('/api',fruta_routes);
module.exports = app;