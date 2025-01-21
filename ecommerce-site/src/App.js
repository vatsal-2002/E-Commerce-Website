import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FruitVegetable from "./components/Fruit&Vegetable";
import Bolognese from "./components/Bolognese-Tofu-Sauce";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetail";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/Error";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/dashboard";
import UserDetail from "./components/UserDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Settings from "./components/Settings";

function App() {
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);

  useEffect(() => {
    // Check if it's the user's first visit
    const firstVisit = localStorage.getItem("firstVisit");

    // If it's the first visit, show the login popup
    if (!firstVisit) {
      setIsLoginPopupVisible(true);

      // Set a flag in localStorage to indicate that the popup has been shown
      localStorage.setItem("firstVisit", "true");
    }
  }, []);

  const handleCloseLoginPopup = () => {
    setIsLoginPopupVisible(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fruitVegetable" element={<FruitVegetable />} />
          <Route path="/bolognese" element={<Bolognese />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/userdetail" element={<UserDetail />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/admin/settings" element={<Settings/>}/>

          {/* Route for general login */}
          <Route path="/login" element={<Login />} />

          {/* Route for admin login */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* Protecting the Admin Dashboard route */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

        {isLoginPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <Login />
            <button
              onClick={handleCloseLoginPopup}
              className="absolute top-0 right-0 p-2 text-white text-5xl"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
