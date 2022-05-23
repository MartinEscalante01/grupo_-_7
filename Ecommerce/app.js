const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
//const multer = require('multer');


//datos
const datosProducts = require('./database/products.json');
const datosUsers = require('./database/users.json');


//Routes imports
const mainRouter = require('./routes/mainRouter');
const registerRouter = require('./routes/register.js');
const productCart = require('./routes/productCart.js');
const productDetail = require('./routes/productDetail');
const loginRouter = require('./routes/login');
const productCreate = require('./routes/productCreate');
const products = require('./routes/products');
const users = require('./routes/users');
const { error } = require('console');


//middlewares
app.set('view engine','ejs');
app.set('views',__dirname + '/view');


app.use(express.static('public')); 

app.use(express.urlencoded({ extended: false })); //Capturar Informacion de un Formulario en un objeto literal
app.use(express.json()); // Convertir el objeto literal en JSON

app.use(methodOverride('_method')); //Para usar PUT y DELETE

app.use('/',mainRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/productCart',productCart);
app.use('/productDetail', productDetail);
app.use('/productCreate', productCreate);
app.use('/products', products);
app.use('/users', users);


app.get('/datosProducts', (req,res) =>{
    res.json (datosProducts );
});

app.get('/datosUsers', (req,res) =>{
    res.json (datosUsers );});



app.use('/',  (req, res) => { 
    res.status(404).send('NOT FOUND');
});
    
    
// Servidor
let port = process.env.PORT || 3030;
    
app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
    
    
    