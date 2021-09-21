const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "What's the title?"],
        min: [3, "Title must be at least 3 characters long..."]
    },
    price: {
        type: Number,
        required: [true, "How much does it cost?"]
    },
    desc: {
        type: String,
        required: [true, "Give a description!"]
    }
})

const Product = mongoose.model("Product", ProductSchema)


module.exports = Product;