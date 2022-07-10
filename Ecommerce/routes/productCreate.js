const express = require('express');
const router = express.Router();
const path = require('path')
const upload = require('../middlewares/multerProducts')

// Controller
const productController = require('../controllers/productController');
const adminProducts = require('../controllers/adminProducts');

// Formulario de creacion
router.get('/', adminProducts.create); //http://localhost:3030/productCreate

// Procesamiento del formulario de creacion
router.post('/', upload, adminProducts.save);


module.exports = router;