const Bond = require("../models/Bond");
const Order = require("../models/Order");
const User = require("../models/User");

async function resolveOrder(order, price, user) {
	const orderUser = await User.findById(order.user);
	const orderBond = await Bond.findById(order.bond);

	if (order.type == "buy") {
		orderUser.balance -= order.price;
	} else {
		orderUser.balance += order.price;
	}

	orderBond.price.push(price);

	order.completed = true;
	order.price = price;

	const newOrder = new Order({
		bond: orderBond,
		user: user,
		type: order.type == "buy" ? "sell" : "buy",
		price: price,
		completed: true,
	});

	await order.save();
	await newOrder.save();
	await orderUser.save();
	await orderBond.save();
}

module.exports = resolveOrder;
