import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import downArrow from "../assets/down-arrow.svg";
import cartIcon from "../assets/cart.svg";
import toggleIcon from "../assets/toggle.svg";
import searchIcon from "../assets/search.svg";
import locationIcon from "../assets/location.svg";
import headphoneIcon from "../assets/headphone.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) =>
    location.pathname === path ? "text-yellow-500" : "";

  return (
    <>
      <header className="bg-green-700 p-4 text-white relative">
        <div className="flex justify-between items-center ml-0 md:ml-14 mr-14">
          <div className="flex items-center">
            <img src={logo} alt="Safe Bag Logo" className="h-10 mr-2" />
          </div>

          <div className="flex items-center mr-16 space-x-6 hidden md:flex">
            <button className="flex items-center">
              My Account{" "}
              <img src={downArrow} alt="Down Arrow" className="ml-1 h-2" />
            </button>
            <button className="flex items-center">
              Wish List{" "}
              <span className="ml-1 bg-[#FAB528] rounded-full h-4 w-4 text-xs">
                0
              </span>
            </button>
          </div>
        </div>

        <div className="absolute top-0 bottom-[-20px] right-2 md:right-16 bg-[#FAB528] p-2 flex items-end justify-center rounded-b-full">
          <div className="relative">
            <img src={cartIcon} alt="Cart" className="h-6 mb-1" />
            <span className="absolute top-[-4px] right-[-4px] bg-black rounded-full h-4 w-4 text-xs flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </header>

      <div className="mt-4 mr-14 ml-14 flex flex-wrap bg-white p-2 rounded-md">
        <button className="flex items-center bg-[#FAB528] text-[#1D1D1D] px-4 py-2 rounded-md hidden md:flex mx-0 sm:mx-4">
          <img src={toggleIcon} alt="Toggle Icon" className="h-4 mr-2" />
          Shop By Categories
        </button>

        <div className="flex w-auto max-w-xl mx-4 bg-gray-200 rounded-md hidden md:flex">
          <button className="flex items-center border-r pr-4 ml-2">
            All Categories{" "}
            <img src={downArrow} alt="Down Arrow" className="ml-1 h-2" />
          </button>
          <div className="w-2 h-6 border-l-2 border-gray-400 hidden md:block my-2"></div>
          <input
            type="text"
            placeholder="Search Products..."
            className="flex-grow px-4 py-2 border rounded-l-none outline-none bg-gray-200"
          />
          <button className="bg-gray-200 px-4 rounded-md">
            <img src={searchIcon} alt="Search Icon" className="h-4" />
          </button>
        </div>

        <div className="flex items-center space-x-2 ml-auto hidden md:flex">
          <img src={locationIcon} alt="Location" className="h-4" />
          <span>Ahmedabad</span>
          <img src={downArrow} alt="Down Arrow" className="h-2" />
          <div className="w-2 h-6 border-l-2 border-gray-400 hidden md:block my-2"></div>
          <div className="flex items-center">
            <img src={headphoneIcon} alt="Headphone" className="h-4 mr-1" />
            <span>(215) 171-4729</span>
          </div>
        </div>

        <div className="mt-4 md:hidden">
          <div>
            <img
              src={toggleIcon}
              alt="Toggle Icon"
              className="h-4"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <ul className="mt-16 space-y-8 text-center">
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className={`hover:text-yellow-500 ${isActive("/my-account")}`}
            >
              My Account
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className={`hover:text-yellow-500 ${isActive("/wishlist")}`}
            >
              Wish List{" "}
              <span className="ml-1 bg-[#FAB528] rounded-lg h-4 w-4 text-xs">
                0
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
