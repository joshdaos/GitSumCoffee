//external modules//
const express = require("express");

//internal modules// 
const db = require("./models");
const controllers = require("./controllers");

//instanced modules//
const app = express();

//configuration var//

const PORT = 7000;

//app config//

app.set("view engine", "ejs");

//middleware//
app.use(express.urlencoded({ extended: true }));

// app.use(methodOverride("_method"));

//controllers//
// users contoller 
app.use("/products", controllers.products);
app.use("/auth", controllers.auth);


//server bind//
app.listen(PORT, function () {
    console.log(`Loading server from PORT ${PORT}!`)
});

// enable app
module.exports = app;