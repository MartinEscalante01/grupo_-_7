const express = require('express');
const router = express.Router();
const cors = require('cors');


// Controller
const apiController = require('../controllers/apiController');
const productsApi = require('../controllers/productsApi');

/* USERS */
router.get('/users',cors(), apiController.list);
router.get('/users/search',cors(), apiController.search);
router.get('/users/:id',cors(),apiController.show);
router.post('/users',cors(),apiController.store);
router.delete('/users/:id',cors(),apiController.delete);

/* PRODUCTS */
router.get('/products',cors(), productsApi.list);
router.get('/products/search',cors(), productsApi.search);
router.get('/products/:id',cors(),productsApi.show);
router.post('/products',cors(),productsApi.store);
router.delete('/products/:id',cors(),apiController.delete);

module.exports = router;