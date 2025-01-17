const express = require("express");
const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");
const upload = require("../middleware/upload");
const router = express.Router();

router.post("/categories", upload.single("img"), createCategory);
router.get("/categories", getCategories);

module.exports = router;
