const express = require('express');
const app = express();
const mainRouter = require('./routes/index')
const registerRouter = require('./routes/register')
const productCart = require('./routes/productCart.js')
const productDetail = require('./routes/productDetail');
const loginRouter = require('./routes/login');
const productCreate = require('./routes/productCreate');
const productEdit = require('./routes/productEdit');

app.use(express.static('public')); 

app.set('view engine','ejs');
app.set('views',__dirname + '/view');

// app.set('views', __dirname + '/view/users');
// app.set('views', __dirname + '/view/products');


app.use('/home',mainRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/productCart',productCart);
app.use('/productDetail', productDetail);
app.use('/productCreate', productCreate);
app.use('/productEdit', productEdit);

app.listen(3030, (req, res)=>{
    console.log("levantando el servidor")
})


















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