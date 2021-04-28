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

router.post("/signup", async function(request,response){
    try {
    // step check if user exists 
    const foundUser = await db.User.findOne({email: request.body.email});
    // if so redirect to login 
    if(foundUser){
      return response.redirect("/login");
    }
    // if not create user and redirect to login
  
      // hashes out password
    const salt = await bcrypt.genSalt(10);
     
    const hash = await bcrypt.hash(request.body.password, salt);
    
    request.body.password = hash;
  
      // create user in database
    const newUser = await db.User.create(request.body);
    
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
    try {
     // check if the user exists 
     const foundUser = await db.User.findOne({email: request.body.email});
     // if not
       // redirect to register
    if(!foundUser) return response.redirect("/signup");
  
    // if the user exists
      // validate the user if passwords match -> login 
    const match = await bcrypt.compare(request.body.password, foundUser.password);
  
    // if not match send error
    if(!match) return response.send("password invalid");
  
    // if match create the session and redirect to home\
    request.session.currentUser = {
      id: foundUser._id,
    }
    
    return response.redirect("/products/bestsellers");
  
    } catch(err) {
      console.log(err);
      response.send(err);
    }
});

//Continue as Guest Route
router.get("/guest", function (request, response) {
    
    response.redirect("/products/bestsellers");
});






// exports
module.exports = router;