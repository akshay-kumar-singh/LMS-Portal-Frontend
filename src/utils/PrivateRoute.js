import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const PrivateRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('token');

  // Redirect to the homepage if no token exists
  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    // Decode and validate the token
    const decodedToken = jwtDecode(token);

    // Check if the user's role matches the allowed roles
    if (!allowedRoles.includes(decodedToken.role)) {
      return <Navigate to="/" />;
    }

    return <Outlet />;
  } catch (error) {
    // If token decoding fails (e.g., invalid or corrupted), clear token and redirect
    console.error("Invalid or corrupted token:", error);
    localStorage.removeItem('token');
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
