const express = require('express');
const path = require('path');
const { send } = require('process');

const app = express();

app.use(express.static('public'))

app.get('/mercadoLiebre',(req,res) =>{
    res.sendFile(path.join(__dirname,'../src/views/html/home.html'))
});

app.listen(3000, () =>{
    console.log('Servidor corriendo en el puerto 3000')
});