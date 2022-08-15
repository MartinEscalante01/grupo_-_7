const express = require('express');
const router = express.Router();

// Controller
const productsController = require('../controllers/productController');
const adminProducts = require('../controllers/adminProducts');

router.get('/:id', adminProducts.productDetail);

module.exports = router;