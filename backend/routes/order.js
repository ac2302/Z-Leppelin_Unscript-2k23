const authOnlyMiddleware = require("../middlewares/authOnly");
const Bond = require("../models/Bond");
const Order = require("../models/Order");
const resolveOrder = require("../utils/resolveOrder");
const router = require("express").Router();

router.get("/", async (req, res) => {
	res.json(await Order.find());
});

router.get("/mine", authOnlyMiddleware([]), async (req, res) => {
	res.json(await Order.find({ user: req.auth.user }).populate("bond"));
});

router.get("/mine/completed", authOnlyMiddleware([]), async (req, res) => {
	res.json(await Order.find({ user: req.auth.user, completed: true }));
});

router.get("/mine/pending", authOnlyMiddleware([]), async (req, res) => {
	res.json(await Order.find({ user: req.auth.user, completed: false }));
});

router.post("/", authOnlyMiddleware([]), async (req, res) => {
	let { bond, type, quantity, isFixed, price } = req.body;

	// checking for missing data
	if (!bond || !type || !quantity || isFixed == undefined)
		return res.status(400).json({
			msg: "missing bond, type, quantity or isFixed in request body",
		});

	const orderBond = await Bond.findById(bond);

	const lookingFor = type == "buy" ? "sell" : "buy";

	const orders = await Order.find({ bond, type: lookingFor });

	// using up all the market orders
	const marketOrders = orders.filter((order) => order.isFixed == false);
	while (quantity > 0 && marketOrders.length > 0) {
		quantity--;
		resolveOrder(
			marketOrders.shift(),
			price ? price : orderBond.price[orderBond.price - 1],
			req.auth.user
		);
	}

	// using up all the fixed orders that satisfy the conditions
	let fixedOrders = orders.filter((order) => order.isFixed == true);
	if (type == "buy") {
		fixedOrders = fixedOrders.sort((a, b) => a.price - b.price);
	} else {
		fixedOrders = fixedOrders.sort((a, b) => b.price - a.price);
	}
	while (quantity > 0 && orders.length > 0) {
		comparingOrder = fixedOrders.shift();
		if (price) {
			if (type == "buy" && price >= comparingOrder.price) {
				quantity--;
				resolveOrder(
					comparingOrder,
					comparingOrder.price,
					req.auth.user
				);
			} else if (type == "sell" && price <= comparingOrder.price) {
				quantity--;
				resolveOrder(comparingOrder, price, req.auth.user);
			}
		} else {
			quantity--;
			resolveOrder(comparingOrder, comparingOrder.price, req.auth.user);
		}
	}

	// if there are still orders left, create new orders

	const newOrders = Array(quantity)
		.fill(1)
		.map(
			() =>
				new Order({
					bond,
					type,
					isFixed,
					price,
					user: req.auth.user,
				})
		);

	// save the orders
	newOrders.forEach(async (order) => {
		await order.save();
	});

	res.send("ok");
});

module.exports = router;
