// ProductTable.js
import React from "react";

const ProductTable = ({ category, products, onEdit, onDelete }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">{category} Products</h3>
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 px-4">Image</th>
            <th className="border-b py-2 px-4">Title</th>
            <th className="border-b py-2 px-4">Weight</th>
            <th className="border-b py-2 px-4">Price</th>
            <th className="border-b py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-2 px-4">{product.title}</td>
              <td className="py-2 px-4">{product.weight}</td>
              <td className="py-2 px-4">{product.price}</td>
              <td className="py-2 px-4 flex space-x-2">
                <button
                  onClick={() => onEdit(product)}
                  className="bg-blue-600 text-white py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product)}
                  className="bg-red-600 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
