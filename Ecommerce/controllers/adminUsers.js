const path = require('path');
const db = require('../database/models');
const Op = db.Sequelize.Op; //Activa los operadores en sus querys (like - count - max) 

const adminController = {
    index: (req,res) =>{
        db.User.findAll()   
        .then(dataUsers =>{
            res.render('users/usersList',{dataUsers});
        })
        .catch(error => res.send(error))
    },
    show: (req,res)=>{
        db.User.findByPk(req.params.id, {
            // include : [{association : "gender"}]
        })  
        .then(data =>{
            res.render('users/detail', {data})
        })
    },
    create: (req, res) =>{
        db.Gender.findAll()
        .then(gender =>{
            res.render('users/register', {gender});
        })
    },
    save: (req,res)=>{
        db.User.create({
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
        res.redirect('/users/usersList');
    },
    edit: function(req,res){
        const pedidoUser = db.User.findByPk(req.params.id,{
            include : [{association : 'gender'}]
        });
        const pedidoGender = db.Gender.findAll();

        Promise.all([pedidoUser, pedidoGender])
        .then(([user, gender]) => { 
            res.render('users/userEdit', {user, gender});
        })
    },
    update: (req,res)=>{
        db.User.update({
            fullName: req.body.fullName,
            gender: req.body.gender,
            email: req.body.email,
            password: req.body.password,
            birthday: req.body.birthday,
            phone: req.body.phone,
            country: req.body.country,
            state: req.body.state,
            file: req.body.file,
            roles: req.body.roles,
        },{
            where:{
                id: req.params.id
            }
        })
        .then(()=> res.redirect('/users/usersList'))
        .catch(error =>res.send(error))
    },
    // delete: (req,res) =>{
    //     db.User.findAll({
    //         where: {
    //             id : req.params.id
    //         }
    //     })  
    //     .then(resultado =>{
    //         console.log(resultado)
    //         res.render('users/userDelete', {resultado});
    //     })
    //     .catch(error => res.send(error))
    // },
    destroy: (req,res) =>{
        db.User.destroy({
            where: {
                id : req.params.id
            }
        })
        .then(()=>  res.redirect('/users/usersList'))
        .catch(error => res.send(error))
    }
}

module.exports = adminController