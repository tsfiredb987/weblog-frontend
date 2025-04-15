// src/pages/ArticleList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../utils/api';
import { Link } from 'react-router-dom';

// 文章列表組件
const ArticleList = () => {
  // 儲存文章數據
  const [articles, setArticles] = useState([]);
  // 儲存搜尋關鍵詞
  const [searchTerm, setSearchTerm] = useState('');

  // 獲取文章數據
  useEffect(() => {
    // 定義異步函數
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/articles');
        // 配置 axios 攔截器，自動為每個請求附加 JWT token。
        // 統一處理 API 錯誤（例如 401 未授權）。
        // const response = await api.get('/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []); // 空依賴表示僅在組件掛載時執行

  // 處理搜尋輸入
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // 過濾文章
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>文章列表</h1>
      {/* 搜尋輸入框 */}
      <input
        type="text"
        placeholder="搜尋文章標題..."
        value={searchTerm}
        onChange={handleSearch}
        className="form-control mb-3"
      />
      {/* 文章列表 */}
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <div key={article.id} className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
              </h5>
              <p className="card-text">{new Date(article.publish_date).toLocaleDateString()}</p>
            </div>
          </div>
        ))
      ) : (
        <p>無符合條件的文章</p>
      )}
    </div>
  );
};

export default ArticleList;