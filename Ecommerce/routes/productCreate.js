const express = require('express');
const router = express.Router();

const controller = require('../controllers/productController');

router.get('', controller.productCreate);
router.post('',controller.create)
module.exports = router;