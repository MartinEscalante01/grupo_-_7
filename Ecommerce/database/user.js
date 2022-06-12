const fs = require('fs');

const user = {
	path: './database/JSON/users.json',

	getData: function () {
		return JSON.parse(fs.readFileSync(this.path, 'utf-8')); //Obtengo la informacion como array
	},
	usersData: function () { //Tener a todos los usuarios
		return this.getData();
	},
	idUser: function (id) {
		let allUser = this.usersData();
		let usuarioEncontrado = allUser.find(user => user.id === id);
		return usuarioEncontrado;
	},
	itemUser: function (item, text) {
		let allUser = this.usersData();
		let usuarioEncontrado = allUser.find(user => user[item] === text);
		return usuarioEncontrado;
	},
	create: function (userData) {
		let allUser = this.usersData();
		let usuarioNuevo = {id: this.generateId(),...userData} //Crear nuevo usuario
		allUser.push(usuarioNuevo); //Inserto en mi base de datos al nuevo usuario
		fs.writeFileSync(this.path, JSON.stringify(allUser, null,  ' ')); //Guardo los datos
		return usuarioNuevo;
	},
	generateId: function () {
		let allUser = this.usersData();
		let ultimoUser = allUser.pop();
		if (ultimoUser) {
			return ultimoUser.id + 1;
		}
		return 1;
	},
    delete: function (id) {
		let allUser = this.usersData();
		let userData = allUser.filter(user => user.id !== id);
		fs.writeFileSync(this.path, JSON.stringify(userData, null, ' '));
		return true;
	}
}

module.exports = user;