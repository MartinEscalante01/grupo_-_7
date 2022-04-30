const controller = {
    productCart : (req,res) => {
        return res.render('products/productCart')
    },
    productDetail : (req,res) => {
        return res.render('products/productDetail')
    }
}

module.exports = controller;