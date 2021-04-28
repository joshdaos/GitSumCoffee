//external modules//
const express = require("express");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");


//internal modules// 
const db = require("./models");

const controllers = require("./controllers");

//instanced modules//
const app = express();

//configuration var//
require('dotenv').config();
//const PORT = process.env.PORT || 7000;
const PORT = 7000;

//app config//
app.set("view engine", "ejs");

//middleware//
// adding urlencoded
app.use(express.urlencoded({ extended: true }));
// adding method-override
app.use(methodOverride("_method"));
// allows us to have a public folder with styles->main.css
app.use(express.static(__dirname + "/public"));
// adding session
app.use(session({
	store: MongoStore.create({ mongoUrl: process.env.MONGO_URI}),
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7 * 2 
	}
}));
// adding credetnitals to ejs
app.use(function(request,response,next){
	app.locals.user = request.session.currentUser;
	next();
});

//adding authRequired
const authRequired = function(request,response,next){
	if(request.session.currentUser){
		return next();
	}

	return response.redirect("/login");
};

//controllers//
app.use("/products", controllers.products);
app.use("/", controllers.auth);

//Home page route
app.get("/", function (request, response){
    response.render("Home");
});

//Admin route

app.get("/admin", function (request, response) {
	db.Product.find({}, function (err, allProducts) {
		if (err) return response.send(err);

		const context = { products: allProducts };

		response.render("products/admin", context);
	});
});



	
	


//server bind//
app.listen(PORT, function () {
    console.log(`Loading server from PORT ${PORT}!`)
});

// enable app
module.exports = app;