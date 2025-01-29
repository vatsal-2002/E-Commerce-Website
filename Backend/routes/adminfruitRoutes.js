const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");
const upload = require("../config/multer");
const {
  createFruit,
  getAllFruits,
  getFruitById,
  updateFruit,
  deleteFruit,
} = require("../controllers/fruitandvegitablecontroller");

const router = express.Router();

router.post(
  "/createadminfruit",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createFruit
);

router.get("/adminfruit", getAllFruits);

router.get("/adminfruit/:id", getFruitById);

router.put(
  "/adminfruit/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  updateFruit
);

router.delete("/admindeletefruit/:id", authMiddleware, adminMiddleware, deleteFruit);

module.exports = router;
