const path = '\\JSON\\products.json';
const productos = require('../database/products.json')

const productsController = {
    productCart : (req,res) => {
        return res.render('products/productCart')
    },
    productDetail : (req,res) => {
        return res.render('products/productDetail', { productos })
    },
    productCreate : (req,res) => {
        return res.render('products/productCreate')
    },
    productEdit : (req,res) => {
        return res.render('products/productEdit')
    },
    index: (req,res) =>{
        res.send('Bienvenido al Listado de Productos')
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
    }
}

module.exports = productsController;