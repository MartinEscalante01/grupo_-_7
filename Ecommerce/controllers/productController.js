const fs = require('fs');
const path = '\\JSON\\products.json';
const productos = require('../database/JSON/products.json')
const actions = require('../database/actions');

const productsController = {
    productCart : (req,res) => {
        return res.render('products/productCart')
    },
    productDetail : (req,res) => {
        const product = productos.find(producto => producto.id == req.params.id)
        const recomendaciones = []
        for (let index = 0; index < 3; index++) {
            const index =Math.floor(Math.random() * productos.length)
            recomendaciones.push(productos[index])
        }
        return res.render('products/productDetail', {  product,recomendaciones  })

    },
    productCreate : (req,res) => {
        res.render('products/productCreate')
    },
    index: (req,res) =>{
        res.render('products/productList', { 'productos': productos })
    },
    detail: (req,res) =>{
        res.redirect('/productDetail/' + req.params.idProducto)
    },
    detailComments: (req,res) =>{
        if(req.params.idComments == undefined ){
            res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto);
        }else{
            res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto + ' y estas enfocado en el comentario ' + req.params.idComments);
        }
    },
    create:(req,res) =>{
        const body = req.body;
        actions.path = path;
        const response = actions.create(body);
        res.status(200).render('products/productList', {productos: response});
    },
    edit: (req,res) =>{
        let productEdit = productos.find(producto => producto.id == req.params.idProducto)
        res.render('products/productEdit', { 'productEdit': productEdit })
    },
    delete: (req,res) =>{
        let idProducto = productos.find(producto => producto.id == req.params.idProducto)
        res.render('products/delete' , {'idProducto': idProducto});
    },
    store: (req, res) => {
        let product = req.body;
        productoId = productos.create(product);
        res.redirect('/products/' + productoId);
    },
}

module.exports = productsController;