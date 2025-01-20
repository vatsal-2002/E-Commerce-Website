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
} = require("../controllers/dairyBreadEggsController");

const router = express.Router();

router.post(
  "/admincreateitem",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createItem
);

router.get("/adminallitem", authMiddleware, getAllItems);

router.get("/admingetoneitem/:id", authMiddleware, getItemById);

router.put(
  "/adminupdateitem/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  updateItem
);

router.delete("/admindeleteitem/:id", authMiddleware, adminMiddleware, deleteItem);

module.exports = router;
