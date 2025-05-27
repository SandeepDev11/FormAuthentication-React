import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const token = Cookies.get('token');

  // If token is not present, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If token is valid, render the children (private page)
  return children;
};

export default PrivateRoute;
