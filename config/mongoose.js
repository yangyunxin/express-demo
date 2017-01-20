var mongoose = require('mongoose');

module.exports = function () {
	mongoose.Promise = global.Promise;
	var db = mongoose.connect("mongodb://localhost/goods");
	
	return db;
}