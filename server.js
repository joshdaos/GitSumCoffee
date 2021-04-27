//external modules//
const express = require("express");
// app.use(methodOverride("_method"));
//const session = require("express-session");
//const MongoStore = require("connect-mongo");

//internal modules// 
// const db = require("./models");
const controllers = require("./controllers");

//instanced modules//
const app = express();

//configuration var//
//require('dotenv').config();
//const PORT = process.env.PORT || 7000;
const PORT = 7000;

//app config//

app.set("view engine", "ejs");

//middleware//
app.use(express.urlencoded({ extended: true }));

/*
/ setup session middleware 
// session(config object)
app.use(session({
	// where to store the sessions in mongodb
	store: MongoStore.create({ mongoUrl: process.env.MONGO_URI}),
	// secret key is used to sign every cookie to say its is valid
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	// configure the experation of the cookie
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // two weeks
	}
}));

// logger middleware
// all controller functions take in req,res,next
app.use(function(req,res,next){
	console.log(`${req.method} - ${req.url}`);
	console.log(req.session);
	// we use next in routes to tell express to move on to the next route in order
	next();
});

// add user credientials to ejs files
app.use(function(req,res,next){
	app.locals.user = req.session.currentUser;
	next();
});

// authRequired middleware
const authRequired = function(req,res,next){
	if(req.session.currentUser){
		return next();
	}

	return res.redirect("/login");
};

*/

//controllers//
app.use("/products", controllers.products);
app.use("/auth", controllers.auth);

//Index route
app.get("/", function (request, response){
    response.render("Home");
});


//server bind//
app.listen(PORT, function () {
    console.log(`Loading server from PORT ${PORT}!`)
});

// enable app
module.exports = app;