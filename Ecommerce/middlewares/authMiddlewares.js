function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('/'); //DEBERIA IR /users/login
	}
	next();
}

module.exports = authMiddleware;