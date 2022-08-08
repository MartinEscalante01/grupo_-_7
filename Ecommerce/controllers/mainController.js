const path = '\\JSON\\products.json';
const productos = require('../database/JSON/products.json')

const controller = {
    home : (req,res) => {
        const product = productos.find(producto => producto.id == req.params.id)
        const recomendaciones = []
        for (let index = 0; index < 4; index++) {
            const index =Math.floor(Math.random() * productos.length)
            recomendaciones.push(productos[index])
        }
        return res.render('products/index', {  product,recomendaciones  })
    },

    notFound : (req,res) => {
        return res.status(404).render('more/notFound')
    },

    nosotros : (req,res) => {
        return res.render('more/us')
    },

    terms : (req,res) => {
        return res.render('more/terms')
    }
}

module.exports = controller;