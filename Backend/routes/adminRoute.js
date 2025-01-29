const express = require("express");
const { loginUser, changePassword } = require("../controllers/adminController");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/login", loginUser);

router.get("/admin/dashboard", authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: "Welcome to the admin dashboard" });
});

router.post(
  "/change-password",
  authMiddleware,
  adminMiddleware,
  changePassword
);

module.exports = router;
