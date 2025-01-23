import React from "react";

const ProductTable = ({ category, products, onEdit, onDelete }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">{category} Products</h3>
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
          {products.map((product, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="py-2 px-4">
                <img
                  src={`http://localhost:5000/${product.image}`} // Adjust path if necessary
                  alt={product.title}
                  className="w-16 h-16 my-auto object-cover"
                />
              </td>
              <td className="py-2 px-4">{product.title}</td>
              <td className="py-2 px-4">{product.weight}</td>
              <td className="py-2 px-4">${product.price}</td>
              <td className="pt-6 px-4 flex gap-2 h-full items-center">
                <button
                  onClick={() => onEdit(product)}
                  className="bg-blue-600 hover:bg-blue-700 text-white h-full my-auto py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product)}
                  className="bg-red-600 hover:bg-red-700 text-white h-full py-1 px-3 rounded"
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
