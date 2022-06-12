const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/productController');

router.get('', controller.productCart);

module.exports = router;