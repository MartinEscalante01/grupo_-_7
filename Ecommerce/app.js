const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session')
const cookies = require('cookie-parser');

//datos
const datosProducts = require('./database/JSON/products.json');
const datosUsers = require('./database/JSON/users.json');


//Routes imports
const mainRouter = require('./routes/mainRouter');
const productCart = require('./routes/productCart.js');
const productDetail = require('./routes/productDetail');
const productCreate = require('./routes/productCreate');
const products = require('./routes/products');
const users = require('./routes/users');

//middlewares
app.set('view engine','ejs');// Template Engine
app.set('views',__dirname + '/view');

app.use(express.static('public')); 

app.use(express.urlencoded({ extended: false })); //Capturar Informacion de un Formulario en un objeto literal
app.use(express.json()); // Convertir el objeto literal en JSON

app.use(methodOverride('_method')); //Para usar PUT y DELETE

app.use(cookies());

app.use('/',mainRouter);
app.use('/productCart',productCart);
app.use('/productDetail', productDetail);
app.use('/productCreate', productCreate);
app.use('/products', products);
app.use('/users', users);


app.use(session( {
    secret: 'SPORTIX Secret',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));//Middleware Express-Session

app.get('/pruebaSesiones', (req, res) =>{
    req.session.usuario = 'JP';
    req.session.rol = 'Admin';
    if(req.session.visitas == undefined){
        req.session.visitas = 0;
    };
    req.session.visitas++;
    console.log(req.session.visitas)
    res.send(`El usuario ${req.session.usuario} con rol ${req.session.rol} ha visitado la pagina ${req.session.visitas}`);
});

app.use('/',  (req, res) => { 
    res.status(404).send('NOT FOUND');
});
    
    
// Servidor
let port = process.env.PORT || 3030;
    
app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
    
    
    