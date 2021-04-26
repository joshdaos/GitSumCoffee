// require express
const express = require("express");
// set up router
const router = express.Router();
// internal modules (database)
const db = require("../models");

/* RESTFUL ROUTES
URL // HTTP // ACTION
GET - index
GET - new
POST - create
GET - show 
GET - edit 
PATCH/PUT - update
DELETE - destroy
*/

//Page 2 for Best Sellers page
router.get("/bestsellers", function (request, response){
    response.render("products");
});

//router.get("/viewcoffee", function(request, response) {
//     response.render("")
// });





// exports
module.exports = router;