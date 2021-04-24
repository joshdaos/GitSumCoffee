//external modules//
const express = require("express");
// const { allCereal } = require("./models");

//internal modules// 
// const db = require("./models");
// const controllers = require("./controllers");
//instanced modules//
const app = express();

//configuration var//

const PORT = 7000;

//app config//

app.set("view engine", "ejs");

//middleware//
app.use(express.urlencoded({ extended: true }));

//controllers//


// home route
app.get("/", function (request, response){
    response.render("Home");
});



//server bind//
app.listen(PORT, function () {
    console.log(`Loading server from PORT ${PORT}!`)
});

// enable app
module.exports = app;