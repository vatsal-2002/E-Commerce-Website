import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const ProductTable = ({ category, products, onEdit, onDelete }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [file, setFile] = useState(null);
  const [updatedProducts, setUpdatedProducts] = useState(products);

  const getApiEndpoint = (category) => {
    switch (category) {
      case "Fruit & Vegetables":
        return "http://localhost:5000/api/adminfruit";
      case "Dairy, Bread & Eggs":
        return "http://localhost:5000/api/adminallitem";
      case "Chicken, Meat & Fish":
        return "http://localhost:5000/api/adminallMeat";
      case "Pet Food":
        return "http://localhost:5000/api/adminallPetFood";
      case "Cold Drinks & Juices":
        return "http://localhost:5000/api/adminallColdDrinksJuices";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchUpdatedProducts = async () => {
      try {
        const apiEndpoint = getApiEndpoint(category);
        if (apiEndpoint) {
          const response = await axios.get(apiEndpoint);
          setUpdatedProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        alert("Failed to fetch updated products.");
      }
    };

    if (category) {
      fetchUpdatedProducts();
    }
  }, [category]);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFile(null);
  };

  const handleImageChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", selectedProduct.title);
    formData.append("weight", selectedProduct.weight);
    formData.append("price", selectedProduct.price);

    if (file) {
      const imageFile = document.querySelector('input[type="file"]').files[0];
      formData.append("image", imageFile);
    }

    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found");
      return;
    }

    let updateApiEndpoint = "";
    switch (category) {
      case "Fruit & Vegetables":
        updateApiEndpoint = `http://localhost:5000/api/adminfruit/${selectedProduct._id}`;
        break;
      case "Dairy, Bread & Eggs":
        updateApiEndpoint = `http://localhost:5000/api/adminupdateitem/${selectedProduct._id}`;
        break;
      case "Chicken, Meat & Fish":
        updateApiEndpoint = `http://localhost:5000/api/adminupdateMeat/${selectedProduct._id}`;
        break;
      case "Pet Food":
        updateApiEndpoint = `http://localhost:5000/api/adminupdatePetFood/${selectedProduct._id}`;
        break;
      case "Cold Drinks & Juices":
        updateApiEndpoint = `http://localhost:5000/api/adminupdateColdDrinkJuice/${selectedProduct._id}`;
        break;
      default:
        break;
    }

    try {
      const response = await axios.put(updateApiEndpoint, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Product updated successfully", response.data);

      const updatedProductList = await axios.get(getApiEndpoint(category));
      setUpdatedProducts(updatedProductList.data);

      setSelectedProduct(null);
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product. Please try again.");
    }
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {!selectedProduct ? (
        <div className="px-6">
          <div className="flex justify-between items-center px-6">
            <h3 className="text-2xl font-semibold mb-4">{category} Products</h3>
            <Button className="bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-200 hover:bg-blue-700 hover:text-white">
              Add New Item
            </Button>
          </div>

          <table className="table-fixed w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-400">
                <th className="py-2 px-4">Image</th>
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Weight</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {updatedProducts.map((product, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 px-4">
                    <img
                      src={`http://localhost:5000/${product.image}`}
                      alt={product.title}
                      className="w-16 h-16 my-auto object-cover"
                    />
                  </td>
                  <td className="py-2 px-4">{product.title}</td>
                  <td className="py-2 px-4">{product.weight}</td>
                  <td className="py-2 px-4">${product.price}</td>
                  <td className="pt-6 px-4 flex gap-2 h-full items-center">
                    <Button
                      onClick={() => handleEdit(product)}
                      className="bg-blue-600 text-white h-full py-2 px-4 rounded-lg transition-all duration-200 hover:bg-blue-700 hover:text-white"
                    >
                      Edit
                    </Button>
                    <button
                      onClick={() => onDelete(product)}
                      className="text-red-600 h-full py-2 px-4 rounded-lg transition-all duration-200 hover:bg-red-700 hover:text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center p-6 bg-gray-100">
          <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-start text-blue-600">
              Edit Product
            </h3>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-1/2 space-y-4">
                  <div>
                    <label className="text-lg font-medium">Title:</label>
                    <input
                      value={selectedProduct.title}
                      onChange={(e) =>
                        setSelectedProduct({
                          ...selectedProduct,
                          title: e.target.value,
                        })
                      }
                      className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="text-lg font-medium">Weight:</label>
                    <input
                      value={selectedProduct.weight}
                      onChange={(e) =>
                        setSelectedProduct({
                          ...selectedProduct,
                          weight: e.target.value,
                        })
                      }
                      className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="text-lg font-medium">Price:</label>
                    <input
                      value={selectedProduct.price}
                      onChange={(e) =>
                        setSelectedProduct({
                          ...selectedProduct,
                          price: e.target.value,
                        })
                      }
                      className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                    />
                  </div>
                </div>

                <div className="w-1/2 space-y-4">
                  <div>
                    <label className="text-lg font-medium">Image:</label>
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {file ? (
                      <img
                        src={file}
                        alt="Selected"
                        className="w-32 h-32 object-cover border-2 border-gray-200 rounded-md shadow-sm mt-4"
                      />
                    ) : (
                      <img
                        src={`http://localhost:5000/${selectedProduct.image}`}
                        alt={selectedProduct.title}
                        className="w-32 h-32 object-cover border-2 border-gray-200 rounded-md shadow-sm mt-4"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg transition-all duration-200 hover:bg-gray-600"
                >
                  Close
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg transition-all duration-200 hover:bg-blue-700"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductTable;
