// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// 受保護路由組件
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // 如果未登入，重定向到登入頁
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;