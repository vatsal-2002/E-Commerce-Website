import React, { useState } from "react";
import fruitbg from "../assets/fruitbg.png";
import Navbar from "../components/Navbar";
import cart from "../assets/cart1.svg";
import searchIcon from "../assets/search.svg";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";
import product14 from "../assets/product14.png";
import product15 from "../assets/product15.png";
import { FaCaretRight, FaChevronDown } from "react-icons/fa";
import heartIcon from "../assets/heart.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const FruitVegetable = () => {
  const products = [
    {
      image: product1,
      name: "Waffles Homestyle",
      weight: "500g",
      price: 184,
      label: "",
    },
    {
      image: product2,
      name: "Bolognese Tofu Sauce",
      weight: "340g",
      price: 850,
      label: "Sale",
    },
    {
      image: product3,
      name: "Sun Chips",
      weight: "100g",
      price: 184,
      label: "",
    },
    {
      image: product4,
      name: "Coffee Fresh Drink",
      weight: "100ml",
      price: 200,
      label: "Sale",
    },
    {
      image: product5,
      name: "Cherrli Berry",
      weight: "100g",
      price: 250,
      label: "New",
    },
    {
      image: product6,
      name: "Ergonomic Linen Pants",
      weight: "250g",
      price: 184,
      label: "",
    },
    {
      image: product7,
      name: "Milkmaild",
      weight: "500g",
      price: 600,
      label: "",
    },
    {
      image: product8,
      name: "Multi Grain Bread",
      weight: "200g",
      price: 100,
      label: "",
    },
    {
      image: product9,
      name: "Epigamia",
      weight: "100g",
      price: 150,
      label: "Best Seller",
    },
    {
      image: product10,
      name: "Chocolate Combo",
      weight: "3 pack",
      price: 350,
      label: "",
    },
    {
      image: product11,
      name: "Unibic ChocoNut",
      weight: "100g",
      price: 120,
      label: "New",
    },
    {
      image: product12,
      name: "Belvita Duo Crunch",
      weight: "150g",
      price: 150,
      label: "",
    },
    {
      image: product13,
      name: "Wheat Thins Oiginal",
      weight: "100g",
      price: 400,
      label: "",
    },
    {
      image: product14,
      name: "Werther's Original",
      weight: "50g",
      price: 50,
      label: "",
    },
    {
      image: product15,
      name: "Oatmeal Cookie",
      weight: "5.8g",
      price: 200,
      label: "",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);

  const categories = [
    "Fruit & Vegetables",
    "Dairy, Bread & Eggs",
    "Chicken, Meat & Fish",
    "Pet Food",
    "Cold Drinks & Juices",
    "Biscuits, Snacks & Chocolates",
  ];

  const brands = [
    "Aavin",
    "Cravoury",
    "D’Lecta",
    "Elite",
    "English Oven",
    "Epigamia Origins",
  ];

  const prices = [
    "Less than Rs 20 (61)",
    "Rs 21 to Rs 50 (166)",
    "Rs 51 to Rs 100 (170)",
    "Rs 101 to Rs 200 (183)",
    "Rs 201 to Rs 500 (116)",
    "More than Rs 501 (62)",
  ];

  const discounts = [
    "Upto 5% (252)",
    "5% - 10% (359)",
    "10% - 15% (129)",
    "15% - 25% (118)",
    "More than 25% (68)",
  ];

  const foods = ["Vegetarian", "Non Vegetarian", "Contains Egg"];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const handlePriceChange = (brand) => {
    setSelectedPrices((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const handleDiscountChange = (brand) => {
    setSelectedDiscounts((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const handleFoodChange = (brand) => {
    setSelectedFoods((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center mt-8 py-20 px-10 flex items-center justify-center"
        style={{ backgroundImage: `url(${fruitbg})` }}
      >
        <div className="text-left max-w-lg text-center">
          <h2 className="text-yellow-500 text-lg mb-2">Shop Online</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Weekly Special Offers On <br /> Fruit & Vegetables
          </h1>
          <button className="mt-4 py-2 px-6 bg-transparent border-2 border-green-500 border-dashed text-green-500 font-semibold rounded-md hover:bg-green-500 hover:text-white hover:border-transparent">
            USE CODE F&V500
          </button>
        </div>

        <div className="absolute right-0 bottom-0 transform translate-x-10 translate-y-10"></div>
      </div>

      <div className="container mx-auto p-6">
        <nav className="flex mt-8 mb-4 font-bold items-center text-black">
          <span>Home</span>
          <FaCaretRight />
          <span>Fruit & Vegetables</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-[#FAFAFA] w-full md:w-1/4 p-4 border rounded-md shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="relative w-full mb-4">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="w-full p-2 border bg-[#ECECEC] rounded-md pr-8"
                />
                <img
                  src={searchIcon}
                  alt="Search Icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4"
                />
              </div>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl border-t border-[#3E3C3B] pt-6 font-semibold mb-4">
                Brands
              </h2>
              <div className="relative w-full mb-4">
                <input
                  type="text"
                  placeholder="Search Brand..."
                  className="w-full p-2 pl-4 pr-10 border bg-[#ECECEC] rounded-md"
                />
                <img
                  src={searchIcon}
                  alt="Search Icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
                />
              </div>
              <ul className="space-y-2">
                {brands.map((brand) => (
                  <li key={brand}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                    />
                    {brand}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl border-t border-[#3E3C3B] pt-6 font-semibold mb-4">
                Price
              </h2>
              <div className="relative w-full mb-4">
                <input
                  type="text"
                  placeholder="Search Brand..."
                  className="w-full p-2 pl-4 pr-10 border bg-[#ECECEC] rounded-md"
                />
                <img
                  src={searchIcon}
                  alt="Search Icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
                />
              </div>
              <ul className="space-y-2">
                {prices.map((price) => (
                  <li key={price}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedPrices.includes(price)}
                      onChange={() => handlePriceChange(price)}
                    />
                    {price}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-xl border-t border-[#3E3C3B] pt-6 font-semibold mb-4">
                Discount
              </h2>
              <div className="relative w-full mb-4">
                <input
                  type="text"
                  placeholder="Search Brand..."
                  className="w-full p-2 pl-4 pr-10 border bg-[#ECECEC] rounded-md"
                />
                <img
                  src={searchIcon}
                  alt="Search Icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
                />
              </div>
              <ul className="space-y-2">
                {discounts.map((discount) => (
                  <li key={discount}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedDiscounts.includes(discount)}
                      onChange={() => handleDiscountChange(discount)}
                    />
                    {discount}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-xl border-t border-[#3E3C3B] pt-6 font-semibold mb-4">
                Food Preference
              </h2>
              <div className="relative w-full mb-4">
                <input
                  type="text"
                  placeholder="Search Brand..."
                  className="w-full p-2 pl-4 pr-10 border bg-[#ECECEC] rounded-md"
                />
                <img
                  src={searchIcon}
                  alt="Search Icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
                />
              </div>
              <ul className="space-y-2">
                {foods.map((food) => (
                  <li key={food}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedFoods.includes(food)}
                      onChange={() => handleFoodChange(food)}
                    />
                    {food}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold">
                Biscuits, Snacks & Chocolates
              </h1>
              <div className="flex items-center space-x-2">
                <span className="mr-2">Sort By:</span>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-[#F6F6F4] border border-[#F6F6F4] rounded-md shadow-sm hover:bg-white focus:outline-none"
                >
                  <span className="flex items-center">
                    Popularity
                    <FaChevronDown className="ml-2 text-gray-500" />
                  </span>
                </button>

                {isOpen && (
                  <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                    <li
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Popularity
                    </li>
                    <li
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Newest
                    </li>
                    <li
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Price: Low to High
                    </li>
                    <li
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Price: High to Low
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="border p-4 relative hover:shadow-md transition"
                >
                  {product.label && (
                    <span
                      className={`absolute top-2 left-2 px-2 py-1 text-white text-sm rounded-md ${
                        product.label === "Sale"
                          ? "bg-red-500"
                          : product.label === "New"
                          ? "bg-green-500"
                          : product.label === "Best Seller"
                          ? "bg-blue-500"
                          : ""
                      }`}
                    >
                      {product.label}
                    </span>
                  )}

                  <div className="w-full h-40 mb-3 overflow-hidden rounded-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <button className="absolute top-2 right-2">
                    <img
                      src={heartIcon}
                      alt="Add to wishlist"
                      className="h-5 w-5"
                    />
                  </button>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.weight}</p>

                  <div className="flex items-center justify-between mt-2">
                    <p className="font-bold text-green-600">
                      ₹ {product.price}
                    </p>
                    <button className="rounded bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-2 flex items-center justify-center">
                      <img src={cart} alt="Add to cart" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-8">
              <Link to="/bolognese">
                <button className="bg-[#FAB528] text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FruitVegetable;
