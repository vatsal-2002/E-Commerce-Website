const mongoose = require("mongoose");

const petFoodSchema = new mongoose.Schema({
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

const PetFood = mongoose.model("PetFood", petFoodSchema);

module.exports = PetFood;
