const express = require("express");
const {
    createSnacksProduct,
    getSnacksProducts,
} = require("../controllers/snacksController");
const upload = require("../middleware/snacksUpload");
const router = express.Router();


router.post("/snack", upload.single("image"), createSnacksProduct);

router.get("/snack", getSnacksProducts);

module.exports = router;
