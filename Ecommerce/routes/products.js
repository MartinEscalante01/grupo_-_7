const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

//router.get('/productDetail', productController.productDetail);

router.get('/', productController.index); //http://localhost:3030/products

router.get('/:idProducto', productController.detail); //http://localhost:3030/products/:id

router.get('/:idProducto/comentarios/:idComments', productController.detailComments); //http://localhost:3030/products/:idProducto/comentarios/:idComments

//router.get('/productCreate', productController.productCreate); //http://localhost:3030/products/productCreate
//router.post('/guardar', productController.save);

router.get('/:idProducto/edit', productController.edit); //http://localhost:3030/products/:id/edit
router.put('/edit', (req,res) =>{res.send('PUT')}); //Actualiza informacion
router.delete('/delete/:idProducto', productController.delete); //Elimina producto creado

module.exports = router;