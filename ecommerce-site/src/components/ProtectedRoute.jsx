import React from "react";
import { Navigate } from "react-router-dom";

// A higher-order component to protect routes
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  return children; // Allow access to the protected route
};

export default ProtectedRoute;
