const BreakFast = require("../models/breakfast");

const createBreakfastProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    const { name, weight, price } = req.body;

    const imgPath = req.file.path;

    const newProduct = new BreakFast({
      name,
      image: imgPath,
      weight,
      price,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBreakfastProduct = async (req, res) => {
  try {
    const BreakFasts = await BreakFast.find();

    const updatedProducts = BreakFasts.map((BreakFast) => {
      BreakFast.image = `${BreakFast.image.split("\\").join("/")}`;
      return BreakFast;
    });

    res.status(200).json(updatedProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createBreakfastProduct, getBreakfastProduct };
