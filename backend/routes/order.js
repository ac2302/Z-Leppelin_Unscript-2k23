const authOnlyMiddleware = require("../middlewares/authOnly");
const Bond = require("../models/Bond");
const Order = require("../models/Order");
const router = require("express").Router();

router.get("/", async (req, res) => {
	res.json(await Order.find());
});

router.get("/mine", authOnlyMiddleware([]), async (req, res) => {
	res.json(await Order.find({ user: req.auth.user }));
});

router.get("/mine/completed", authOnlyMiddleware([]), async (req, res) => {
	res.json(await Order.find({ user: req.auth.user, completed: true }));
});

module.exports = router;
