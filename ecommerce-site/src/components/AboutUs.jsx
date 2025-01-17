import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaCaretRight, FaAngleRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import aboutbg from "../assets/aboutus/aboutbg.png";
import about from "../assets/aboutus/about.svg";
import about1 from "../assets/aboutus/about1.svg";
import about2 from "../assets/aboutus/about2.svg";
import about3 from "../assets/aboutus/about3.svg";
import Footer from "./Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

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

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const features = [
    {
      img: about1,
      title: "Best Prices & Offers",
      description:
        "Ut fugit quam eaque aut odio placeat. Totam ea quibusdam nostrum voluptatem et labore. Qui rerum quia.",
    },
    {
      img: about2,
      title: "100% Satisfaction Guarantee",
      description:
        "Et consequatur nostrum sed. Necessitatibus sed impedit et. Porro quidem ipsa ut repellendus quod.",
    },
    {
      img: about3,
      title: "Easy Returns",
      description:
        "Est et dolorem ut est veritatis quaerat. Et eligendi ullam ratione. Suscipit quis at quas aperiam.",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center mt-8 py-20 px-10 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <div className="text-left max-w-lg text-center">
          <h2 className="text-[#FAB528] text-lg mb-2">About Us</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            We give you the lowest <br /> prices on all your grocery needs.
          </h1>
          <button className="mt-4 py-2 px-6 bg-[#FAB528] text-white font-semibold rounded-md hover:bg-green-500 hover:text-white hover:border-transparent">
            Explore Our Products
          </button>
        </div>

        <div className="absolute right-0 bottom-0 transform translate-x-10 translate-y-10"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8">
        <nav className="flex text-[#1D1D1D] font-bold text-sm mb-4 ml-0  items-center flex-wrap md:flex-nowrap">
          <span>Home</span>
          <FaCaretRight />
          <span>About Us</span>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8">
          <div className="md:w-1/2 flex justify-center h-full">
            <img
              src={about}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Save more with GO!
            </h2>
            <p className="text-gray-600 mb-4">
              Exercitationem distinctio nobis delectus doloremque laborum
              explicabo beatae. Qui consequatur minima quo commodi consequatur
              et quis ratione quia. Ut nobis non commodi et beatae.
            </p>
            <p className="text-gray-600 mb-4">
              Et facilis aut et aspernatur tempora enim. Aut mollitia earum sed
              temporibus. Amet et est. Quisquam modi quam eum ea et voluptatem
              assumenda. Nobis quia sed sed porro. Sit nisi fugiat ea fugiat
              quia sunt maxime.
            </p>
            <p className="text-gray-600">
              Dicta iure accusamus. Debitis saepe hic excepturi quo et non
              aspernatur. Incidunt sequi et dolores tenetur cum. Facere eos
              deserunt labore non possimus quos aut mollitia aperiam.
            </p>
          </div>
        </div>

        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl mb-12 font-bold text-gray-900">
            What We Provide
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="mx-auto h-16 w-16"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl mb-12 font-bold text-gray-900">
            Our Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
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
                  <p className="text-gray-600 text-sm mt-2">
                    {blog.description}
                  </p>
                  <Link
                    to={`/blogs/${blog.id}`}
                    state={{
                      ...blog,
                      image: `http://localhost:5000/${blog.image}`,
                    }}
                    className="text-[#347758] text-sm font-medium mt-4 flex items-center"
                  >
                    Read More <FaAngleRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`py-2 px-4 rounded-md ${
                    currentPage === index + 1
                      ? "bg-[#FAB528] text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
