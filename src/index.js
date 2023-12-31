const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const mongodbRoute = 'mongodb+srv://12345:12345@cluster0.uakp2dy.mongodb.net/?retryWrites=true&w=majority';

const app = express();
const PORT = process.env.PORT || 3000;

//Use bodyparser

app.use(bodyParser.json());

async function start(){

    try{
        await mongoose.connect(mongodbRoute);
        app.listen(PORT,()=>{
            console.log(`API is listening on port ${PORT}`)
        });
        console.log('Conexión con Mongo correcta.')
    }catch(error){
        console.log(`Error al conectar a la base de datos: ${error.message}`)
    }
}

start();