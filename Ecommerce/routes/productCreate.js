const express = require('express');
const router = express.Router();
const path = require('path')
const upload = require('../middlewares/multerProducts')

// Controller
const productController = require('../controllers/productController');

// Formulario de creacion
router.get('/', productController.productCreate); //http://localhost:3030/productCreate

// Procesamiento del formulario de creacion
router.post('/', upload, productController.create);


module.exports = router;