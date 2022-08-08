const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/mainController');

/* GET HOME PAGE */
router.get('/', controller.home);

// NOT FOUND
router.get('/error', controller.notFound)

// Quienes Somos
router.get('/nosotros', controller.nosotros)

// Terminos y Politica
router.get('/terms', controller.terms)

module.exports = router;