const path = require('path');
const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const Op = db.Sequelize.Op; //Activa los operadores en sus querys (like - count - max) 

const adminController = {
    index: (req,res) =>{
        db.User.findAll({
                include : [
                    {association: "genders"},
                    {association: "countries"},
                    {association: "states"},
                    {association: "roles"},
                ]
            })   
        .then(dataUsers =>{
            res.render('users/usersList',{dataUsers});
        })
        .catch(error => res.send(error))
    },
    show: (req,res)=>{
        db.User.findByPk(req.params.id, {
            include : [
                {association: "genders"},
                {association: "countries"},
                {association: "states"},
                {association: "roles"},
            ]
        })  
        .then(user =>{
            res.render('users/detail', {user})
        })
    },
    create: (req, res) =>{
        db.User.findAll()
        .then( async (data)  =>{
            let genders = await db.Gender.findAll();
            let countries = await db.Country.findAll();
            let states = await db.State.findAll();
            let roles = await db.Rol.findAll();
            res.render('users/register', {data, genders, countries, states, roles});
        })
    },
    save: (req,res)=>{
        console.error(req.body);
        db.User.create({
            fullName: req.body.fullName,
            idGender: req.body.gender,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            birthday: req.body.birthday,
            phone: req.body.phone,
            idCountry: req.body.country,
            idState: req.body.state,
            // file: req.file.filename,
            idRoles: req.body.roles,
        }).catch(e =>{
            console.error(e)
        })
        res.redirect('/users/usersList');
    },
    edit: function(req,res){
        console.log(req.file);
        console.log(req.body);
        const pedidoUser = db.User.findByPk(req.params.id,{
            include : [
                {association: "genders"},
                {association: "countries"},
                {association: "states"},
                {association: "roles"},
            ]});
        const pedidoGender = db.Gender.findAll();
        const pedidoCountries = db.Country.findAll();
        const pedidoStates =  db.State.findAll();
        const pedidoRoles =  db.Rol.findAll();
        
        Promise.all([pedidoUser, pedidoGender, pedidoCountries, pedidoStates, pedidoRoles])
        .then(([user, genders, countries, states, roles]) => { 
            res.render('users/userEdit', {user, genders, countries, states, roles});
        })
    },
    
    update: (req,res)=>{
        console.log(req.file);
        db.User.update({
            fullName: req.body.fullName,
            idGender: req.body.gender,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            birthday: req.body.birthday,
            phone: req.body.phone,
            idCountry: req.body.country,
            idState: req.body.state,
            file: req.file.filename,
            idRoles: req.body.roles,
        },{
            where:{
                id: req.params.id
            }
        })
        .then(()=> res.redirect('/users/usersList'))
        .catch(error =>res.send(error))
    },
    delete: (req,res) =>{
        db.User.findAll({
            where: {
                id : req.params.id
            }
        })  
        .then(resultado =>{
            console.log(resultado)
            res.render('more/deleteUser', {resultado});
        })
        .catch(error => res.send(error))
    },
    destroy: (req,res) =>{
        db.User.destroy({
            where: {
                id : req.params.id
            }
        })
        .then(()=>  res.redirect('/users/usersList'))
        .catch(error => res.send(error))
    },
    profile: (req, res) => {
        res.render('users/profile', {user: req.session.userLogged});
	},
}

module.exports = adminController