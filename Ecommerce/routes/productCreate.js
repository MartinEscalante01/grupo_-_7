const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.productCreate); //http://localhost:3030/productCreate
router.post('/', productController.create);



module.exports = router;