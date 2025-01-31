import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductTable from "./adminvegetable";
import Editform from "./Editform";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AdminDashboard = () => {
  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState("");
  const [setting, setSetting] = useState(false);
  const [showuser, setshowuser] = useState(false);
  const [productCounts, setProductCounts] = useState({});
  const [editProduct, setEditProduct] = useState(false);
  const [email, setemail] = useState('')
  const [emailerror, setemailError] = useState('');
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  const [showpassword, setshowpassword] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();

  console.log(startDate)

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

  const userdata = [
    {
      name: 'John Dow',
      email: 'john123@gmail.com',
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, odio!',
      date: '20/01/2025'
    },
    {
      name: 'Leery Caul',
      email: 'leery123@gmail.com',
      message: 'amet consectetur adipisicing elit. Maiores, odio!',
      date: '27/01/2025'
    },
    {
      name: 'Robert Nikosn',
      email: 'robert@gmail.com',
      message: 'dolores quibusdam vel consectetur, cupiditate saepe laboriosam illum. Quisquam, nisi exercitationem.',
      date: '25/01/2025'
    },
    {
      name: 'Jash Kumar',
      email: 'jash123@gmail.com',
      message: 'cupiditate saepe laboriosam illum. Quisquam, nisi exercitationem.',
      date: '20/01/2025'
    },
  ]

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
              setshowuser(false)
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
              setshowuser(true)
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
              setshowuser(false)
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
        ) : showuser ? (
          <div className="">
            <div className="relative flex justify-between px-12">
              <p className="font-semibold text-2xl">User Details</p>
              <div className="">
                <button  onClick={() => setShowCalendar(!showCalendar)} className={`${startDate === null ? 'block' : 'hidden'} px-3 bg-blue-200 active:bg-blue-300 py-1 rounded-lg`}>Filter</button>
                <button onClick={() => {
                  setShowCalendar(false)
                  setStartDate(null)
                }} className={`${startDate === null ? 'hidden' : 'block'} ml-[52px] px-3 bg-red-100 active:bg-red-200 py-1 rounded-lg`}>Cancel Filter</button>
                <span className={`${startDate === null ? 'hidden' : 'block'} absolute text-[13px] pt-1`}>Filtered By Date: {startDate}</span>
              </div>  
              {showCalendar && (
                <div className="absolute right-12 top-8 bg-white p-2 rounded shadow-md">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date.toLocaleDateString("en-GB"))
                      setShowCalendar(!showCalendar)
                    }}
                    inline
                  />
                </div>
              )}
            </div>
            <div className="py-4 px-6">
              <table className="table-auto w-[90%]">
                <thead>
                  <tr className="border-b border-gray-400">
                    <th className="text-left py-3 px-4 w-36">Full Name</th>
                    <th className="text-left py-3 px-4 w-48">Email</th>
                    <th className="text-left py-3 px-4">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {startDate === null ? (
                    userdata.map((data, index)=>(
                    <tr className="border-b border-gray-200" key={index}>
                        <td className="px-4">{data.name}</td>
                        <td className="py-3 px-4">{data.email}</td>
                        <td className="px-4 py-3">{data.message}</td>
                    </tr>
                    ))
                  ) : (
                    userdata.filter((data) => data.date === startDate).map((data, index) => (
                      <tr className="border-b border-gray-200" key={index}>
                        <td className="px-4">{data.name}</td>
                        <td className="py-3 px-4">{data.email}</td>
                        <td className="px-4 py-3">{data.message}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
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
