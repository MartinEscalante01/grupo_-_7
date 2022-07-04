const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const user = require('../database/user');
const dataUsers = require('../database/JSON/users.json')
// const db = require('../database/models')

const controller = {
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
                return res.redirect('profile');
            };
		return res.render('users/login', {errors: {email: {msg: 'El usuario o la contraseña no son correctas. Por favor, inténtalo de nuevo.'}}});
        }
    },
    register : (req,res) =>{
        // db.Gender.findAll()
        //     .then(function(gender){
        //         return res.render('users/register', {gender:gender})
        //     });
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
        return res.redirect('/users/login');
	},
    edit: (req, res) => {
        let userEdit = dataUsers.find(dataUser => dataUser.id == req.params.idUser)
        res.render('users/userEdit', {userEdit })
    },
    editProcess: (req, res) => {
        console.log("llegue a guardar la edicion del producto");
        let editar = req.body;
        console.log(editar, " ------- datos de req.body ");
        console.log(req.body, " ------------------- req.body");
        console.log(req.params, " -----------------------req.params");
        actions.path = path;
        let resp = actions.modify(req.params);
        console.log(resp, "------------aca tenemos resp")
        res.status(200).redirect('/products');
    },
    profile: (req, res) => {
        res.render('users/profile', {user: req.session.userLogged});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;

