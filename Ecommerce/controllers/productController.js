const path = '\\JSON\\products.json';
const productos = require('../database/products.json')

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
        let productEdit = productos.find(producto => producto.id == req.params.idProducto)
        res.render('products/productEdit', { 'productEdit': productEdit })
    },
    delete: (req,res) =>{
        res.redirect('/products');
    },
}

module.exports = productsController;