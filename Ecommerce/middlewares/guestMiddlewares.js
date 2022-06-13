function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect('/'); // DEBERIA IR /user/profile
	}
	next();
}

module.exports = guestMiddleware;