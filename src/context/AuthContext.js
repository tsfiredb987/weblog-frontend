// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// 創建認證上下文
export const AuthContext = createContext();

// 認證提供者組件
export const AuthProvider = ({ children }) => {
  // 管理登入狀態
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // 管理 JWT token
  const [token, setToken] = useState(null);

  // 檢查 localStorage 中的 token
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
  }, []);

  // 模擬登入（後續串接後端）
  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  // 登出
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};