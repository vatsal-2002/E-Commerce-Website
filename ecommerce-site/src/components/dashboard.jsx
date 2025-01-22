import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductTable from "./adminvegetable";

const AdminDashboard = () => {
  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [setting, setsetting] = useState(null)

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
    "Chicken, Meat & Fish": [
      {
        title: "Chicken lolipop",
        weight: "100 g",
        price: "$3.50",
        image: "/path/to/chicken.jpg",
      },
      {
        title: "Hotdog",
        weight: "1 pcs",
        price: "$2.00",
        image: "/path/to/hotdog.jpg",
      },
      {
        title: "Salmon",
        weight: "200 g",
        price: "$4.50",
        image: "/path/to/salmon.jpg",
      }
    ],
    "Pet Food": [
      {
        title: "Dog food",
        weight: "500 g",
        price: "$20.00",
        image: "/path/to/dogfood.jpg"
      },
      {
        title: "Cat food",
        weight: "500 g",
        price: "$23.00",
        image: "/path/to/catfood.jpg"
      },
      {
        title: "Bird food",
        weight: "200 g",
        price: "$10.00",
        image: "/path/to/birdfood.jpg"
      },
      {
        title: "Fish food",
        weight: "100 g",
        price: "$10.00",
        image: "/path/to/fishfood.jpg"
      }
    ],
    "Cold Drinks & Juices": [
      {
        title: "Coca cola",
        weight: "150 ml",
        price: "$6.50",
        image: "/path/to/cocacola.jpg"
      },
      {
        title: "Sprite",
        weight: "150 ml",
        price: "$6.50",
        image: "/path/to/sprite.jpg"
      },
      {
        title: "Mix fruite",
        weight: "200 ml",
        price: "$10.00",
        image: "/path/to/mixfruite.jpg"
      },
    ]
  };

  const productsArray = Object.entries(products).map(([category, items]) => ({
    category,
    items,
  }));

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
                <p 
                  className="py-2 pl-6 cursor-pointer hover:bg-blue-700"
                  onClick={() => handleCategoryClick("Chicken, Meat & Fish")}                
                >
                  Chicken, Meat & Fish
                </p>
                <p 
                  className="py-2 pl-6 cursor-pointer hover:bg-blue-700"
                  onClick={() => handleCategoryClick("Pet Food")}
                >
                  Pet Food
                </p>
                <p 
                  className="py-2 pl-6 cursor-pointer hover:bg-blue-700"
                  onClick={() => handleCategoryClick("Cold Drinks & Juices")}
                >
                  Cold Drinks & Juices
                </p>
              </div>
            )}
          </div>

          <p
            // to="/admin/setting"
            onClick={() => setsetting(true)}
            className="cursor-pointer px-4 py-2 text-white hover:bg-blue-700"
          >
            Settings
          </p>
        </div>
      </div>

      <div className="flex-1  bg-gray-100">
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

        {selectedCategory ? (
          <ProductTable
            category={selectedCategory}
            products={products[selectedCategory]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : setting ? (
            <div className='relative h-[calc(100vh-105px)] overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-500'>
              <div className='absolute w-full right-96 h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300'></div>
              <div className='grid grid-cols-2 py-8 px-32'>
                  <div className='relative z-10'></div>
                  <div className='relative z-10 pt-6 pb-8 px-10 text-white bg-gradient-to-tl from-teal-300 to-cyan-600 rounded-2xl' style={{boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)'}}>
                      <p className='text-center text-2xl font-semibold'>Change Password</p>
                      <div className='flex flex-col gap-3 pt-4'>
                          <div>
                              <p className='pb-1'>Email</p>
                              <input className='w-full p-2 rounded-md text-black focus:outline-none' placeholder='Enter Your Email' type='email'/>
                          </div>
                          <div>
                              <p className='pb-1'>Password</p>
                              <input className='w-full p-2 rounded-md text-black focus:outline-none' placeholder='Enter New Password' type='password'/>
                          </div>
                          <div>
                              <p className='pb-1'>Confirm Password</p>
                              <input className='w-full p-2 rounded-md text-black focus:outline-none' placeholder='Enter Confirm Password' type='text'/>
                          </div>
                          <div className='pt-7'>
                              <button className='w-full font-medium bg-gradient-to-tl from-cyan-500 to-blue-500 py-2 rounded-lg bg-'>Submit</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        ) : (
          <>
          <p className="font-semibold text-2xl py-5 px-6">Product Categories</p>
          <div className="grid grid-cols-3 gap-3 px-6">
            {productsArray.map((categories, index)=>(
              <div className="hover:scale-105 transition-all bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-4 flex flex-col gap-3 justify-between rounded-lg" key={index}> 
                <p className="font-semibold text-xl">{categories.category}</p>
                <p>Total products: {categories.items.length}</p>
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
