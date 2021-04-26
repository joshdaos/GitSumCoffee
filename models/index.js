const mongoose = require("mongoose");

const dbURL = "mongodb://localhost:27017/blogdb";

mongoose
    .connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
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
<<<<<<< HEAD
    Products: require("./Products"),
=======
	Product: require("./Product"),
>>>>>>> 1afd4e60b9d06d104c5acbaa5d37932b7a2503fd
};