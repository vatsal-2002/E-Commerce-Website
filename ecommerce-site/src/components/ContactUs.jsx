import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaCaretRight } from "react-icons/fa";
import Footer from "./Footer";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    type: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userDetails = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (response.ok) {
        setNotification({
          message: "Message submitted successfully!",
          type: "success",
        });

        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setNotification({ message: "", type: "" });
        }, 1000);
      } else {
        setNotification({
          message: "Something went wrong! Please try again.",
          type: "error",
        });

        setTimeout(() => {
          setNotification({ message: "", type: "" });
        }, 1000);
      }
    } catch (err) {
      setNotification({
        message: "Network error! Please try again.",
        type: "error",
      });

      setTimeout(() => {
        setNotification({ message: "", type: "" });
      }, 1000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8">
        <nav className="flex text-[#1D1D1D] font-bold text-sm mb-4 ml-0 items-center flex-wrap md:flex-nowrap">
          <span>Home</span>
          <FaCaretRight />
          <span>Contact Us</span>
        </nav>

        <div className="flex flex-col lg:flex-row justify-between items-start p-6">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-2xl font-bold mb-4">
              We Love to Hear From You
            </h1>
            <p className="text-gray-600 mb-6">
              Est officiis ipsum minima. Nesciunt corrupti accusantium. Aliquid
              dolores mollitia. Vel inventore repellat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h2 className="font-semibold mb-4">Office Address 1</h2>
                <p className="text-gray-600 mb-4">
                  Buckinghamshire, Herzog Key,
                  <br />
                  10998 Samanta Vista,
                  <br />
                  North Maxmillistad, 45426
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-4">Office Address 2</h2>
                <p className="text-gray-600 mb-4">
                  Berkshire, Idella Rapids,
                  <br />
                  787 Violette Port, South Hilario,
                  <br />
                  48150
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  (844) 1800-3355
                  <br />
                  info@example.com
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-4">Our Business Hours</h2>
                <p className="text-gray-600">
                  Monday – Friday: 8am – 4pm
                  <br />
                  Saturday, Sunday: 9am – 5pm
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-6 border border-[#707070] rounded">
            <h2 className="text-xl font-semibold mb-6">Contact Form</h2>

            {notification.message && (
              <div
                className={`p-4 mb-4 rounded-md text-center ${
                  notification.type === "success"
                    ? "bg-white text-green-700"
                    : "bg-white text-red-500"
                }`}
              >
                {notification.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block font-medium text-gray-700 mb-4"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-[#707070] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label
                  className="block font-medium mb-4 text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-[#707070] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label
                  className="block font-medium mb-4 text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write Something..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-4 border border-[#707070] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
