var mongoose = require('mongoose');

var GoodsSchema = mongoose.Schema({
	name: String,
	price: Number,
	imgSrc: String,
});

module.exports = mongoose.model('Goods', GoodsSchema);