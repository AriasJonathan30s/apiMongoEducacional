'use strict'

var express = require('express');
var FrutaControlador = require('../controladores/fruta');

var api= express.Router();

api.get('/pruebas', FrutaControlador.pruebas);
api.post('/agrega-frutas',FrutaControlador.agregaFruta);
api.get('/consulta-frutas',FrutaControlador.getFrutas);
api.get('/consulta-una-fruta/:id',FrutaControlador.getFruta);
api.put('/actualiza-datos-fruta/:id',FrutaControlador.updateFruta);
api.delete('/borra-una-fruta/:id',FrutaControlador.deleteFruta);


module.exports = api;