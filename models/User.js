const mongoose = require("mongoose");
// require mongoose

// user schema

const userSchema = new mongoose.Schema(
    {
        email: {type: String, required: [true, "Please Provide An Email"], unique: true},
        password: {type: String, required: [true, "Please Provide A Password"], unique: true },
    },
    {
        timestamp: true
    }
);

//  created a model with a schema for use in the rest of application
const User = mongoose.model("User", userSchema);

// exports User file to be used in rest of application
module.exports = User;