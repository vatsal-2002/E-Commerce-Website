const Fruit = require("../models/fruitandvegitable");

// Create a new fruit
const createFruit = async (req, res) => {
  try {
    const { title, weight, price } = req.body;
    const image = req.file.path; 

    const newFruit = new Fruit({
      title,
      weight,
      price,
      image,
    });

    await newFruit.save();
    res.status(201).json({ message: "Fruit added successfully", newFruit });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all fruits
const getAllFruits = async (req, res) => {
  try {
    const fruits = await Fruit.find();
    res.status(200).json(fruits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get fruit by ID
const getFruitById = async (req, res) => {
  try {
    const fruit = await Fruit.findById(req.params.id);
    if (!fruit) {
      return res.status(404).json({ error: "Fruit not found" });
    }

    res.status(200).json(fruit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a fruit by ID
const updateFruit = async (req, res) => {
  try {
    const { title, weight, price } = req.body;
    const updatedData = {
      title,
      weight,
      price,
      image: req.file ? req.file.path : undefined,
    };

    const updatedFruit = await Fruit.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    if (!updatedFruit) {
      return res.status(404).json({ error: "Fruit not found" });
    }

    res
      .status(200)
      .json({ message: "Fruit updated successfully", updatedFruit });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a fruit by ID
const deleteFruit = async (req, res) => {
  try {
    const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
    if (!deletedFruit) {
      return res.status(404).json({ error: "Fruit not found" });
    }

    res.status(200).json({ message: "Fruit deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createFruit,
  getAllFruits,
  getFruitById,
  updateFruit,
  deleteFruit,
};
