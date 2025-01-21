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
} = require("../controllers/adminPetFoodController");

const router = express.Router();

// Post a new PetFood item (admin only)
router.post(
  "/admincreatePetFood",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createItem
);

// Get all PetFood items
router.get("/adminallPetFood", getAllItems);

// Get a PetFood item by ID
router.get("/admingetonePetFood/:id", getItemById);

// Update a PetFood item by ID (admin only)
router.put(
  "/adminupdatePetFood/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  updateItem
);

// Delete a PetFood item by ID (admin only)
router.delete(
  "/admindeletePetFood/:id",
  authMiddleware,
  adminMiddleware,
  deleteItem
);

module.exports = router;
