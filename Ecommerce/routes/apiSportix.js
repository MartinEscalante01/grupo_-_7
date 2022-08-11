const express = require('express');
const router = express.Router();

// Controller
const apiController = require('../controllers/apiController');

/* GET ---------------------- */
router.get('/', apiController.list);
router.get('/search', apiController.search);
router.get('/:id',apiController.show);
router.post('/',apiController.store);
router.delete('/:id',apiController.delete);











module.exports = router;