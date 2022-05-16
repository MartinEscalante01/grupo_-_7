const path = '\\JSON\\products.json';
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

    create:(req,res) =>{
        const body = req.body;
        actions.path = path;
        const response = actions.create(body);
        return res.render('products/productDetail')
        
    }
}

module.exports = controller;