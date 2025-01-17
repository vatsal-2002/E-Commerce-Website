import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import mainImage from "../assets/blogdetail/main.png";
import smallImage1 from "../assets/blogdetail/small1.png";
import smallImage2 from "../assets/blogdetail/small2.png";
import smallImage3 from "../assets/blogdetail/small3.png";
import leftQuote from "../assets/blogdetail/left-quote.svg";
import facebook from "../assets/blogdetail/facebook.svg";
import instagram from "../assets/blogdetail/instagram.svg";
import linkedIn from "../assets/blogdetail/linkedin.svg";
import twitter from "../assets/blogdetail/twitter.svg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Footer from "./Footer";

const BlogDetails = () => {
  const location = useLocation();
  const { title, date, comments, image } = location.state;
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 py-8">
        <div className="text-black font-semibold mb-4 ml-0 md:ml-14">
          <span>Home &gt; Blogs &gt; Blog Details</span>
        </div>

        <div className="flex flex-col md:flex-row ml-0 md:ml-14">
          <div className="md:w-2/3">
            <img
              src={image}
              alt="Blog Detail"
              className="w-full max-h-[470px] object-cover mb-8"
            />
            <div className="mt-6">
              <p className="text-gray-500 text-sm">
                {date} | {comments}
              </p>
              <h2 className="text-3xl font-semibold mt-2">{title}</h2>
              <p className="mt-4 text-[#1D1D1D] leading-relaxed">
                Aliquid ut rem dignissimos dolorem vero. Laboriosam nihil
                voluptatem adipisci nesciunt. Repudiandae placeat laudantium
                totam quia perferendis aliquid rerum fugiat. Qui voluptatem
                aliquid. Id placeat id ratione quo earum ut. Velit minima minus
                repudiandae consequatur. <br /> <br /> Quia odit neque
                dignissimos adipisci sint sed. Quam odio dolorem. Laudantium
                inventore provident repellendus. Mollitia nulla nobis mollitia
                velit. Excepturi vel magni. Et voluptatem consequatur itaque
                veritatis sint. <br />
                <br /> Quo quod veritatis nihil in quam ut et est. Sit ea
                voluptatum blanditiis. Delectus beatae commodi harum qui cumque
                quas. Eum debitis sed magni sapiente possimus aut voluptatem
                dolor. Sit voluptates qui ut.
              </p>
              <br />

              <blockquote className="text-[#1D1D1D] italic p-4 flex items-center">
                <img
                  src={leftQuote}
                  alt="Left Quote"
                  className="w-6 h-6 mr-4"
                />
                <p className="flex-1">
                  Quisquam dolores quis maiores inventore sint quidem eligendi.
                  Fugiat ad non provident assumenda tempore. Architecto nihil
                  autem qui sed. Quos ea et quia dolorem accusamus deserunt.
                  Quasi voluptatem doloremque.
                </p>
              </blockquote>

              <p className="mt-4 text-[#1D1D1D] leading-relaxed">
                Omnis quia qui. Voluptatem iusto fugiat. Rerum quaerat quasi
                iure odio provident repudiandae suscipit perferendis. Modi
                itaque et consectetur cupiditate eligendi nihil rerum. Occaecati
                dolorum tenetur ipsum vitae aut. Placeat quod necessitatibus
                doloremque sunt omnis et dolores et inventore. <br /> <br />{" "}
                Culpa necessitatibus porro eaque. In cumque at quis magnam velit
                rerum. Qui deserunt ipsum magnam totam. Quibusdam deleniti
                exercitationem eos minima. Corrupti explicabo assumenda
                consequatur repudiandae quas. <br />
                <br /> Omnis saepe necessitatibus. Enim minus modi qui iure
                omnis voluptatem autem esse. Rerum ut ipsum. Vero eius nisi eum
                rem odio optio distinctio cum.Vel dolor quo qui impedit nulla
                placeat repellat voluptas velit. Magnam veritatis nulla
                necessitatibus ipsa sint. Unde voluptas quis ut. <br />
                <br /> At minima voluptate quisquam reprehenderit itaque. Nulla
                nihil veritatis. Nemo ea et quas voluptate. Laboriosam ut sint.{" "}
                <br />
                <br /> Cupiditate corrupti odit. Aut suscipit sint quia unde.
                Quam molestiae accusantium aliquid ea rerum velit enim.
              </p>

              <div className="flex justify-between mt-8 text-[#347758]">
                <p className="flex items-center">
                  <FaAngleLeft className="ml-1" />
                  Previous
                </p>
                <p className="flex items-center">
                  Next
                  <FaAngleRight className="ml-1" />
                </p>
              </div>

              <div className="mx-auto bg-gray-100 p-8 mt-8 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Leave Reply</h2>
                <form>
                  <div className="mb-4 flex space-x-8">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-1/2 p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-1/2 p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      placeholder="Your Comments"
                      className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      rows="5"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-auto bg-[#FAB528] text-black p-2 rounded-md hover:bg-yellow-600 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:ml-8 md:mr-4">
            <div className="mb-6">
              <div className="bg-white border border-[#1D1D1D] rounded-md p-4">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                  Search
                </h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className="w-full px-4 py-2 border bg-[#ECECEC] rounded-md focus:outline-none focus:border-gray-400"
                  />
                  <button className="absolute right-0 top-0 mt-2 mr-2">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 0 0-5.293 13.707l-3.1 3.1a1 1 0 0 0 1.414 1.415l3.1-3.1A8 8 0 1 0 10 2zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Blog Categories */}
            <div className="bg-white border border-[#1D1D1D] rounded-md p-4">
              <h2 className="text-gray-800 text-lg font-semibold mb-2 border-b border-black pb-2">
                Blog Categories
              </h2>
              <ul className="text-[#3E3C3B] list-disc pl-6 space-y-2">
                <li>
                  <a href="#" className="hover:text-green-500">
                    Breakfast &amp; Cereal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    Dried Fruits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    Fast Food
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    Fresh Meat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    Fruits Juice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    Milk &amp; Cream
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    Uncategorized
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    Vegetables
                  </a>
                </li>
              </ul>
            </div>

            {/* Recent Blogs */}
            <div className="mt-12 bg-white border border-[#1D1D1D] rounded-md p-4">
              <h3 className="font-semibold text-xl  mb-6 border-b border-black pb-4">
                Recent Blogs
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src={smallImage1}
                    alt="Recent Blog 1"
                    className="w-16 h-16 rounded-md mr-4"
                  />
                  <div>
                    <h4 className="text-md font-semibold">
                      Healthy Cooking Is A <br /> Must For
                    </h4>
                    <p className="text-sm text-gray-500">17th Jan 2020</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img
                    src={smallImage2}
                    alt="Recent Blog 2"
                    className="w-16 h-16 rounded-md mr-4"
                  />
                  <div>
                    <h4 className="text-md font-semibold">
                      Repellendus debitis enim <br /> id neque aperiam
                      blanditiis.
                    </h4>
                    <p className="text-sm text-gray-500">20th Dec 2019</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img
                    src={smallImage3}
                    alt="Recent Blog 3"
                    className="w-16 h-16 rounded-md mr-4"
                  />
                  <div>
                    <h4 className="text-md font-semibold">
                      Et temporibus dignissimos <br /> eos.
                    </h4>
                    <p className="text-sm text-gray-500">01st Jan 2019</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags Section */}
            <div className="mt-12 bg-white border border-[#1D1D1D] rounded-md p-4">
              <h3 className="font-semibold text-xl mb-6 border-b border-black pb-4">
                Tags
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  "Banana",
                  "Bread",
                  "Fruits",
                  "Orange",
                  "FoodPassion",
                  "Vegetables",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-center px-3 py-1 rounded-md text-sm hover:bg-green-100 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-12 bg-white border border-[#1D1D1D] rounded-md p-4">
              <h3 className="font-semibold text-xl mb-6 border-b border-black pb-4">
                Social Media
              </h3>
              <div className="flex space-x-8">
                {[
                  { icon: facebook, link: "#" },
                  { icon: instagram, link: "#" },
                  { icon: linkedIn, link: "#" },
                  { icon: twitter, link: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="text-gray-700 hover:text-green-500 text-2xl transition"
                  >
                    <img
                      src={social.icon}
                      alt="social-icon"
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
