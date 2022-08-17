const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');

// Controller
const userController = require('../controllers/usersController');
const adminController = require('../controllers/adminUsers');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const logDBMiddlewares = require('../middlewares/logDBMiddlewares');
const guestMiddleware = require('../middlewares/guestMiddlewares');
const authMiddleware = require('../middlewares/authMiddlewares');
const validations = require('../middlewares/validations');

// Formulario de registro
router.get('/register', guestMiddleware, adminController.create); 

// Procesar el registro
router.post('/register', uploadFile.single('file'), validations ,adminController.save);

// Vista Edicion de registro
router.get('/edit/:id', guestMiddleware, adminController.edit); 

// Procesar Edicion de registro
router.put('/edit/:id', uploadFile.single('file'), validations ,adminController.update);

// Formulario de login
router.get('/login', userController.login);

// Procesar el login
router.post('/login', guestMiddleware, userController.processLogin);

// Perfil de Usuario
router.get('/profile', authMiddleware, adminController.profile); 

// Logout
router.get('/logout', userController.logout);

// Listado de Usuarios
router.get('/usersList', adminController.index);

// Detalle de Usuario
router.get('/detail/:id', adminController.show);

// Vista - Eliminar Usuario
router.get('/delete/:id', adminController.delete);

// Procesar - Eliminar Usuario

router.delete('/delete/:id', adminController.destroy);


module.exports = router;