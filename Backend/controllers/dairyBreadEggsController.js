const DairyBreadEggs = require("../models/dairyBreadEggs");

// Create a new Dairy, Bread or Egg item
const createItem = async (req, res) => {
  try {
    const { title, weight, price } = req.body;
    const image = req.file.path;

    const newItem = new DairyBreadEggs({
      title,
      weight,
      price,
      image,
    });

    await newItem.save();
    res.status(201).json({ message: "Item added successfully", newItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all Dairy, Bread & Eggs items
const getAllItems = async (req, res) => {
  try {
    const items = await DairyBreadEggs.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get item by ID
const getItemById = async (req, res) => {
  try {
    const item = await DairyBreadEggs.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a Dairy, Bread & Eggs item by ID
const updateItem = async (req, res) => {
  try {
    const { title, weight, price } = req.body;
    const updatedData = {
      title,
      weight,
      price,
      image: req.file ? req.file.path : undefined,
    };

    const updatedItem = await DairyBreadEggs.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ message: "Item updated successfully", updatedItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a Dairy, Bread & Eggs item by ID
const deleteItem = async (req, res) => {
  try {
    const deletedItem = await DairyBreadEggs.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully" });
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
