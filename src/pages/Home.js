// src/pages/Home.js
import React from 'react';

// 首頁組件
const Home = () => {
  return (
    <div>
      <h1>關於我</h1>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2025/02/25/16/36/bird-9431014_1280.jpg"
          alt="Profile"
          className="card-img-top"
          style={{ maxWidth: '150px' }}
        />
        <div className="card-body">
          <h5 className="card-title">XXX</h5>
          <p className="card-text">
            <strong>學歷</strong>：XXX 大學，資訊工程學系<br />
            <strong>經歷</strong>：參與「待辦事項管理系統」專案，技術棧包含 React、Spring Boot、Azure<br />
            <strong>興趣</strong>：程式設計、財經分析、影音創作
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;