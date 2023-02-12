const authOnlyMiddleware = require("../middlewares/authOnly");
const Bond = require("../models/Bond");
const Order = require("../models/Order");
const router = require("express").Router();

router.get("/", async (req, res) => {
	res.json(await Bond.find());
});

router.get("/my-count/:id", authOnlyMiddleware([]), async (req, res) => {
	const orders = await Order.find({
		user: req.auth.user,
		bond: req.params.id,
		completed: true,
	});

	let count = 0;
	orders.forEach((order) => {
		if (order.type == "buy") count++;
		else count--;
	});
	res.json({ count });
});

module.exports = router;
