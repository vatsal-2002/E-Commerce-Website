const User = require("../models/user");
const sendEmail = require("../services/emailService");

const createUser = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newUser = new User({
      name,
      email,
      message,
    });

    const savedUser = await newUser.save();

    const emailSubject = "Thank you for your inquiry";
    const emailText = `Dear ${name},\n\nThank you for your inquiry. We have received your message and will get back to you shortly.\n\nYour message:\n"${message}"\n\nBest regards,\nFood Shopping Team`;

    try {
      await sendEmail(email, emailSubject, emailText);
      console.log("Email sent successfully.");
    } catch (emailError) {
      console.log("Failed to send email:", emailError.message);
      return res.status(500).json({ error: "Failed to send email" });
    }

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
