const ChickenMeatFish = require("../models/chickenMeatFish");

// Create a new Chicken, Meat or Fish item
const createItem = async (req, res) => {
  try {
    const { title, weight, price } = req.body;
    const image = req.file.path;

    const newItem = new ChickenMeatFish({
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

// Update a Chicken, Meat & Fish item by ID
const updateItem = async (req, res) => {
  try {
    const { title, weight, price } = req.body;
    const updatedData = {
      title,
      weight,
      price,
      image: req.file ? req.file.path : undefined,
    };

    const updatedItem = await ChickenMeatFish.findByIdAndUpdate(
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

module.exports = {
  createItem,
  updateItem,
};
