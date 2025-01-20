const mongoose = require("mongoose");

const chickenMeatFishSchema = new mongoose.Schema({
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

const ChickenMeatFish = mongoose.model(
  "ChickenMeatFish",
  chickenMeatFishSchema
);

module.exports = ChickenMeatFish;
