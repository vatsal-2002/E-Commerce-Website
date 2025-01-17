import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { FaAngleRight, FaCaretRight } from "react-icons/fa";
import Footer from "./Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8">
        <nav className="flex text-[#1D1D1D] font-bold text-sm mb-4 ml-0  items-center flex-wrap md:flex-nowrap">
          <span>Home</span>
          <FaCaretRight />
          <span>Blogs</span>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="border rounded-lg border-black py-4 px-4"
            >
              <img
                src={`http://localhost:5000/${blog.image}`}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-gray-500">
                  {blog.date} | {blog.comments}
                </div>
                <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
                <Link
                  to={`/blogs/${blog._id}`}
                  state={blog}
                  className="text-[#347758] text-sm font-medium mt-4 flex items-center"
                >
                  Read More <FaAngleRight className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
