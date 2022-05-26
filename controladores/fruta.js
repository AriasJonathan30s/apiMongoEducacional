'use strict'

var Fruta = require('../models/fruta');

function pruebas(req,res){
    res.status(200).send({
        mensaje: 'Esta ruta es prueba en esta nueva api'
    });
}

function agregaFruta(req,res){
    var fruta = new Fruta();

    var params = req.body;

    if(params.nombre){
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;

        fruta.save((err,frutaStored)=>{
            if(err){
                res.status(500).send({
                    mensaje: 'Error en el servidor'
                })
            } else{
                if(frutaStored){
                    res.status(200).send({
                        fruta: frutaStored
                    });
                } else{
                    res.status(200).send({
                        mensaje:'Error no se ha guardado la fruta'
                    })
                }
            }
        });
    } else{
        res.status(500).send({
            mensaje:'Error no estan todos los parametros'
        });
    }
}

function getFrutas(req,res){
    Fruta.find({}).sort({'nombre':1}).exec((err, frutas)=>{
        if(err){
            res.status(500).send({
                mensage: 'Error en el servidor'
            });
        }else{
            if(frutas){
                res.status(200).send({
                    frutas
                });
            }else{
                res.status(404).send({
                    mensaje:'No hay frutas'
                });
            }
        }
    });
}

function getFruta(req,res){
    var frutaId = req.params.id;

    Fruta.findById(frutaId).exec((err,fruta)=>{
        if(err){
            res.status(500).send({
                mensage: 'Error en el servidor'
            });
        }else{
            if(fruta){
                res.status(200).send({
                    fruta
                });
            }else{
                res.status(404).send({
                    mensaje:'No hay la fruta'
                });
            }
        }
    });
}

function updateFruta(req,res){
    var frutaId = req.params.id;
    var update = req.body;

    Fruta.findByIdAndUpdate(frutaId, update, {new:true},(err,frutaUpdated)=>{
        if(err){
            res.status(500).send({
                mensage: 'Error en el servidor'
            });
        }else{
            if(frutaUpdated){
                res.status(200).send({
                    fruta:frutaUpdated
                });
            }else{
                res.status(404).send({
                    mensaje: 'Fruta no existente'
                });
            }
        }
    });
}

function deleteFruta(req,res){
    var frutaId = req.params.id;
    
    Fruta.findByIdAndRemove(frutaId, (err,frutaRemoved)=>{
        if(err){
            res.status(500).send({
                mensage: 'Error en el servidor'
            });
        }else{
            if(frutaRemoved){
                res.status(200).send({
                    fruta:frutaRemoved
                });
            }else{
                res.status(404).send({
                    mensaje: 'Fruta no existente'
                });
            }
        }
    });
}

module.exports = {
    pruebas,
    agregaFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta
};