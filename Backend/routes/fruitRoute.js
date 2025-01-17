const express = require("express");
const {
  createFruitProduct,
  getFruitProduct,
} = require("../controllers/fruitController");
const upload = require("../middleware/fruitUpload");
const router = express.Router();
router.post("/fruit", upload.single("image"), createFruitProduct);

router.get("/fruit", getFruitProduct);

module.exports = router;
