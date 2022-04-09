const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public')); 

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'view/index.html'))
})

app.get('/carritoDeCompras',(req,res)=>{
    res.sendFile(path.join(__dirname,'view/index.html'))
})

app.get('/detalleDeProducto',(req,res)=>{
    res.sendFile(path.join(__dirname,'view/detalleDeProducto.html'))
})

app.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname,'view/index.html'))
})


app.listen(3030, (req, res)=>{
    console.log("levantando el servidor")
})