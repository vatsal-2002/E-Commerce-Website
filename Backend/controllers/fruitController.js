const Fruit = require("../models/fruit"); 

const createFruitProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    const { name, weight, price } = req.body;

    const imgPath = req.file.path;

    const newProduct = new Fruit({
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

const getFruitProduct = async (req, res) => {
  try {
    const Fruits = await Fruit.find();

    const updatedProducts = Fruits.map((Fruit) => {
        Fruit.image = `${Fruit.image.split("\\").join("/")}`;
      return Fruit;
    });

    res.status(200).json(updatedProducts); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createFruitProduct, getFruitProduct };
