const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRoutes')

app.use(express.static('public')); 

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'view/index.html'))
})

// app.get('/productCart',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view/productCart.html'))
// })

//app.get('/productDetail',(req,res)=>{
//    res.sendFile(path.join(__dirname,'view/productDetail.html'))
//})

app.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname,'view/index.html'))
})

// Ya no nececitamos esto 
// app.get('/register',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view/register.html'))
// })

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'view/login.html'))
})

app.set('view engine','ejs');
app.set('views', __dirname + '/view');


app.use('/register',mainRoutes);
app.use('/productCart',mainRoutes);
app.use('/productDetail',mainRoutes);


app.listen(3030, (req, res)=>{
    console.log("levantando el servidor")
})