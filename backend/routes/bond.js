const Bond = require("../models/Bond");

const router = require("express").Router();

router.get("/", async (req, res) => {
	res.json(await Bond.find());
});

module.exports = router;
