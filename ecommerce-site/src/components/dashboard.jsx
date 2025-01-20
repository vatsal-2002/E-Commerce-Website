import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductTable from "./adminvegetable";

const AdminDashboard = () => {
  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleProductDropdown = () => {
    setProductDropdownOpen((prevState) => !prevState);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleEdit = (product) => {
    console.log("Editing product", product);
  };

  const handleDelete = (product) => {
    console.log("Deleting product", product);
  };

  const products = {
    "Fruit & Vegetables": [
      {
        title: "Apple",
        weight: "1 kg",
        price: "$3.00",
        image: "/path/to/apple.jpg",
      },
      {
        title: "Banana",
        weight: "1.2 kg",
        price: "$2.50",
        image: "/path/to/banana.jpg",
      },
      {
        title: "Carrot",
        weight: "1 kg",
        price: "$1.80",
        image: "/path/to/carrot.jpg",
      },
    ],
    "Dairy, Bread & Eggs": [
      {
        title: "Milk",
        weight: "1 L",
        price: "$1.50",
        image: "/path/to/milk.jpg",
      },
      {
        title: "Bread",
        weight: "500g",
        price: "$1.00",
        image: "/path/to/bread.jpg",
      },
      {
        title: "Eggs",
        weight: "12 pcs",
        price: "$2.20",
        image: "/path/to/eggs.jpg",
      },
    ],
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div className="h-16 flex items-center justify-center border-b border-blue-700">
          <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        </div>
        <div className="flex flex-col mt-8">
          <Link
            to="/admin/dashboard"
            className="px-4 py-2 text-white hover:bg-blue-700"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            className="px-4 py-2 text-white hover:bg-blue-700"
          >
            Users
          </Link>

          <div>
            <button
              onClick={toggleProductDropdown}
              className="flex justify-between items-center w-full text-left px-4 py-2 text-white hover:bg-blue-700"
            >
              Products
              <p className={`${isProductDropdownOpen ? 'rotate-45' : '' } font-bold text-xl transition-all my-auto`}>+</p>
            </button>
            {isProductDropdownOpen && (
              <div className="text-white pl-0">
                <p
                  className="py-2 pl-6 cursor-pointer hover:bg-blue-700"
                  onClick={() => handleCategoryClick("Fruit & Vegetables")}
                >
                  Fruits & Vegetables
                </p>
                <p
                  className="py-2 pl-6 cursor-pointer hover:bg-blue-700"
                  onClick={() => handleCategoryClick("Dairy, Bread & Eggs")}
                >
                  Dairy, Bread & Eggs
                </p>
                <p className="py-2 pl-6 cursor-pointer hover:bg-blue-700">Chicken, Meat & Fish</p>
                <p className="py-2 pl-6 cursor-pointer hover:bg-blue-700">Pet Food</p>
                <p className="py-2 pl-6 cursor-pointer hover:bg-blue-700">Cold Drinks & Juices</p>
              </div>
            )}
          </div>

          <Link
            to="/admin/settings"
            className="px-4 py-2 text-white hover:bg-blue-700"
          >
            Settings
          </Link>
        </div>
      </div>

      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-semibold">Welcome, Admin!</h2>
            <p className="text-sm text-gray-600">
              Here's your dashboard overview.
            </p>
          </div>
          <button
            className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 hover:bg-gradient-to-tl text-white py-2 px-4 rounded-lg"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/admin";
            }}
          >
            Logout
          </button>
        </div>

        {selectedCategory && (
          <ProductTable
            category={selectedCategory}
            products={products[selectedCategory]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
