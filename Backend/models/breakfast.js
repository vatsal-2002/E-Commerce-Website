const mongoose = require("mongoose");

const BreakfastProduct = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("BreakfastProduct", BreakfastProduct);
module.exports = Product;
