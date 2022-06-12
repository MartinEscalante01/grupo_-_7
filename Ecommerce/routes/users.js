const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');

// Controller
const userController = require('../controllers/usersController');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const logDBMiddlewares = require('../middlewares/logDBMiddlewares');
const guestMiddleware = require('../middlewares/guestMiddlewares');
const authMiddleware = require('../middlewares/authMiddlewares');
const validations = require('../middlewares/validations');

router.get('/', userController.index);

// Formulario de registro
router.get('/register', userController.register); //Falta sumar el guestMiddleware

// Procesar el registro
router.post('/register', uploadFile.single('file'), validations ,userController.processRegister);

// Formulario de login
router.get('/login', userController.login);

// Procesar el login
router.post('/login', userController.processLogin);//Falta sumar el guestMiddleware

// Perfil de Usuario
router.get('/profile/', userController.profile); //Falta sumar el authMiddleware

// Logout
router.get('/logout/', userController.logout);

// Listado de Usuarios
router.get('/usersList', userController.list);


module.exports = router;