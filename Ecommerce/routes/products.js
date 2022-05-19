const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.index);
router.get('/:idProducto', productController.detail);
router.get('/:idProducto/comentarios/:idComments', productController.detailComments);


module.exports = router;