const ColdDrinksJuices = require("../models/adminColdDrinksJuices");

// Create a new Cold Drink or Juice item
const createItem = async (req, res) => {
  try {
    const { title, weight, price } = req.body;
    const image = req.file.path;

    const newItem = new ColdDrinksJuices({
      title,
      weight,
      price,
      image,
    });

    await newItem.save();
    res
      .status(201)
      .json({ message: "Cold Drink/Juice item added successfully", newItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all Cold Drink/Juice items
const getAllItems = async (req, res) => {
  try {
    const items = await ColdDrinksJuices.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Cold Drink/Juice item by ID
const getItemById = async (req, res) => {
  try {
    const item = await ColdDrinksJuices.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a Cold Drink/Juice item by ID
const updateItem = async (req, res) => {
  try {
    const { title, weight, price } = req.body;
    const updatedData = {
      title,
      weight,
      price,
      image: req.file ? req.file.path : undefined,
    };

    const updatedItem = await ColdDrinksJuices.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({
      message: "Cold Drink/Juice item updated successfully",
      updatedItem,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a Cold Drink/Juice item by ID
const deleteItem = async (req, res) => {
  try {
    const deletedItem = await ColdDrinksJuices.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res
      .status(200)
      .json({ message: "Cold Drink/Juice item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
