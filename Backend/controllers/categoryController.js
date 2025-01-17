const Category = require("../models/category");

const createCategory = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { title } = req.body;

    const imgPath = req.file.path;

    const newCategory = new Category({
      title,
      img: imgPath,
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    const updatedCategories = categories.map((category) => {
      category.img = `${category.img.split("\\").join("/")}`;
      return category;
    });

    res.status(200).json(updatedCategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createCategory, getCategories };
