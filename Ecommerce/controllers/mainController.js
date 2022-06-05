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
    }
}

module.exports = controller;