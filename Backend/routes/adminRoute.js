const express = require("express");
const { loginUser } = require("../controllers/adminController");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/login", loginUser);

router.get("/admin/dashboard", authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: "Welcome to the admin dashboard" });
});

module.exports = router;
