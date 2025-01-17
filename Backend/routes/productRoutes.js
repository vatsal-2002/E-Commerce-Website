const express = require("express");
const {
  createProduct,
  getProducts,
} = require("../controllers/productController");
const upload = require("../middleware/Productupload"); 
const router = express.Router();

router.post("/products", upload.single("image"), createProduct);

router.get("/products", getProducts);

module.exports = router;
