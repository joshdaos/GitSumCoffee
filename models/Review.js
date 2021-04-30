const mongoose = require("mongoose");
// require mongoose

// review schema

const reviewSchema = new mongoose.Schema(
    {
        review: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    },
    {
        timestamp: true
    }
);

//  created a model with a schema for use in the rest of application
const Review = mongoose.model("Review", reviewSchema);

// exports Review file to be used in rest of application
module.exports = Review;