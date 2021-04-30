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
        .exec(function (err, foundProduct) {

        if (err) return response.send(err);

        const context = { product: foundProduct };
        response.render("products/show", context);
    });
});

//===== Admin Routes =====//
// needs a delete route to remove products
router.delete("/:id", function (req, res) {
	const id = req.params.id;
	// mongoose .delete (id, function (err, data))
	db.Product.findByIdAndDelete(id, function (err, deletedProduct) {
		if (err) {
			console.log(err);
			return res.send("Server Error :(");
		} else {
			console.log(deletedProduct);
			return res.redirect("/admin");
		}
	});
});

//===== Cart Routes =====//

// Edit Route
// trying to edit my cart
router.put("/:productId/cart", async function(request,response){
    try {
    await db.User.findByIdAndUpdate(
    request.session.currentUser.id, 
    { $push: { cart: request.params.productId } }
);
response.redirect("/cart");
    } catch (err){
        console.log(err);
    }
});

// Delete Route
// removing an item from cart (array)

router.delete("/:productId/cart", async function(request,response){
    try {
    await db.User.findByIdAndUpdate(
    request.session.currentUser.id, 
    { $pull: { cart: request.params.productId } }
);
response.redirect("/cart");
    } catch (err){
        console.log(err);
    }
});




// exports
module.exports = router;