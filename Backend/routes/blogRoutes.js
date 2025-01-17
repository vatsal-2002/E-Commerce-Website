const express = require("express");
const {
  createBlogPost,
  getAllBlogs,
} = require("../controllers/blogController");
const upload = require("../middleware/blogUpload");
const router = express.Router();

router.post("/blogs", upload.single("image"), createBlogPost);

router.get("/blogs", getAllBlogs);

module.exports = router;
