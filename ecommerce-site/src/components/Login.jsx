import React, { useState } from "react";
import loginbg from "../assets/loginbg.svg";
import loginlogo from "../assets/loginlogo.svg";
import logineyes from "../assets/logineyes.svg";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("hasSeenLoginPopup", "true"); // Mark that the user has logged in and seen the popup
      alert("Logged in successfully!");
      onClose(); // Close the popup when logged in successfully
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-cover">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div
          className="w-full h-32 bg-cover bg-no-repeat bg-top rounded-t-lg relative"
          style={{ backgroundImage: `url(${loginbg})` }}
        >
          <img
            src={loginlogo}
            alt="Safe Bag Logo"
            className="absolute top-1/2 left-1/2 w-40 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              Log-In to Your Account
            </h1>
            <p className="text-gray-500">
              Hey, Enter your details to get login to your account
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="w-full px-3 py-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  className="w-full px-3 py-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <img
                  src={logineyes}
                  alt="Show Password"
                  className="absolute top-1/2 right-3 w-5 h-5 transform -translate-y-1/2 cursor-pointer"
                />
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-yellow-500 hover:underline">
                  Forget Password
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
