const controller = {
    productCart : (req,res) => {
        return res.render('products/productCart')
    },
    productDetail : (req,res) => {
        return res.render('products/productDetail')
    },
    productCreate : (req,res) => {
        return res.render('products/productCreate')
    },
    productEdit : (req,res) => {
        return res.render('products/productEdit')
    },
}

module.exports = controller;