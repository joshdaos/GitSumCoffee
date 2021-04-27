// require express
const express = require("express");
// set up router
const router = express.Router();
// require bcrypt
const bcrypt = require("bcryptjs");
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

// index route
router.get("/signup", function (request, response){
    response.render("auth/signup");
});






// exports
module.exports = router;