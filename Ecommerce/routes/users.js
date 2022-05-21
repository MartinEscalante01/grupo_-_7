const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController');

router.get('/', userController.index);

router.get('/register', userController.register);

//router.post('/register', userController.create);

router.get('/login', userController.login);

router.get('/list', userController.list);

router.get('/search', userController.search);

router.get('/:idUser', userController.edit);
router.put('/edit', function(req,res){
    res.send("Logrado por PUT")
});


module.exports = router;