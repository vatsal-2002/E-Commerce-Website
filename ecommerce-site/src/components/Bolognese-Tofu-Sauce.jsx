import React, { useState } from "react";
import detailMain from "../assets/detailmain.png";
import detailSm1 from "../assets/detailsm1.png";
import detailSm2 from "../assets/detailsm2.png";
import detailSm3 from "../assets/detailsm3.png";
import detailSm4 from "../assets/detailsm4.png";
import chock1 from "../assets/seller5.png";
import chock2 from "../assets/product10.png";
import chock3 from "../assets/product1.png";
import chock4 from "../assets/product8.png";
import chock5 from "../assets/snacks5.png";
import Navbar from "../components/Navbar";
import cart from "../assets/cart1.svg";
import heartIcon from "../assets/heart.svg";
import { FaCaretRight } from "react-icons/fa";
import Footer from "./Footer";

const Bolognese = () => {
  const [selectedImage, setSelectedImage] = useState(detailMain);
  const images = [detailSm1, detailSm2, detailSm3, detailSm4];

  const chocks = [
    {
      image: chock1,
      name: "Milkmaild",
      weight: "500g",
      price: "600.00",
    },
    {
      image: chock2,
      name: "Multi Grain Bread",
      weight: "200g",
      price: "100.00",
    },
    {
      image: chock3,
      name: "Epigamia",
      weight: "100g",
      price: "150.00",
    },
    {
      image: chock4,
      name: "Eggs",
      weight: "100g",
      price: "350.00",
    },
    {
      image: chock5,
      name: "Yummy Chips",
      weight: "1L",
      price: "45.00",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <nav className="flex mt-8 text-[#1D1D1D] font-bold text-sm mb-4 ml-0 md:ml-16 items-center flex-wrap md:flex-nowrap">
          <span>Home</span>
          <FaCaretRight />
          <span>Fruit & Vegetables</span>
          <FaCaretRight /> Bolognese Tofu Sauce
        </nav>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="w-full h-80 relative">
              <img
                src={selectedImage}
                alt="Product"
                className="w-full h-full object-contain rounded-lg mb-4"
              />
            </div>

            <div className="flex space-x-4 mt-12 justify-center items-center">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 rounded-lg cursor-pointer bg-[#F6F6F6] ${
                    selectedImage === img ? "ring-2 ring-green-500" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          <div className="border border-gray-300 px-6 py-2 mr-0 md:mr-12">
            <h1 className="text-2xl font-bold mb-2">Bolognese Tofu Sauce</h1>
            <p className="text-sm text-gray-600 mb-4">
              By Biona Organic | Product Id: 12509as894awe
            </p>
            <p className="text-lg font-semibold text-green-600 mb-4">₹850.00</p>

            <div className="mb-6">
              <div className="inline-flex space-x-2">
                {["200g", "340g", "400g", "500g"].map((weight, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border bg-[#FAFAFA] border-[#FAFAFA] rounded-md text-sm font-medium hover:bg-[#F9F1E4]"
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button className="px-2 py-1">-</button>
                <input
                  type="text"
                  value="1"
                  className="w-10 text-center outline-none"
                  readOnly
                />
                <button className="px-2 py-1">+</button>
              </div>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
                Add To Cart
              </button>
            </div>

            <div className="mt-6 border-t border-[#707070] pt-6">
              <h2 className="font-medium text-lg mb-2">Product Description</h2>
              <p className="text-gray-700 text-sm">
                Veniam qui eos molestiae. Dolore quis aliquid eos enim.
                Molestiae commodi sit numquam mollitia. Adipisci voluptas ut
                repudiandae qui molestiae porro.
                <br /> <br /> Inventore quia repellat numquam quae repudiandae.
                Ipsum quo voluptates quia molestias omnis dignissimos et. Neque
                hic eius quaerat. Officiis sed omnis molestiae in qui excepturi.
                Ad voluptas omnis tempore non. Rerum sunt aut earum debitis iste
                est debitis labore.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 sm:px-4 mt-8 md:px-16 lg:px-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">You May Also Like</h2>
          <a href="#" className="text-green-600 font-semibold">
            View All &rarr;
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {chocks.map((chock, index) => (
            <div key={index} className="border p-4 bg-white relative">
              <div className="flex justify-between items-center mb-4">
                <img
                  src={chock.image}
                  alt={chock.name}
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
                <h3 className="text-lg font-medium">{chock.name}</h3>
                <p className="text-gray-500 text-sm">{chock.weight}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold text-lg">
                    ₹ {chock.price}
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

export default Bolognese;
