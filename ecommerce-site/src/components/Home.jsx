import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import head1 from "../assets/head1.png";
import service from "../assets/service1.png";
import heartIcon from "../assets/heart.svg";
import cart from "../assets/cart1.svg";
import homebg from "../assets/homebg.png";
import bghome1 from "../assets/bghome1.png";
import bghome2 from "../assets/bghome2.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const deals = [
  {
    img: bghome1,
    title: "Hottest Deal Of The Week",
    discount: "Up to 50% OFF",
    buttonText: "Click to Shop",
  },
  {
    img: bghome2,
    title: "40% OFF On",
    discount: "All Fresh Vegetables",
    buttonText: "Click to Shop",
  },
];

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [populars, setPopular] = useState([]);
  const [fruits, setFruit] = useState([]);
  const [breakfasts, setBreakfast] = useState([]);
  const [snacks, setsnack] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/popular")
      .then((response) => response.json())
      .then((data) => {
        setPopular(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/fruit");
        setFruit(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/breakfast");
        setBreakfast(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/snack");
        setsnack(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />
      <section className="mt-8 mr-0 flex flex-col sm:flex-row justify-center items-center mx-0 sm:mx-14 px-6">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-[550px]">
              <img
                src={head1}
                alt="Juice Bottle"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-left text-black">
                <h3 className="text-[#FAB528] text-sm font-semibold mb-2">
                  Weekend Deal
                </h3>
                <h1 className="text-5xl font-bold mb-4">
                  Discover New
                  <br />
                  Amazing Grocery
                  <br />
                  Deals
                </h1>
                <p className="text-green-600 text-lg mb-6">Up to 50% OFF</p>
                <button className="bg-[#FAB528] text-white px-6 py-2 rounded-md font-semibold">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[550px]">
              <img
                src={head1}
                alt="Juice Bottle"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-left text-black">
                <h3 className="text-[#FAB528] text-sm font-semibold mb-2">
                  Weekend Deal
                </h3>
                <h1 className="text-5xl font-bold mb-4">
                  Discover New
                  <br />
                  Amazing Grocery
                  <br />
                  Deals
                </h1>
                <p className="text-green-600 text-lg mb-6">Up to 50% OFF</p>
                <button className="bg-[#FAB528] text-white px-6 py-2 rounded-md font-semibold">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Second Image Section */}
        <div className="w-full sm:max-w-md mx-auto text-center relative">
          <div className="relative w-full h-[550px]">
            <img
              src={service}
              alt="Bubble Tea Bottle"
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center text-white font-bold rounded-lg">
              <h2 className="text-4xl mb-2">40% OFF</h2>
              <h2 className="text-4xl mb-2"> Everyday Fresh</h2>
              <p className="text-gray-400">On All Weekend Sale</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 ml-16 mr-16 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Shop By Categories</h2>
          <div className="flex justify-between items-center">
            <button className="p-2 border border-[#1D1D1D] rounded bg-[#FFFFFF] hover:bg-gray-200 mr-2">
              {"<"}
            </button>
            <button className="p-2 border border-[#1D1D1D] rounded bg-[#FFFFFF] hover:bg-gray-200">
              {">"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category._id}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:bg-yellow-100 transition duration-300"
            >
              <img
                src={`http://localhost:5000/${category.img}`}
                alt={category.title}
                className="w-16 h-16 mb-4"
              />
              <p className="text-center font-medium text-gray-700">
                {category.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="py-8 sm:px-4 md:px-16 lg:px-16 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Best Sellers</h2>
          <a href="#" className="text-green-600 font-semibold">
            View All &rarr;
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product, index) => (
            <div key={index} className="border p-4 bg-white relative">
              {product.isOnSale && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              <div className="flex justify-between items-center mb-4">
                <img
                  src={`http://localhost:5000/${product.image}`}
                  alt={product.name}
                  className="h-40 w-full object-contain"
                />
                <button className="absolute top-2 right-2">
                  <img
                    src={heartIcon}
                    alt="Add to wishlist"
                    className="h-5 w-5"
                  />
                </button>
              </div>
              <div className="text-start">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.weight}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold text-lg">
                    ₹ {product.price}
                  </p>
                  <button className="rounded bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-2 flex items-center justify-center">
                    <img src={cart} alt="Add to cart" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 sm:px-4 md:px-16 mt-8 lg:px-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Most Popular</h2>
          <a href="#" className="text-green-600 font-semibold">
            View All &rarr;
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {populars.map((popular, index) => (
            <div key={index} className="border p-4 bg-white relative">
              {popular.isOnSale && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
              {popular.isNew && (
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              <div className="flex justify-between items-center mb-4">
                <img
                  src={`http://localhost:5000/${popular.image}`}
                  alt={popular.name}
                  className="h-40 w-full object-contain"
                />
                <button className="absolute top-2 right-2">
                  <img
                    src={heartIcon}
                    alt="Add to wishlist"
                    className="h-5 w-5"
                  />
                </button>
              </div>
              <div className="text-start">
                <h3 className="text-lg font-medium">{popular.name}</h3>
                <p className="text-gray-500 text-sm">{popular.weight}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold text-lg">
                    ₹ {popular.price}
                  </p>
                  <button className="rounded bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-2 flex items-center justify-center">
                    <img src={cart} alt="Add to cart" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative mt-8 bg-cover bg-center h-[50vh] w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${homebg})` }}
      >
        <div className="absolute inset-0 opacity-40"></div>

        <div className="relative z-10 text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Order Home Delivery of Fresh Vegetables
          </h1>
          <p className="text-gray-700 mb-6">
            Nihil eos consectetur et voluptatem cumque odit in voluptatem sed.
            Qui quasi animi pariatur facilis ea quia eos.
          </p>
          <button className="bg-[#FAB528] text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
            Order Now
          </button>
        </div>
      </div>

      <div className="py-8 mt-8 sm:px-4 md:px-16 lg:px-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Fruit & Vegetables</h2>
          <a href="#" className="text-green-600 font-semibold">
            View All &rarr;
          </a>
        </div>
        {/* Adjust grid layout for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {fruits.map((fruit, index) => (
            <div key={index} className="border p-4 bg-white relative">
              <div className="flex justify-between items-center mb-4">
                <img
                  src={`http://localhost:5000/${fruit.image}`}
                  alt={fruit.name}
                  className="h-40 w-full object-contain"
                />
                <button className="absolute top-2 right-2">
                  <img
                    src={heartIcon}
                    alt="Add to wishlist"
                    className="h-5 w-5"
                  />
                </button>
              </div>
              <div className="text-start">
                <h3 className="text-lg font-medium">{fruit.name}</h3>
                <p className="text-gray-500 text-sm">{fruit.weight}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold text-lg">
                    ₹ {fruit.price}
                  </p>
                  <button className="rounded bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-2 flex items-center justify-center">
                    <img src={cart} alt="Add to cart" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 sm:px-4 mt-8 md:px-16 lg:px-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Breakfast & Dairy</h2>
          <a href="#" className="text-green-600 font-semibold">
            View All &rarr;
          </a>
        </div>
        {/* Adjust grid layout for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {breakfasts.map((breakfast, index) => (
            <div key={index} className="border p-4 bg-white relative">
              <div className="flex justify-between items-center mb-4">
                <img
                  src={`http://localhost:5000/${breakfast.image}`}
                  alt={breakfast.name}
                  className="h-40 w-full object-contain"
                />
                <button className="absolute top-2 right-2">
                  <img
                    src={heartIcon}
                    alt="Add to wishlist"
                    className="h-5 w-5"
                  />
                </button>
              </div>
              <div className="text-start">
                <h3 className="text-lg font-medium">{breakfast.name}</h3>
                <p className="text-gray-500 text-sm">{breakfast.weight}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold text-lg">
                    ₹ {breakfast.price}
                  </p>
                  <button className="rounded bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-2 flex items-center justify-center">
                    <img src={cart} alt="Add to cart" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-8 md:flex-row gap-6 p-6 justify-center mx-4 md:mx-10 px-4 md:px-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/2"
            style={{
              backgroundImage: `url(${deal.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "400px",
            }}
          >
            {deal.title === "40% OFF On" &&
            deal.discount === "All Fresh Vegetables" ? (
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-8 text-white text-start w-full">
                <h2
                  className="text-4xl font-bold mb-4"
                  style={{ letterSpacing: "1.24px" }}
                >
                  {deal.title}
                </h2>
                <h2
                  className="text-4xl font-bold mb-6 text-white"
                  style={{ letterSpacing: "1.24px" }}
                >
                  {deal.discount}
                </h2>
                <button className="bg-[#FAB528] text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                  {deal.buttonText} →
                </button>
              </div>
            ) : (
              <div className="relative p-8 text-white text-center flex flex-col items-center justify-center h-full w-full">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ letterSpacing: "1.24px" }}
                >
                  {deal.title}
                </h2>
                <p
                  className="text-2xl font-bold mb-6 text-black"
                  style={{ letterSpacing: "1.24px" }}
                >
                  {deal.discount}
                </p>
                <button className="bg-white text-[#347758] px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                  {deal.buttonText} →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="py-8 sm:px-4 mt-8 md:px-16 lg:px-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Biscuits, Snacks & Chocolates
          </h2>
          <a href="#" className="text-green-600 font-semibold">
            View All &rarr;
          </a>
        </div>
        {/* Adjust grid layout for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {snacks.map((snack, index) => (
            <div key={index} className="border p-4 bg-white relative">
              {snack.isNew && (
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              <div className="flex justify-between items-center mb-4">
                <img
                  src={`http://localhost:5000/${snack.image}`}
                  alt={snack.name}
                  className="h-40 w-full object-contain"
                />
                <button className="absolute top-2 right-2">
                  <img
                    src={heartIcon}
                    alt="Add to wishlist"
                    className="h-5 w-5"
                  />
                </button>
              </div>
              <div className="text-start">
                <h3 className="text-lg font-medium">{snack.name}</h3>
                <p className="text-gray-500 text-sm">{snack.weight}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold text-lg">
                    ₹ {snack.price}
                  </p>
                  <button className="rounded bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-2 flex items-center justify-center">
                    <img src={cart} alt="Add to cart" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
