const mongoose = require("mongoose");
const config = require("../config");

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: config.auth.roles.default,
			enum: config.auth.roles.list,
		},
		verified: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			required: true,
		},
		pan: {
			type: String,
			required: true,
		},
		panImg: {
			type: String,
			required: true,
		},
		balance: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
