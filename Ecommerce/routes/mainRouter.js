const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/mainController');

/* GET HOME PAGE */
router.get('/', controller.home);


module.exports = router;