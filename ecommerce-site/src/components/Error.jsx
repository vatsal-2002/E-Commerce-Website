import React from "react";
import errorImage from "../assets/error.png";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-white p-8">
        <div className="text-center md:text-left md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-4xl text-gray-800">
            <span className="text-[#FFBD39]">Oops</span> ....looks like it’s
          </h1>
          <h2 className="text-9xl font-extrabold text-black my-4">404</h2>
          <p className="text-lg text-gray-600 mb-6">
            You’d better{" "}
            <span className="text-[#FFBD39] cursor-pointer">return</span>
          </p>
          <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
            Home
          </button>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
          <img
            src={errorImage}
            alt="404 Error"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
