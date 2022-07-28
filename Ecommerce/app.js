const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session')
const cookies = require('cookie-parser');


const app = express();

const logDBMiddleware = require('./middlewares/logDBMiddlewares');

//middlewares
app.use(session( {
    secret: 'SPORTIX Secret',
}));//Middleware Express-Session

app.use(cookies());

app.use(logDBMiddleware);

app.set('view engine','ejs');// Template Engine
app.set('views',__dirname + '/view');

app.use(express.static('public')); 

app.use(express.urlencoded({ extended: false })); //Capturar Informacion de un Formulario en un objeto literal
app.use(express.json()); // Convertir el objeto literal en JSON

app.use(methodOverride('_method')); //Para usar PUT y DELETE

//Routes imports
const mainRouter = require('./routes/mainRouter');
const productCart = require('./routes/productCart.js');
const productDetail = require('./routes/productDetail');
const productCreate = require('./routes/productCreate');
const products = require('./routes/products');
const users = require('./routes/users');

app.use('/',mainRouter);
app.use('/productCart',productCart);
app.use('/productDetail', productDetail);
app.use('/productCreate', productCreate);
app.use('/products', products);
app.use('/users', users);


app.use('/',  (req, res) => { 
    res.status(404).redirect("/error");
});
      
// Servidor
let port = process.env.PORT || 3030;
    
app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});