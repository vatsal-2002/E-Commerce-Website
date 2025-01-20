const mongoose = require("mongoose");

const dairyBreadEggsSchema = new mongoose.Schema({
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

const DairyBreadEggs = mongoose.model("DairyBreadEggs", dairyBreadEggsSchema);

module.exports = DairyBreadEggs;
