const express = require("express");
const {
  createPopularProduct,
  getPopularProducts,
} = require("../controllers/popularController");
const upload = require("../middleware/popularUpload");
const router = express.Router();

router.post("/popular", upload.single("image"), createPopularProduct);

router.get("/popular", getPopularProducts);

module.exports = router;
