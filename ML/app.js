const express = require('express');
const path = require('path');
const { send } = require('process');

const app = express();

app.use(express.static('public'))

app.get('/mercadoLiebre',(req,res) =>{
    res.sendFile(path.join(__dirname,'/views/html/home.html'))
});

app.get('/register',(req,res) =>{
    res.sendFile(path.join(__dirname,'/views/html/register.html'))
});

app.get('/login',(req,res) =>{
    res.sendFile(path.join(__dirname,'/views/html/login.html'))
});

app.listen(process.env.PORT || 3000, () =>{
    console.log('Servidor corriendo en el puerto 3000')
});
