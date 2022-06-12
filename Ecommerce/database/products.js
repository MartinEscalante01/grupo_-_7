const fs = require('fs');

const products = {
	path: './database/JSON/products.json',

	getData: function () {
		return JSON.parse(fs.readFileSync(this.path, 'utf-8')); //Obtengo la informacion como array
	},
	productsData: function () { //Tener a todos los usuarios
		return this.getData();
	},
	idProduct: function (id) {
		let allProducts = this.productsData();
		let findProduct = allProducts.find(product => product.id === id);
		return findProduct;
	},
	itemProduct: function (item, text) {
		let allProducts = this.productsData();
		let findProduct = allProducts.find(product => product[item] === text);
		return findProduct;
	},
	create: function (productData) {
		let allProducts = this.productsData();
		let usuarioNuevo = {id: this.generateId(),...productData} //Crear nuevo usuario
		allProducts.push(usuarioNuevo); //Inserto en mi base de datos al nuevo usuario
		fs.writeFileSync(this.path, JSON.stringify(allProducts, null,  ' ')); //Guardo los datos
		return usuarioNuevo;
	},
	generateId: function () {
		let allProducts = this.productsData();
		let ultimoproduct = allProducts.pop();
		if (ultimoproduct) {
			return ultimoproduct.id + 1;
		}
		return 1;
	},
    delete: function (id) {
		let allProducts = this.productsData();
		let productData = allProducts.filter(product => product.id !== id);
		fs.writeFileSync(this.path, JSON.stringify(productData, null, ' '));
		return true;
	}
}

module.exports = products;