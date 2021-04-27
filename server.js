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