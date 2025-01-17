const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/admin");

const createAdmin = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    if (!admin) {
      const password = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10); 
      const newAdmin = new User({
        name: "vatsal", 
        email: process.env.ADMIN_EMAIL,  
        role: "admin",
        password,  
      });
      await newAdmin.save();
      console.log("Admin created successfully.");
    } else {
      console.log("Admin already exists.");
    }
  } catch (err) {
    console.error("Error creating admin:", err.message);
  }
};

createAdmin();

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ error: "Access denied. Admins only." });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { loginUser };
