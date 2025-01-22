const mongoose = require("mongoose");

const coldDrinksJuicesSchema = new mongoose.Schema({
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

const ColdDrinksJuices = mongoose.model(
  "ColdDrinksJuices",
  coldDrinksJuicesSchema
);

module.exports = ColdDrinksJuices;
