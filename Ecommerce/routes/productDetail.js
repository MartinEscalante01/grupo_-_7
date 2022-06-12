const express = require('express');
const router = express.Router();

// Controller
const productsController = require('../controllers/productController');

router.get('/:id', productsController.productDetail);

module.exports = router;