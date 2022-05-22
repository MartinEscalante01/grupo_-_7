const controller = {
    index: (req,res) =>{
        return res.render('/users/userEdit')
    },
    login : (req,res) => {
        return res.render('users/login')
    },
    register : (req,res) => {
        return res.render('users/register')
    },
    list : (req,res) => {
        return res.render('users/list')
    },
    search : (req,res) => {
        return res.render('users/search')
    },
    edit : (req,res) => {
        let idUser = req.params.idUser
        let users = [
            {id: 1, name: 'Juan'}, 
            {id: 2, name: 'Luis'}
        ];
        let userToEdit = users[idUser];
        res.render('/users/userEdit', {userToEdit: userToEdit});
    },
}

module.exports = controller;

