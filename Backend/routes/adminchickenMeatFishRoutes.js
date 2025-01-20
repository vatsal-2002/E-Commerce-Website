const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");
const upload = require("../config/multer");
const {
  createItem,
  updateItem,
} = require("../controllers/chickenMeatFishController");

const router = express.Router();

router.post(
  "/admincreateMeat",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createItem
);

router.put(
  "/adminupdateMeat/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  updateItem
);

module.exports = router;
