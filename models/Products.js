const mongoose = require("mongoose");


const productsSchema = new mongoose.Schema(
    {
        name: {type: String, require: true},
        image: {type: URL, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
    }
);

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;