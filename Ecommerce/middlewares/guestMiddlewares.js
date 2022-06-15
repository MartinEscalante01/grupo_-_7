function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect('/users/profile'); // DEBERIA IR /users/profile
	}
	next();
}

module.exports = guestMiddleware;