const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// Formulario de creacion
router.get('/', productController.productCreate); //http://localhost:3030/productCreate

// Procesamiento del formulario de creacion
router.post('/', productController.create);


//Multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        let folder = path.join(__dirname, './public/img/productsImages');
        cb(null, folder)
    },
    filename: (req, file, cb) =>{
        let txtImagen = `${Date.now()}_img_${path.extname(file.originalname)}`;
        cb(null, txtImagen );
    }
});

const uploadFile = multer({storage});

router.post('/', uploadFile.single('txtImagen'), (req, res) =>{
    res.status(200).send('OK')
});

const upload = uploadFile.single('txtImagen');

router.post('/creadovalidacion', (req, res) =>{
    upload(req, res, (err) => {
        if(err){
            res.status(400).send('ALGO SALIO MAL')
        }
        res.send('OK')
    })
});


module.exports = router;