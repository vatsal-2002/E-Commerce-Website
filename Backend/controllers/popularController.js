const Product = require("../models/popular"); 

const createPopularProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    const { name, weight, price, isOnSale, isNew } = req.body;

    const imgPath = req.file.path;

    const newProduct = new Product({
      name,
      image: imgPath,
      weight,
      price,
      isOnSale: isOnSale || false,
      isNew: isNew || false,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPopularProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const updatedProducts = products.map((product) => {
      product.image = `${product.image.split("\\").join("/")}`;
      return product;
    });

    res.status(200).json(updatedProducts); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createPopularProduct, getPopularProducts };
