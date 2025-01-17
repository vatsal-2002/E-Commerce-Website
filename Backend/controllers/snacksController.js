const Snack = require("../models/snacks");

const createSnacksProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    const { name, weight, price, isNew } = req.body;

    const imgPath = req.file.path;

    const newProduct = new Snack({
      name,
      image: imgPath,
      weight,
      price,
      isNew: isNew || false,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSnacksProducts = async (req, res) => {
  try {
    const Snacks = await Snack.find();

    const updatedProducts = Snacks.map((Snack) => {
      Snack.image = `${Snack.image.split("\\").join("/")}`;
      return Snack;
    });

    res.status(200).json(updatedProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createSnacksProduct, getSnacksProducts };
