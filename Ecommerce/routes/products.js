const express = require('express');
const router = express.Router();

// Controller
const productController = require('../controllers/productController');

// Todos los grupos
router.get('/', productController.index); //http://localhost:3030/products

// Detalle de un grupo y sus comentarios
router.get('/:idProducto', productController.detail); //http://localhost:3030/products/:id
router.get('/:idProducto/comentarios/:idComments', productController.detailComments); //http://localhost:3030/products/:idProducto/comentarios/:idComments

router.get('/:idProducto/edit', productController.edit); //http://localhost:3030/products/:id/edit
router.put('/edit', productController.editProcess); //Actualiza informacion

router.get('/:idProducto/delete', productController.delete); //Muestra vista de Delete
router.delete('/:idProducto/delete', productController.deleteProcess); //Procesa el borrado




module.exports = router;


//router.get('/productCreate', productController.productCreate); //http://localhost:3030/products/productCreate
//router.post('/guardar', productController.save);
//router.get('/productDetail', productController.productDetail);

