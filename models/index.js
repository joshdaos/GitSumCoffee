const mongoose = require("mongoose");
require('dotenv').config();
const dbURL = process.env.MONGO_URI;


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
	Product: require("./Product"),
};