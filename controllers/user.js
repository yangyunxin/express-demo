var User = require('../models/user');

module.exports = {
	register: function (req, res, next) {
		//post的name
		var uname = req.body.uname;

		User.findOne({ name: uname }, function (err, doc) {
			if (err) return next(err);
			console.log(doc);
			//如果存在
			if (doc) {
				res.json("用户名已存在");
			} else {
				User.create({
					name: uname,
					password: req.body.password,
				}, function () {
					if (err) return next(err);
					res.json("success");
				})
			}
		});
	},
	login: function (req, res, next) {
		var uname = req.body.uname;

		User.findOne({name: uname}, function (err, doc) {
			if (err) return next(err);

			if (doc) {
				req.session.user = uname;
				console.log(req.session.user)
				res.json("success");
			} else {
				res.json("fail");
			}
		})
	}
}