const mongoose = require("mongoose");
const config = require("../config");

const bondSchema = mongoose.Schema(
	{
		symbol: {
			type: String,
		},
		series: {
			type: String,
		},
		bondType: {
			type: String,
		},
		couponRate: {
			type: Number,
		},
		MaturityDate: {
			type: Number,
		},
		creditRating: {
			type: String,
		},
		price: {
			type: [Number],
			default: [0, 0, 0, 0, 0, 0],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Bond", bondSchema);
