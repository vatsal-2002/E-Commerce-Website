import React, { useState, useEffect } from "react";

const EditProductForm = ({ product, onSubmit, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [file, setFile] = useState(null);

  useEffect(() => {
    setSelectedProduct(product);
  }, [product]);

  const handleImageChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", selectedProduct.title);
    formData.append("weight", selectedProduct.weight);
    formData.append("price", selectedProduct.price);

    if (file) {
      const imageFile = document.querySelector('input[type="file"]').files[0];
      formData.append("image", imageFile);
    }

    onSubmit(formData);
  };

  return (
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
                className="w-32 h-32 object-cover mt-4"
              />
            ) : (
              <img
                src={`http://localhost:5000/${selectedProduct.image}`}
                alt={selectedProduct.title}
                className="w-32 h-32 object-cover mt-4"
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg"
        >
          Close
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditProductForm;
