const Blog = require("../models/blogModel");

const createBlogPost = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    const { title, date, comments, description } = req.body;
    const imgPath = req.file.path;

    const newBlog = new Blog({
      title,
      image: imgPath,
      date,
      comments,
      description,
    });

    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    const updatedBlogs = blogs.map((blog) => {
      blog.image = `${blog.image.split("\\").join("/")}`;
      return blog;
    });

    res.status(200).json(updatedBlogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createBlogPost, getAllBlogs };
