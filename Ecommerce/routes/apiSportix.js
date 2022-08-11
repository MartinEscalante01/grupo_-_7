const express = require('express');
const router = express.Router();

// Controller
const apiController = require('../controllers/apiController');

/* GET ---------------------- */
router.get('/', apiController.list);











module.exports = router;