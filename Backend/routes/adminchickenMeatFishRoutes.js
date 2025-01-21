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
} = require("../controllers/chickenMeatFishController");

const router = express.Router();

router.post(
  "/admincreateMeat",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createItem
);

router.get("/adminallMeat", getAllItems);

router.get("/admingetoneMeat/:id", getItemById);

router.put(
  "/adminupdateMeat/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  updateItem
);

router.delete(
  "/admindeleteMeat/:id",
  authMiddleware,
  adminMiddleware,
  deleteItem
);

module.exports = router;
