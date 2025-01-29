import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductTable from "./adminvegetable";
import Editform from "./Editform";

const AdminDashboard = () => {
  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState("");
  const [setting, setSetting] = useState(false);
  const [productCounts, setProductCounts] = useState({});
  const [editProduct, setEditProduct] = useState(false);
  const [email, setemail] = useState('')
  const [emailerror, setemailError] = useState('');
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  const [showpassword, setshowpassword] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setemail(value);

    if (!emailRegex.test(value)) {
      setemailError('Please enter a valid email address');
    } else {
      setemailError('');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchProductCounts = async () => {
      const endpoints = {
        "Fruit & Vegetables": "http://localhost:5000/api/adminfruit",
        "Dairy, Bread & Eggs": "http://localhost:5000/api/adminallitem",
        "Chicken, Meat & Fish": "http://localhost:5000/api/adminallMeat",
        "Pet Food": "http://localhost:5000/api/adminallPetFood",
        "Cold Drinks & Juices":
          "http://localhost:5000/api/adminallColdDrinksJuices",
      };

      const counts = {};

      for (const category in endpoints) {
        try {
          const response = await axios.get(endpoints[category]);
          counts[category] = Array.isArray(response.data)
            ? response.data.length
            : 0;
        } catch (error) {
          console.error(`Error fetching products for ${category}:`, error);
          counts[category] = 0;
        }
      }

      setProductCounts(counts);
    };

    fetchProductCounts();
  }, []);

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

  const submitdata = () => {
    console.log(email)
    console.log(password)
    console.log(confirmpassword)
  }

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
    // setEditProduct(product);
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
            onClick={() => {
              setSelectedCategory(null);
              setSetting(false)
            }}
          >
            Dashboard
          </Link>
          <Link
            // to="/admin/users"
            className="px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => {
              setSelectedCategory(null);
              setSetting(false)
            }}
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

          <p
            onClick={() => {
              setSetting(true); 
              setSelectedCategory(null)
            }}
            className="cursor-pointer px-4 py-2 text-white hover:bg-blue-700"
          >
            Settings
          </p>
        </div>
      </div>

      <div className="flex-1 bg-gray-100">
        <div className="flex p-6 justify-between items-center">
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

        {editProduct ? (
          <Editform
            product={editProduct}
            onCancel={() => setEditProduct(null)}
            onSave={(updatedProduct) => {
              console.log("Updated product:", updatedProduct);
              setEditProduct(null);
            }}
          />
        ) : selectedCategory ? (
          <ProductTable
            category={selectedCategory}
            products={products[selectedCategory] || []}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
          />
        ) : setting ? (
          <div className="relative h-[calc(100vh-105px)] overflow-hidden">
            {/* <div className="absolute w-full right-96 h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"></div> */}
            <div className="grid grid-cols-1 py-8 px-72">
              {/* <div className="relative z-10"></div> */}
              <div
                className="relative z-10 pt-6 pb-8 px-10 text-white bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500 rounded-2xl"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }}
              >
                <p className="text-center text-2xl font-semibold">
                  Change Password
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <div>
                    <p className="pb-1">Email</p>
                    <input
                      className={`w-full p-2 rounded-md text-black focus:outline-none ${emailerror ? 'border-red-500' : ''}`}
                      onChange={handleEmailChange} value={email}
                      placeholder="Enter Your Email"
                      type="email"
                      required
                    />
                    {emailerror && <p className="text-sm text-red-500">{emailerror}</p>}
                  </div>
                  <div>
                    <p className="pb-1">Password</p>
                    <div className="flex items-center">
                    <input
                      className="w-full p-2 rounded-l-md text-black focus:outline-none"
                      onChange={(e) => setpassword(e.target.value)} value={password}
                      placeholder="Enter New Password"
                      type={`${showpassword ? 'text' : 'Password'}`}
                      required
                    />
                    <p onClick={() => setshowpassword(!showpassword)} className="bg-white px-2 py-2.5 font-medium rounded-r-md text-[13px] cursor-pointer text-black">{showpassword ? 'Hide' : 'Show'}</p>
                    </div>
                  </div>
                  <div>
                    <p className="pb-1">Confirm Password</p>
                    <input
                      className="w-full p-2 rounded-md text-black focus:outline-none"
                      onChange={(e) => setconfirmpassword(e.target.value)} value={confirmpassword}
                      placeholder="Enter Confirm Password"
                      type="text"
                      required
                    />
                  </div>
                  <div className="pt-7">
                    <button onClick={() => submitdata()} className="w-full font-medium bg-blue-600 active:bg-blue-700 active:ring-1 ring-gray-700 py-2 rounded-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="font-semibold text-2xl py-5 p-4">
              Product Categories
            </p>
            <div className="grid grid-cols-3 gap-3 p-4">
              {categories.map((category) => (
                <div
                  className="hover:scale-105 transition-all bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-4 flex flex-col gap-3 justify-between rounded-lg"
                  key={category}
                >
                  <p className="font-semibold text-xl">{category}</p>
                  <p>Total products: {productCounts[category] || 0}</p>
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
