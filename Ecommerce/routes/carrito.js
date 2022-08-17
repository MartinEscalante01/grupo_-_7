const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/adminProducts');

router.get('', controller.carrito);

module.exports = router;