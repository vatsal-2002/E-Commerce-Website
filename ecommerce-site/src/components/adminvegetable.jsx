// ProductTable.js
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductTable = ({ category, products, onEdit, onDelete }) => {

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [file, setFile] = useState();
  
  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
    setFile()
  };

  function handleChange(e) {
      // console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
    <div className="px-6">
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
                
                  <Button
                    onClick={() => handleOpen(product)}
                    // onClick={() => onEdit(product)}
                    className="bg-blue-600 text-black h-full py-1 px-3 rounded"
                  >
                    Edit
                  </Button>
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
            {selectedProduct && ( 
                <div className="flex flex-col gap-3">
                  <div>
                    <p>Edit Image :</p>
                    <input type="file" onChange={handleChange} />
                    <img className="w-72" src={file} alt=""/>
                  </div>
                  <div>
                    <p>Edit Title :</p>
                    <input
                      defaultValue={selectedProduct.title}
                      className="border rounded-lg w-full py-1 px-2"
                      type="text"
                    />
                  </div>
                  <div>
                    <p>Edit Weight :</p>
                    <input
                      defaultValue={selectedProduct.weight}
                      className="border rounded-lg w-full py-1 px-2"
                      type="text"
                    />
                  </div>
                  <div>
                    <p>Edit Price :</p>
                    <input
                      defaultValue={selectedProduct.price}
                      className="border rounded-lg w-full py-1 px-2"
                      type="text"
                    />
                  </div>
                  <div>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
                      Submit
                    </button>
                  </div>
                </div>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
    </>
  );
};

export default ProductTable;
