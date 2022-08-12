const express = require('express');
const router = express.Router();
const cors = require('cors');

// Controller
const apiController = require('../controllers/apiController');

/* GET ---------------------- */
router.get('/',cors(),apiController.list);
router.get('/search',cors(),apiController.search);
router.get('/:id',cors(),apiController.show);
router.post('/',cors(),apiController.store);
router.delete('/:id',cors(),apiController.delete);











module.exports = router;