// src/pages/Login.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// 登入組件
const Login = () => {
  // 表單數據
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  // 錯誤訊息
  const [error, setError] = useState('');
  // 從上下文獲取登入函數
  const { login } = useContext(AuthContext);
  // 導航鉤子
  const navigate = useNavigate();

  // 處理表單輸入
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // 提交登入請求
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', credentials);
      login(response.data.token); // 儲存 token
      navigate('/admin'); // 跳轉至管理頁
    } catch (err) {
      setError('登入失敗，請檢查帳號密碼');
    }
  };

  return (
    <div>
      <h1>登入</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">使用者名稱</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">密碼</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          登入
        </button>
      </form>
    </div>
  );
};

export default Login;