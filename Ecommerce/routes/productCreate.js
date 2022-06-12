const express = require('express');
const router = express.Router();
const path = require('path')
const upload = require('../middlewares/multerProducts')

// Controller
const productController = require('../controllers/productController');

// Formulario de creacion
router.get('/', productController.productCreate); //http://localhost:3030/productCreate

// Procesamiento del formulario de creacion
router.post('/', upload, productController.create);

//Validaciones

router.post('/creadovalidacion', (req, res) =>{
    upload(req, res, (err) => {
        if(err){
            res.status(400).send('ALGO SALIO MAL')
        }
        res.send('OK')
    })
});


module.exports = router;