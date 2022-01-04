const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('user', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if(!validator.isEmail(value)) {
				throw new Error('Wrong email.');
			}
		}
	},
	password: {
		type: String,
		required: true,
		trim: true,
	}
});

module.exports = User;