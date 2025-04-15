// src/pages/ArticleDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// 文章詳情組件
const ArticleDetail = () => {
  // 從路由參數獲取文章 ID
  const { id } = useParams();
  // 儲存文章數據
  const [article, setArticle] = useState(null);
  // 儲存載入狀態
  const [loading, setLoading] = useState(true);

  // 獲取單篇文章
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]); // 當 id 變化時重新獲取

  // 顯示載入狀態
  if (loading) return <div>載入中...</div>;
  // 顯示無數據提示
  if (!article) return <div>文章不存在</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{new Date(article.publish_date).toLocaleDateString()}</p>
      <div>{article.content}</div>
    </div>
  );
};

export default ArticleDetail;