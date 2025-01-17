import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const UserDetail = () => {
  const [users, setUsers] = useState([]); // State to hold users data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch users from the backend when the component is mounted
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data); // Set the users in the state
        setLoading(false); // Stop the loading indicator
      } catch (error) {
        setError(error.message); // Set the error message
        setLoading(false); // Stop the loading indicator
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8">
        <h1 className="text-2xl font-bold mb-4">User Details</h1>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user._id}
                className="p-4 border border-gray-300 rounded-md"
              >
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserDetail;
