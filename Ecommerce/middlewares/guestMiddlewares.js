function guestMiddlewares  (req, res, next){
    if(req.session.usuarioLogueado == undefined){
        next();
    }else{
        res.send('Esta página es solo para invitados');
    }
}

module.exports = guestMiddlewares;