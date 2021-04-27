// require express
const express = require("express");
// set up router
const router = express.Router();
// require bcrypt
const bcrypt = require("bcryptjs");
// internal modules (database)
const db = require("../models");
const { response } = require("express");
const { request } = require("../server");

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

router.post("/signup", async function(request,response){
    try {
    // step check if user exists 
    const foundUser = await db.User.findOne({email: request.body.email});
    // if so redirect to login 
    if(foundUser){
      return response.redirect("/login");
    }
    // if not create user and redirect to login
  
      // salt will created a more complicated hash
    const salt = await bcrypt.genSalt(10);
      // hash will convert our password into something more secure
      // test1234 => "$2a$10$5vR9VhGpkARz6EFPdkuNQ.aZNRGUgSCNSKEb9Xp1IKzrfxYETlkB2"
    const hash = await bcrypt.hash(request.body.password, salt);
    
    request.body.password = hash;
  
      // create user in database
    const newUser = await db.User.create(req.body);
    
    return response.redirect("/login");
  
    } catch(err){
      console.log(err);
      return response.send(err);
    }
});


router.get("/login",function(request,response){
    response.render("auth/login");
});
  
  router.post("/login", async function(request,response){
    response.send(request.body);
});




// exports
module.exports = router;