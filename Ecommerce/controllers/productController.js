const controller = {
    register : (req,res) =>{
        return res.render('register')
    },
    productCart : (req,res) => {
        return res.render('productCart')
    }

}

module.exports = controller;