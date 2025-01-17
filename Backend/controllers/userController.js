const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newUser = new User({
      name,
      email,
      message,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUser, getUsers };
