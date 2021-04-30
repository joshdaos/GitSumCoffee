// require express
const express = require("express");
// set up router
const router = express.Router();
// internal modules (database)
const db = require("../models");

// Review routes

router.get("/review", function (request, response) {
	db.Product.find({}, function (err, allReviews) {
		if (err) return response.send(err);

		const context = { reviews: allReviews };

		response.render("review/review", context);
	});
});













// exports
module.exports = router;