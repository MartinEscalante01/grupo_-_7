const express = require('express');
const app = express();
const path = require('path');
//const methodOverride = require('method-override');
//const multer = require('multer');

<<<<<<< HEAD
//datos
const datosProducts = require('./database/products.json');
const datosUsers = require('./database/users.json');

//Routes imports
=======

>>>>>>> 98d4abb7a1a8d6c67b24234f4bea848f75151385
const mainRouter = require('./routes/index')
const registerRouter = require('./routes/register')
const productCart = require('./routes/productCart.js')
const productDetail = require('./routes/productDetail');
const loginRouter = require('./routes/login');
const productCreate = require('./routes/productCreate');
const productEdit = require('./routes/productEdit');
const { error } = require('console');


//middlewares
app.set('view engine','ejs');
app.set('views',__dirname + '/view');

<<<<<<< HEAD
app.use(express.static('public')); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(methodOverride('_method'));
=======
// app.set('views', __dirname + '/view/users');
// app.set('views', __dirname + '/view/products');
app.use(express.urlencoded({extender: false}));
app.use(express.json());
>>>>>>> 98d4abb7a1a8d6c67b24234f4bea848f75151385

app.use('/home',mainRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/productCart',productCart);
app.use('/productDetail', productDetail);
app.use('/productCreate', productCreate);
app.use('/productEdit', productEdit);

app.get('/datosProducts', (req,res) =>{
    res.json (datosProducts );
});

app.get('/datosUsers', (req,res) =>{
    res.json (datosUsers );
})

app.use('/',  (req, res) => { 
    res.status(404).send('not-found');
});

let port = process.env.PORT || 3030;

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});


















// app.get('/home',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view/index.html'))
// })

// app.get('/productCart',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view/productCart.html'))
// })

//app.get('/productDetail',(req,res)=>{
//    res.sendFile(path.join(__dirname,'view/productDetail.html'))
//})

// app.get('/formulario',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view/index.html'))
// })

// Ya no nececitamos esto 
// app.get('/register',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view/register.html'))
// })

// app.get('/login',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view/login.html'))
// })