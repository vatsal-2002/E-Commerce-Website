import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductTable from "./adminvegetable";

const AdminDashboard = () => {
  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      if (!apiEndpoint || !selectedCategory) return;
      setLoading(true);
      try {
        const response = await axios.get(apiEndpoint);

        console.log(`API Response for ${selectedCategory}:`, response.data);

        if (Array.isArray(response.data)) {
          setProducts((prevProducts) => ({
            ...prevProducts,
            [selectedCategory]: response.data,
          }));
        } else {
          console.error(
            "Expected an array of products, but received:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiEndpoint, selectedCategory]);

  const toggleProductDropdown = () => {
    setProductDropdownOpen((prevState) => !prevState);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    let endpoint = "";
    switch (category) {
      case "Fruit & Vegetables":
        endpoint = "http://localhost:5000/api/adminfruit";
        break;
      case "Dairy, Bread & Eggs":
        endpoint = "http://localhost:5000/api/adminallitem";
        break;
      case "Chicken, Meat & Fish":
        endpoint = "http://localhost:5000/api/adminallMeat";
        break;
      case "Pet Food":
        endpoint = "http://localhost:5000/api/adminallPetFood";
        break;
      case "Cold Drinks & Juices":
        endpoint = "http://localhost:5000/api/adminallColdDrinksJuices";
        break;
      default:
        break;
    }

    setApiEndpoint(endpoint);
  };

  const handleEdit = (product) => {
    console.log("Editing product", product);
  };

  const handleDelete = (product) => {
    console.log("Deleting product", product);
  };

  const categories = [
    "Fruit & Vegetables",
    "Dairy, Bread & Eggs",
    "Chicken, Meat & Fish",
    "Pet Food",
    "Cold Drinks & Juices",
  ];

  const getTotalProductsCount = (category) => {
    console.log("Products state:", products);

    if (products[category]) {
      console.log(`Total products for ${category}:`, products[category].length);
      return products[category].length;
    } else {
      console.log(`No products found for category: ${category}`);
      return 0;
    }
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
              <p
                className={`${
                  isProductDropdownOpen ? "rotate-45" : ""
                } font-bold text-xl transition-all my-auto`}
              >
                +
              </p>
            </button>
            {isProductDropdownOpen && (
              <div className="text-white pl-0">
                {categories.map((category) => (
                  <p
                    key={category}
                    className="py-2 pl-6 cursor-pointer hover:bg-blue-700"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </p>
                ))}
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

        {selectedCategory ? (
          <ProductTable
            category={selectedCategory}
            products={products[selectedCategory] || []}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
          />
        ) : (
          <>
            <p className="font-semibold text-2xl py-5">Product Categories</p>
            <div className="grid grid-cols-3 gap-3">
              {categories.map((category) => (
                <div
                  className="hover:scale-105 transition-all bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-4 flex flex-col gap-3 justify-between rounded-lg"
                  key={category}
                >
                  <p className="font-semibold text-xl">{category}</p>
                  <p>Total products: {getTotalProductsCount(category)}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
