var Goods = require('../models/goods');

module.exports = {
	list: function (req, res, next) {
		Goods.find({}, function (err, docs) {
			if (err) return next(err);

			res.render('goods', {
				title: "商品列表",
				goods: docs
			});
		})
	},
	add: function (req, res, next) {
		Goods.create({
			name: req.body.name,
			price: req.body.price,
			imgSrc: req.body.imgSrc
		}, function (err, doc) {
			if (err) return next(err);

			if (doc) {
				res.json('success');
			} else {
				res.json('fail');
			}
		})
	}
}