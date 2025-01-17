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
  "/adminfruit",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createFruit
);

router.get("/adminfruit", authMiddleware, getAllFruits);

router.get("/adminfruit/:id", authMiddleware, getFruitById);

router.put(
  "/adminfruit/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  updateFruit
);

router.delete("/adminfruit/:id", authMiddleware, adminMiddleware, deleteFruit);

module.exports = router;
