const mongoose = require("mongoose");

const snacksSchema = new mongoose.Schema({
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
  isNew: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Snacks", snacksSchema);
module.exports = Product;
