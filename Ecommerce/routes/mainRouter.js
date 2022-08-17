const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/mainController');
const adminProducts = require('../controllers/adminProducts');

/* GET HOME PAGE */
router.get('/', controller.home);

/* Catalogo de Productos */
router.get('/catalogo', adminProducts.show); 

// NOT FOUND
router.get('/error', controller.notFound)

// Quienes Somos
router.get('/nosotros', controller.nosotros)

// Terminos y Politica
router.get('/terms', controller.terms)

// Terminos y Politica
router.get('/faqs', controller.faqs)

module.exports = router;