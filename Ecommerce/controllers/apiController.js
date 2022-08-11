const db = require('../database/models');
const Op = db.Sequelize.Op; //Aqui hacen esto para lograr activalos operadores en sus querys (like - count - max) 

module.exports = {
    list: (req, res) => {
        return res.json('HOLA MUNDO !!!!!!!!!!!!!!!')
    }
    
}