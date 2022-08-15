const path = require('path');
const db = require('../database/models');
const productos = require('../database/JSON/products.json');
const { log } = require('console');
const Op = db.Sequelize.Op; //Aqui hacen esto para lograr activalos operadores en sus querys (like - count - max) 

const adminProducts = {
    index: (req,res) =>{
        db.Producto.findAll(
            {include : [
                {association: "genders"},
                {association: "brands"},
                {association: "categories"},
                {association: "sizes"},
            ]}
        )   
        .then(productos =>{
            res.render('products/productList', { productos })
        })
        .catch(error => res.send(error))
    },
    create: (req, res) =>{
        db.Producto.findAll()
        .then( async (data)  =>{
            let genders = await db.Gender.findAll();
            let brands = await db.Brand.findAll();
            let categories = await db.Category.findAll();
            let sizes = await db.Size.findAll();
            res.render('products/newProduct', {data, genders, brands, categories, sizes});
        })
    },
    save: (req,res)=>{
        db.Producto.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            size: req.body.size,
            date: req.body.date,
            price: req.body.price,
            gender: req.body.gender,
            brand: req.body.brand,
            file: req.file.filename,
        })
        res.redirect('/products');
    },
    edit: function(req,res){
        console.log(req.body);
        const pedidoProduct = db.Producto.findByPk(req.params.id,{
            include : [
                {association: "genders"},
                {association: "brands"},
                {association: "categories"},
                {association: "sizes"},
            ]});
        
        const pedidoGender = db.Gender.findAll();
        const pedidoBrand = db.Brand.findAll();
        const pedidoCategory =  db.Category.findAll();
        const pedidoSize =  db.Size.findAll();

        Promise.all([pedidoProduct, pedidoGender, pedidoBrand, pedidoCategory, pedidoSize])
        .then(([productos, genders, brands, categories, sizes]) => { 
            res.render('products/productEdit', {productos, genders, brands, categories, sizes});
        })
    },
    update: (req,res)=>{
        console.log(req.body);
        db.Producto.update({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            size: req.body.size,
            date: req.body.date,
            price: req.body.price,
            gender: req.body.gender,
            brand: req.body.brand,
            file: req.file.filename,
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
    },
    productDetail: (req, res) => {
        const pedidoProduct = db.Producto.findByPk(req.params.id,{
            include : [
                {association: "genders"},
                {association: "brands"},
                {association: "categories"},
                {association: "sizes"},
            ]});
        
        const pedidoGender = db.Gender.findAll();
        const pedidoBrand = db.Brand.findAll();
        const pedidoCategory =  db.Category.findAll();
        const pedidoSize =  db.Size.findAll();
        // const product = db.Producto.findAll();
        // const productJSON = productos.find(producto => producto.id == req.params.id)
        // const recomendaciones = []
        //     for (let index = 0; index < 3; index++) {
        //         const index = Math.floor(Math.random() * productJSON.length)
        //         recomendaciones.push(productJSON[index])
        //     };

        Promise.all([pedidoProduct, pedidoGender, pedidoBrand, pedidoCategory, pedidoSize])
        .then(([productos, genders, brands, categories, sizes]) => { 
            res.render('products/productDetail', {productos, genders, brands, categories, sizes});
        })
        // const product = productos.find(producto => producto.id == req.params.id)
        // const recomendaciones = []
        // for (let index = 0; index < 3; index++) {
        //     const index = Math.floor(Math.random() * productos.length)
        //     recomendaciones.push(productos[index])
        // }
        // return res.render('products/productDetail', { product, recomendaciones })
}}

module.exports = adminProducts