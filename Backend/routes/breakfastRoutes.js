const express = require("express");
const {
    createBreakfastProduct,
    getBreakfastProduct,
} = require("../controllers/breakfastController");
const upload = require("../middleware/breakfastUpload");
const router = express.Router();

router.post("/breakfast", upload.single("image"), createBreakfastProduct);

router.get("/breakfast", getBreakfastProduct);

module.exports = router;
