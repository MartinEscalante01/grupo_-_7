const fs = require('fs');
const path = '\\JSON\\products.json';
const productos = require('../database/JSON/products.json')
const actions = require('../database/actions');
const actionsProducts = require('../database/products');
const { Producto, Brand } = require('../database/models')

const productsController = {
    productCart: (req, res) => {
        return res.render('products/productCart')
    },
    productDetail: (req, res) => {
        const product = productos.find(producto => producto.id == req.params.id)
        const recomendaciones = []
        for (let index = 0; index < 3; index++) {
            const index = Math.floor(Math.random() * productos.length)
            recomendaciones.push(productos[index])
        }
        return res.render('products/productDetail', { product, recomendaciones })

    },
    productCreate: (req, res) => {
        res.render('products/productCreate')
    },
    index: async (req, res) => {
        // Async/Await - Try&Catch
        try{
            let producto = await Producto.findAll()
        } catch(error) {
            console.log('ERROR!')
        }
        //res.render('products/productList', { 'productos': productos })
    },
    detail: (req, res) => {
        res.redirect('/productDetail/' + req.params.idProducto)
    },
    detailComments: (req, res) => {
        if (req.params.idComments == undefined) {
            res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto);
        } else {
            res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto + ' y estas enfocado en el comentario ' + req.params.idComments);
        }
    },
    create: (req, res) => {
        let newProduct = { ...req.body, file: req.file.filename };
        let productCreate = actionsProducts.create(newProduct);
        return res.redirect('/products');
    },
    edit: (req, res) => {
        let productEdit = productos.find(producto => producto.id == req.params.idProducto)
        res.render('products/productEdit', { productEdit })
    },
    editProcess: (req, res) => {
        console.log("llegue a guardar la edicion del producto");
        let editar = req.body;
        console.log(editar, " ------- datos de req.body ");
        console.log(req.body, " ------------------- req.body");
        console.log(req.params, " -----------------------req.params");
        actions.path = path;
        let resp = actions.modify(req.params);
        console.log(resp, "------------aca tenemos resp")
        res.status(200).redirect('/products');
    },
    delete: (req, res) => {
        let idProducto = productos.find(producto => producto.id == req.params.idProducto)
        res.render('products/delete', { 'idProducto': idProducto });
    },
    deleteProcess: (req, res) => {
        let product = req.body;
        let deleteProduct = actionsProducts.delete(product);
        res.status(200).redirect('/products', { productos: deleteProduct });
    },
}

module.exports = productsController;