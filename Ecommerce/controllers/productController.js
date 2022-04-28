const controller = {
    register : (req,res) =>{
        return res.render('register')
    },
    productCart : (req,res) => {
        return res.render('productCart')
    },
    productDetail : (req,res) => {
        return res.render('productDetail')
    }


}

module.exports = controller;