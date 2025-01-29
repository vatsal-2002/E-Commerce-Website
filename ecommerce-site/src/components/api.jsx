import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchProducts = async (category) => {
  const endpoint = getApiEndpoint(category);
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export const createProduct = async (category, formData, token) => {
  const apiEndpoint = getApiEndpointForCreate(category);
  try {
    const response = await axios.post(apiEndpoint, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error("Failed to add product");
  }
};

export const updateProduct = async (category, productId, formData, token) => {
  const apiEndpoint = getApiEndpointForUpdate(category, productId);
  try {
    const response = await axios.put(apiEndpoint, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw new Error("Failed to update product");
  }
};

const getApiEndpoint = (category) => {
  switch (category) {
    case "Fruit & Vegetables":
      return `${API_URL}/api/adminfruit`;
    case "Dairy, Bread & Eggs":
      return `${API_URL}/api/adminallitem`;
    case "Chicken, Meat & Fish":
      return `${API_URL}/api/adminallMeat`;
    case "Pet Food":
      return `${API_URL}/api/adminallPetFood`;
    case "Cold Drinks & Juices":
      return `${API_URL}/api/adminallColdDrinksJuices`;
    default:
      return "";
  }
};

const getApiEndpointForCreate = (category) => {
  switch (category) {
    case "Fruit & Vegetables":
      return `${API_URL}/api/createadminfruit`;
    case "Dairy, Bread & Eggs":
      return `${API_URL}/api/admincreateitem`;
    case "Chicken, Meat & Fish":
      return `${API_URL}/api/admincreateMeat`;
    case "Pet Food":
      return `${API_URL}/api/admincreatePetFood`;
    case "Cold Drinks & Juices":
      return `${API_URL}/api/admincreateColdDrinkJuice`;
    default:
      return "";
  }
};

const getApiEndpointForUpdate = (category, productId) => {
  switch (category) {
    case "Fruit & Vegetables":
      return `${API_URL}/api/adminfruit/${productId}`;
    case "Dairy, Bread & Eggs":
      return `${API_URL}/api/adminupdateitem/${productId}`;
    case "Chicken, Meat & Fish":
      return `${API_URL}/api/adminupdateMeat/${productId}`;
    case "Pet Food":
      return `${API_URL}/api/adminupdatePetFood/${productId}`;
    case "Cold Drinks & Juices":
      return `${API_URL}/api/adminupdateColdDrinkJuice/${productId}`;
    default:
      return "";
  }
};
