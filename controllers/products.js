// require express
const express = require("express");
// set up router
const router = express.Router();
// internal modules (database)
const db = require("../models");

// Rest Routes
/*
 * Index - GET - /authors  - Presentational - respond with all authors
 * New - GET - /authors/new  - Presentational Form - a page with a form to create a new author
 * Show - GET - /authors/:id  - Presentational - respond with specific author by id
 * Create - Post - /authors  - Functional - recieve data from new route to create a author
 * Edit - GET - /authors/:id/edit  - Presentational Form - respond with a form prefilled with author data
 * Update - PUT - /authors/:id  - Functional - recieve data from edit to update a specific author
 * Delete - DELETE - /authors/:id  - Functional - Deletes author by id from request
 */


// Index Best Selling Coffee Route
router.get("/bestsellers", function (request, response) {
	db.Product.find({}, function (err, allProducts) {
		if (err) return response.send(err);

		const context = { products: allProducts };

		response.render("products/index", context);
	});
});




//Show Selected Coffee Route
 router.get("/:id", function(request, response) {
        db.Product.findById(request.params.id)
        .populate("product");
        db.Product.findById()
        .exec(function (err, foundArticle) {
        if (err) return response.send(err);

        const context = { product: foundProduct };
        response.render("products/show", context);

    });
 });

 





// exports
module.exports = router;