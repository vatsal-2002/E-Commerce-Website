import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchProducts, createProduct, updateProduct } from "./api";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import Button from "@mui/material/Button";

const ProductTable = ({ category, onDelete }) => {
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddNewItemVisible, setIsAddNewItemVisible] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts(category);
        setUpdatedProducts(products);
      } catch (error) {
        alert(error.message);
      }
    };

    if (category) {
      getProducts();
    }
  }, [category]);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsAddNewItemVisible(true);
  };

  const handleAddNewItemClick = () => {
    setSelectedProduct(null);
    setIsAddNewItemVisible(true);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setIsAddNewItemVisible(false);
  };

  const handleSubmit = async (formData) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found");
      return;
    }

    try {
      if (selectedProduct) {
        await updateProduct(category, selectedProduct._id, formData, token);
        alert("Product updated successfully");
      } else {
        await createProduct(category, formData, token);
        alert("Product added successfully");
      }
      const products = await fetchProducts(category);
      setUpdatedProducts(products);
      handleClose();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found");
      return;
    }

    try {
      const apiEndpoint = getDeleteApiEndpoint(category, product._id);

      const response = await axios.delete(apiEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(response.data.message);

      // Fetch the updated list of products after deletion
      const products = await fetchProducts(category);
      setUpdatedProducts(products);
    } catch (error) {
      alert("Error deleting product: " + error.message);
    }
  };

  const getDeleteApiEndpoint = (category, productId) => {
    switch (category) {
      case "Fruit & Vegetables":
        return `http://localhost:5000/api/admindeletefruit/${productId}`;
      case "Dairy, Bread & Eggs":
        return `http://localhost:5000/api/admindeleteitem/${productId}`;
      case "Chicken, Meat & Fish":
        return `http://localhost:5000/api/admindeleteMeat/${productId}`;
      case "Pet Food":
        return `http://localhost:5000/api/admindeletePetFood/${productId}`;
      case "Cold Drinks & Juices":
        return `http://localhost:5000/api/admindeleteColdDrinkJuice/${productId}`;
      default:
        return "";
    }
  };

  return (
    <div>
      {!selectedProduct && !isAddNewItemVisible ? (
        <div className="px-6">
          <div className="flex justify-between items-center px-6">
            <h3 className="text-2xl font-semibold mb-4">{category} Products</h3>
            <Button
              onClick={handleAddNewItemClick}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
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
                  <td className="pt-5 px-4 flex gap-2 h-full items-center">
                    <Button
                      onClick={() => handleEdit(product)}
                      className="relative top-1 bg-blue-600 text-white h-full py-2 px-3 rounded-md"
                    >
                      Edit
                    </Button>
                    <button
                      onClick={() => handleDelete(product)}
                      className="relative top-0.5 text-red-600 py-1.5 px-3 rounded-[4px] hover:bg-red-50"
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
            {isAddNewItemVisible && !selectedProduct ? (
              <AddProductForm onSubmit={handleSubmit} onClose={handleClose} />
            ) : (
              <EditProductForm
                product={selectedProduct}
                onSubmit={handleSubmit}
                onClose={handleClose}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
