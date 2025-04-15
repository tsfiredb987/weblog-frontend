// src/pages/AdminDashboard.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

// 管理儀表板組件
const AdminDashboard = () => {
  // 儲存文章數據
  const [articles, setArticles] = useState([]);
  // 儲存新文章表單數據
  const [newArticle, setNewArticle] = useState({ title: '', content: '' });
  // 從上下文獲取 token
  const { token } = useContext(AuthContext);

  // 獲取文章列表
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/articles', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [token]);

  // 處理表單輸入
  const handleInputChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  // 新增文章
  const handleAddArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/articles',
        { ...newArticle, publish_date: new Date().toISOString() },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setArticles([...articles, response.data]);
      setNewArticle({ title: '', content: '' });
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  // 刪除文章
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/articles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setArticles(articles.filter((article) => article.id !== id));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div>
      <h1>管理文章</h1>
      {/* 新增文章表單 */}
      <form onSubmit={handleAddArticle} className="mb-4">
        <div className="mb-3">
          <label className="form-label">標題</label>
          <input
            type="text"
            name="title"
            value={newArticle.title}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">內容</label>
          <textarea
            name="content"
            value={newArticle.content}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          新增文章
        </button>
      </form>
      {/* 文章列表 */}
      <h3>現有文章</h3>
      {articles.map((article) => (
        <div key={article.id} className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(article.id)}
            >
              刪除
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;