// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import FinanceDashboard from './pages/FinanceDashboard';
import MediaPlayer from './pages/MediaPlayer';
import Playground from './pages/Playground';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

// 主應用組件
function App() {
  return (
    // 提供認證上下文
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/finance" element={<FinanceDashboard />} />
            <Route path="/media" element={<MediaPlayer />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/login" element={<Login />} />
            {/* 受保護的管理頁面 */}
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;