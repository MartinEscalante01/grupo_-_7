const fs = require('fs');
const products = require('../database/JSON/products.json')

const rutaJson = '';

const actions = {
    path: '',
    get: function () {
        if(products) {
            return fs.readFileSync(__dirname + this.path);
        }
        return fs.readFileSync(__dirname + this.path);
    },
    create: function (products) {
        const jsonData = JSON.parse(fs.readFileSync(__dirname + this.path), 'utf8'); //Lee el JSON
        //Logica id
        let id = 0;
        let name = ""
        if(jsonData.length > 0) {
            id = jsonData.length + 1;
            name = req.body.txtNombre
        };
        const objectoACrear = { ...products, id, name }; //Creacion de Objeto
        jsonData.push(objectoACrear); //Agrego al Array
        fs.writeFileSync(__dirname + this.path, JSON.stringify(jsonData)); //Vuelve a escribirse
        return jsonData;
    },
    modify: function(products) {
        const jsonData = JSON.parse(fs.readFileSync(__dirname + this.path), 'utf8');
        
        const objectoAModificar = jsonData.find(products => products.id == products.id);
        objectoAModificar = products;

        fs.writeFileSync(__dirname + this.path, JSON.stringify(jsonData));
        return jsonData;
    },
    delete: function(products) {
        const jsonData = JSON.parse(fs.readFileSync(__dirname + this.path), 'utf8');
        
        jsonData = jsonData.filter(products => products.id != products.id);

        fs.writeFileSync(__dirname + this.path, JSON.stringify(jsonData));
        return jsonData;
    }
}

module.exports = actions;