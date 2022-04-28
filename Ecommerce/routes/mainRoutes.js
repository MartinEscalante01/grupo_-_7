const express = require('express');
const router = express.Router();

const controller = require('../controllers/productController');

router.get('', controller.register);
router.get('', controller.productCart)

    
module.exports = router;