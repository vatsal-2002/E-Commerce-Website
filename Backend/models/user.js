// models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Ensure only 'user' or 'admin' can be assigned
    default: "user", // Default to user role
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
