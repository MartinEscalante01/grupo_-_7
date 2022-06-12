const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/mainController');

/* GET HOME PAGE */
router.get('/', controller.home);

// router.get('/prueba', (req, res) =>{ //CONTADOR DE VISITAS
//     if(req.session.numeroVisitas == undefined) {
//         req.session.numeroVisitas = 0;
//     }

//     req.session.numeroVisitas++;
    
//     res.send('Session tiene el numero ' + req.session.numeroVisitas);
// })

module.exports = router;