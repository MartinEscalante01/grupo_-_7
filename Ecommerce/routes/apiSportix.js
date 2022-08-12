const express = require('express');
const router = express.Router();
const cors = require('cors');


// Controller
const apiController = require('../controllers/apiController');

/* GET ---------------------- */
router.get('/users',cors(), apiController.list);
router.get('/users/search',cors(), apiController.search);
router.get('/users/:id',cors(),apiController.show);
router.post('/users',cors(),apiController.store);
router.delete('/users/:id',cors(),apiController.delete);








=======
>>>>>>> 72ba8caf51d06377fff1024ce7c2634a627db5c0

router.get('/',cors(),apiController.list);
router.get('/search',cors(),apiController.search);
router.get('/:id',cors(),apiController.show);
router.post('/',cors(),apiController.store);
router.delete('/:id',cors(),apiController.delete);


module.exports = router;