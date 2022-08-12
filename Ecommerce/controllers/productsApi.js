const db = require('../database/models');
const Op = db.Sequelize.Op; //Aqui hacen esto para lograr activalos operadores en sus querys (like - count - max)

module.exports = {
    list: (req, res) => {
        db.Producto.findAll(
            {include : [
                {association: "genders"},
                {association: "brands"},
                {association: "categories"},
                {association: "sizes"},
            ]}
        )
        .then( sportix => {
            return res.status(200).json({
                total:sportix.length,
                data:sportix,
                
            });
        })
    },
    show: (req,res)=>{
        db.Producto.findByPk(req.params.id, {
            include : [
                {association: "genders"},
                {association: "brands"},
                {association: "categories"},
                {association: "sizes"},
            ]
        })
        .then(sportix => {
            return res.status(200).json({
                data: sportix,
                status:200
            })
        })
    },
    store:(req,res) =>{
        db.Producto
        .create(req.body)
        .then(sportix =>{
            return res.status(200).json({
                data:sportix,
                status:200,
                create:'ok'
            });
        })
        
    },
    delete:(req,res) =>{
        db.Producto
        .destroy({
            where:{
                id: req.params.id
            }
        })
        .then(response =>{
            return res.json(response)
        })
    },
    search:(req,res) =>{
        db.Producto
        .findAll({
            where:{
                name: {[Op.like]: '%' + req.query.keyword + '%'}
            }
        })
        .then(sportix => {
            return res.status(200).json(sportix)
        })
    }
}