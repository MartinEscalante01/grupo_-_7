const express = require('express');
const router = express.Router();

// Controller
const productController = require('../controllers/productController');
const adminProducts = require('../controllers/adminProducts');

// Todos los grupos
router.get('/', adminProducts.index); //http://localhost:3030/products

// Detalle de un grupo y sus comentarios
router.get('/:idProducto', productController.detail); //http://localhost:3030/products/:id
router.get('/:idProducto/comentarios/:idComments', productController.detailComments); //http://localhost:3030/products/:idProducto/comentarios/:idComments

router.get('/edit/:idProducto', adminProducts.edit); //Vista de Editar
router.put('/edit/:idProducto', adminProducts.update); //Actualiza informacion

router.get('/delete/:id', adminProducts.delete); //Muestra vista de Delete
router.delete('/delete/:id', adminProducts.destroy); //Procesa el borrado

module.exports = router;


