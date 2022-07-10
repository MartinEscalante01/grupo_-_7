const path = require('path');
const db = require('../database/models');
const Op = db.Sequelize.Op; //Aqui hacen esto para lograr activalos operadores en sus querys (like - count - max) 

const adminProducts = {
    index: (req,res) =>{
        db.Producto.findAll()   
        .then(productos =>{
            res.render('products/productList', { productos })
        })
        .catch(error => res.send(error))
    },
    create: (req, res) =>{
        db.Size.findAll()
        .then(size =>{
            res.render('products/productCreate', {size});
        })
    },
    save: (req,res)=>{
        db.Producto.create({
            fullName: req.body.fullName,
            gender: req.body.gender,
            email: req.body.email,
            password: req.body.password,
            birthday: req.body.birthday,
            phone: req.body.phone,
            country: req.body.country,
            state: req.body.state,
            file: req.file.filename,
            roles: req.body.roles,
        })
        res.redirect('/products');
    },
    edit: function(req,res){
        const pedidoProduct = db.Producto.findByPk(req.params.id,{
            include : [{association : 'gender'}]
        });
        const pedidoGender = db.Gender.findAll();

        Promise.all([pedidoProduct, pedidoGender])
        .then(([Product, gender]) => { 
            res.render('products/productEdit', {Product, gender});
        })
    },
    update: (req,res)=>{
        db.Producto.update({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            size: req.body.size,
            date: req.body.date,
            price: req.body.price,
            gender: req.body.gender,
            brand: req.body.brand,
            file: req.body.file,
        },{
            where:{
                id: req.params.id
            }
        })
        .then(()=> res.redirect('/products'))
        .catch(error =>res.send(error))
    },
    delete: (req,res) =>{
    db.Producto.findAll({
        where: {
            id : req.params.id
        }
    })  
    .then(resultado =>{
        console.log(resultado)
        res.render('products/delete', {resultado});
    })
    .catch(error => res.send(error))
    },
    destroy: (req,res) =>{
        db.Producto.destroy({
            where: {
                id : req.params.id
            }
        })
        .then(()=>  res.redirect('/products'))
        .catch(error => res.send(error))
    }
}

module.exports = adminProducts