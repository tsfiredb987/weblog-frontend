// src/utils/api.js
import axios from 'axios';

// 創建 axios 實例
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // 後端 API 基礎 URL
  timeout: 5000, // 請求超時
});

// 請求攔截器
api.interceptors.request.use(
  (config) => {
    // 從 localStorage 獲取 token
    const token = localStorage.getItem('token');
    if (token) {
      // 添加 Authorization 頭
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 響應攔截器
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // 未授權，清除 token 並跳轉至登入頁
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;