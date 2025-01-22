const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");
const upload = require("../config/multer");
const {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controllers/adminColdDrinksJuicesController");

const router = express.Router();

// Post a new Cold Drink/Juice item (admin only)
router.post(
  "/admincreateColdDrinkJuice",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createItem
);

// Get all Cold Drink/Juice items
router.get("/adminallColdDrinksJuices", getAllItems);

// Get a Cold Drink/Juice item by ID
router.get("/admingetoneColdDrinkJuice/:id", getItemById);

// Update a Cold Drink/Juice item by ID (admin only)
router.put(
  "/adminupdateColdDrinkJuice/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  updateItem
);

// Delete a Cold Drink/Juice item by ID (admin only)
router.delete(
  "/admindeleteColdDrinkJuice/:id",
  authMiddleware,
  adminMiddleware,
  deleteItem
);

module.exports = router;
