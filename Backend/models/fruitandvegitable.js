const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
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

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
