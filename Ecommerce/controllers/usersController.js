const controller = {
    index : function(req,res) {
        return res.render('/users/userEdit')
    },
    login : function(req,res) {
        return res.render('users/login')
    },
    register : function(req,res) {
        return res.render('users/register')
    },
    list : function(req,res) {
        return res.render('users/list')
    },
    search : function(req,res) {
        return res.render('users/search')
    },
    userCreate : (req,res) => {
        res.render('users/userCreate')
    },
    edit : function(req,res) {
        let idUser = req.params.idUser
        let users = [
            {id: 1, name: 'Juan'}, 
            {id: 2, name: 'Luis'}
        ];
        let userToEdit = users[idUser];
        res.render('/users/userEdit', {userToEdit: userToEdit});
    },
    processLogin: function(req,res){
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let usersJSON = fs.readf
        }else{ res.render()
            return res.render('users/login', {errors: errors.errors});
        }
    }
}

module.exports = controller;

