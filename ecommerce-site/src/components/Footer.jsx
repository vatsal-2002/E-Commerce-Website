import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import footerLogo from "../assets/footerlogo.svg";
import footerbg from "../assets/footerbg.png";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white py-10 min-h-[00px] mt-8"
      style={{ backgroundImage: `url(${footerbg})` }}
    >
      <div className="container mx-auto px-6 sm:px-14">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <img src={footerLogo} alt="Safe Bag Logo" className="mb-4" />
            <p className="text-gray-300 text-sm">
              Maxime Molestiae Quidem Eligendi Consequatur Itaque.<br /> Repellendus
              Corrupti Deserunt Est In Et Molestiae Sit Velit <br /> Dolore. Ut Sunt
              Voluptatum. Doloremque Corporis Voluptatibus Aut Non. Voluptatibus
              Quia Esse Illo Explicabo Dignissimos <br /> Perspiciatis Voluptas At.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div className="w-full sm:w-1/6 mb-6 sm:mb-0">
            <h4 className="text-lg font-bold mb-4 border-b border-gray-600 pb-4">
              Products Categories
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="cursor-pointer hover:text-white">
                <Link to="/fruitVegetable">Fruit & Vegetables</Link>
              </li>
              <li className="cursor-pointer hover:text-white">Breakfast & Dairy</li>
              <li className="cursor-pointer hover:text-white">Biscuits, Snacks & Chocolates</li>
              <li className="cursor-pointer hover:text-white">Pet Foods</li>
              <li className="cursor-pointer hover:text-white">Chicken, Meat & Fish</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/6 mb-6 sm:mb-0">
            <h4 className="text-lg font-bold mb-4 border-b border-gray-600 pb-4">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="cursor-pointer hover:text-white">
              <Link to="/about"> About Us </Link>
                </li>
              <li className="cursor-pointer hover:text-white">Wishlist</li>
              <li className="cursor-pointer hover:text-white">My Cart</li>
              <li className="cursor-pointer hover:text-white">
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/6">
            <h4 className="text-lg font-bold mb-4 border-b border-gray-600 pb-4">
              Customer Service
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="cursor-pointer hover:text-white">
              <Link to="/contact">Contact Us</Link>
              </li>
              <li className="cursor-pointer hover:text-white">Terms & Condition</li>
              <li className="cursor-pointer hover:text-white">Shipping & Returns</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          COPYRIGHT © ALL RIGHTS RESERVED BY SAFEBAG
        </div>
      </div>
    </footer>
  );
};

export default Footer;
