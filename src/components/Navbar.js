// src/components/Navbar.js
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// 導航列組件
const Navbar = () => {
  // 從上下文獲取認證狀態與登出函數
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* 品牌標誌 */}
        <NavLink className="navbar-brand" to="/">
          Kuang's Weblog
        </NavLink>
        {/* 移動端漢堡選單按鈕 */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* 選單內容 */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to="/"
              >
                首頁
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to="/articles"
              >
                文章
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to="/finance"
              >
                財經消息
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to="/media"
              >
                媒體播放
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to="/playground"
              >
                待開發
              </NavLink>
            </li>
            {/* 僅在登入時顯示管理選項 */}
            {isAuthenticated && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  to="/admin"
                >
                  管理
                </NavLink>
              </li>
            )}
            {/* 根據登入狀態顯示登入或登出 */}
            {isAuthenticated ? (
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={logout}>
                  登出
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  to="/login"
                >
                  登入
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;