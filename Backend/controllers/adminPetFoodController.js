const PetFood = require("../models/adminPetFood");

// Create a new PetFood item
const createItem = async (req, res) => {
  try {
    const { title, weight, price } = req.body;
    const image = req.file.path;

    const newItem = new PetFood({
      title,
      weight,
      price,
      image,
    });

    await newItem.save();
    res
      .status(201)
      .json({ message: "PetFood item added successfully", newItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all PetFood items
const getAllItems = async (req, res) => {
  try {
    const items = await PetFood.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get PetFood item by ID
const getItemById = async (req, res) => {
  try {
    const item = await PetFood.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a PetFood item by ID
const updateItem = async (req, res) => {
  try {
    const { title, weight, price } = req.body;
    const updatedData = {
      title,
      weight,
      price,
      image: req.file ? req.file.path : undefined,
    };

    const updatedItem = await PetFood.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res
      .status(200)
      .json({ message: "PetFood item updated successfully", updatedItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a PetFood item by ID
const deleteItem = async (req, res) => {
  try {
    const deletedItem = await PetFood.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ message: "PetFood item deleted successfully" });
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
