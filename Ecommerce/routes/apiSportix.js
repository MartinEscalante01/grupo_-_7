const express = require('express');
const router = express.Router();

// Controller
const apiController = require('../controllers/apiController');

/* GET ---------------------- */
router.get('/users', apiController.list);
router.get('/users/search', apiController.search);
router.get('/users/:id',apiController.show);
router.post('/users',apiController.store);
router.delete('/users/:id',apiController.delete);











module.exports = router;