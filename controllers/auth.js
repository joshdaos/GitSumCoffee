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

router.post("/signup", async function(req,res){
    res.send(req.body);
  });
  
  router.get("/login",function(req,res){
    res.render("auth/login");
  });
  
  router.post("/login", async function(req,res){
    res.send(req.body);
  });




// exports
module.exports = router;