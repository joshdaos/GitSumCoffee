const mongoose = require("mongoose");

const dbURL = "mongodb://localhost:27017/blogdb";

mongoose
    .connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

module.exports = {
    Products: require("./Products")
};