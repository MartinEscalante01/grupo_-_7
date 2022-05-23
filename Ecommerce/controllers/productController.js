const path = '\\JSON\\products.json';
const productos = require('../database/products.json')

const productsController = {
    productCart : (req,res) => {
        return res.render('products/productCart')
    },
    productDetail : (req,res) => {
        return res.render('products/productDetail', { 'productos': productos  })
    },
    productCreate : (req,res) => {
        res.render('products/productCreate')
    },
    index: (req,res) =>{
        res.render('products/productList', { 'productos': productos })
    },
    detail: (req,res) =>{
        res.send('Bienvenidos al detalle del producto ' + req.params.idProducto)
    },
    detailComments: (req,res) =>{
        if(req.params.idComments == undefined ){
            res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto);
        }else{
            res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto + ' y estas enfocado en el comentario ' + req.params.idComments);
        }
    },
    create:(req,res) =>{
        console.log(req.body);
        //FALTA GUARDARLA
        res.redirect('/products')
    },
    edit: (req,res) =>{
        let idProducto = req.params.idProducto;
        let productEdit = productos[idProducto];
        res.render('products/productEdit', { 'productEdit': productEdit })
    },
    update: (req,res) =>{
        res.render('/products');
    },
    delete: (req,res) =>{
        res.redirect('/products');
    },
}

module.exports = productsController;