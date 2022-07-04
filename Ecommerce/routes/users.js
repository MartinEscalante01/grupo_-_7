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

// Formulario de registro
router.get('/register', guestMiddleware, userController.register); 

// Procesar el registro
router.post('/register', uploadFile.single('file'), validations ,userController.processRegister);

// Vista Edicion de registro
router.get('/userEdit/:idUser', guestMiddleware, userController.edit); 

// Procesar Edicion de registro
router.post('/register', uploadFile.single('file'), validations ,userController.processRegister);

// Formulario de login
router.get('/login', userController.login);

// Procesar el login
router.post('/login', guestMiddleware, userController.processLogin);

// Perfil de Usuario
router.get('/profile', authMiddleware, userController.profile); 

// Logout
router.get('/logout', userController.logout);

// Listado de Usuarios
router.get('/usersList', userController.list);


module.exports = router;