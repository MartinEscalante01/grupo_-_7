const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const user = require('../database/user');
const dataUsers = require('../database/JSON/users.json')

const controller = {
    index : function(req,res) {
        return res.render('/users/userEdit')
    },
    list: (req,res) =>{
        return res.render('users/usersList', {'dataUsers': dataUsers})
    },
    login : function(req,res) {
        return res.render('users/login')
    },
    processLogin: (req,res) =>{
        let userLog = user.itemUser('email', req.body.email);
		if(userLog) {
		    let loadPassword = bcryptjs.compareSync(req.body.password, userLog.password); //VALIDAD CONTRASEÑA CON EL COMPARESYNC, puedo comparar con la contraseña que esta encriptada en mi base de datos
			if (loadPassword) {
                delete userLog.password; //por seguridad
                req.session.userLogged = userLog;
                return res.redirect('/users/profile');
            };
		return res.render('users/login', {errors: {email: {msg: 'El usuario o la contraseña no son correctas. Por favor, inténtalo de nuevo.'}}});
    }
    },
    register : (req,res) =>{
        return res.render('users/register')
    },
    processRegister: (req, res) => {
		//VALIDACIONES Y MENSAJES DE ERRORES
        const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(), //mapped convierte el array en objeto literal
				oldData: req.body
			});
		};
        //VALIDACION PARA NO RECARGAR + DE 1 USUARIO CON EL MISMO MAIL
		let usuarioExistente = user.itemUser('email', req.body.email); 
		if (usuarioExistente) {
			return res.render('users/register', {
				errors: {email: {msg: 'Este email ya está registrado'}},
				oldData: req.body
			});
		}
		let usuarioCreado = {...req.body, password: bcryptjs.hashSync(req.body.password, 10),file: req.file.filename}
        let userCreated = user.create(usuarioCreado);
        return res.redirect('users/login');
	},
    search : function(req,res) {
        return res.render('users/search')
    },
    userCreate : (req,res) => {
        res.render('users/userCreate')
    },
    edit : function(req,res) {
        let idUser = req.params.idUser
        let users = [
            {id: 1, name: 'Juan'}, 
            {id: 2, name: 'Luis'}
        ];
        let userToEdit = users[idUser];
        res.render('/users/userEdit', {userToEdit: userToEdit});
    },
    profile: (req, res) => {
        console.log(req.session)
        //return res.render('users/profile', {user: req.session.userLogged});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;

