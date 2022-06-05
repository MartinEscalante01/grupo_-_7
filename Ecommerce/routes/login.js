const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('', usersController.login);

//router.post('', [
//  check('email').isEmail().withMessage('Email Inválido');
//  check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres');
//] ,usersController.processLogin)

module.exports = router;