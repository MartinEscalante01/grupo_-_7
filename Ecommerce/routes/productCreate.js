const express = require('express');
const router = express.Router();
const path = require('path')

const productController = require('../controllers/productController');
const actionsController = require('../database/actions');

// Formulario de creacion
router.get('/', productController.productCreate); //http://localhost:3030/productCreate

// Creacion
router.post('/creado', productController.create); 

//Multer
const multer = require('multer');
const actions = require('../database/actions');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        let folder = path.join(__dirname, '../public/img/productsImages');
        cb(null, folder)
    },
    filename: (req, file, cb) =>{
        console.log(file)
        let txtImagen = `${Date.now()}_img_${path.extname(file.originalname)}`;
        cb(null, txtImagen );
    }   
});

const uploadFile = multer({storage});

const upload = uploadFile.single('txtImagen');

// Procesamiento del formulario de creacion
router.post('/', uploadFile.single('txtImagen'), actionsController.create);

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