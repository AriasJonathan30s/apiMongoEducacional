'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 5003;


//mongoose.Promise = global.Promise; //Solo  esto aplica siempre y cuando salga error sobre promise en la terminal.
mongoose.connect('mongodb://localhost:27017/curso_mongo')//,{connectTimeoutMS: 1000})
    .then(() => {
        console.log('La conexion a mongoDB ha tenido exito')

        app.listen(port, ()=>{
            console.log('El servidor esta corriendo en: localhost: 5003');
        });
    })
    .catch(err => console.log(err));