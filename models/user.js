var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true},
	password: {type: String, required: true},
	gender: {type: Boolean, default: true}
});

module.exports = mongoose.model('User', UserSchema);