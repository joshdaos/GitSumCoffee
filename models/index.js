const mongoose = require("mongoose");
//require mongoose

//connecting mongodb
const dbUrl = "mongodb://localhost:27017/blogdb";

// connecting mongoose
mongoose
	.connect(dbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(function () {
		console.log("MongoDB connected! ");
	})
	.catch(function (err) {
		console.log("MongoDB error.. ");
		console.log(err);
	});

mongoose.connection.on("disconnected", function () {
	console.log("MongoDB disconnected.. ");
});




// exporting
module.exports = {
    User: require("./User"),
	Products: require("./Products"),
};