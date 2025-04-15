// src/pages/FinanceDashboard.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// 註冊 Chart.js 組件
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// 財經儀表板組件
const FinanceDashboard = () => {
  // 控制顯示模式（表格或圖表）
  const [view, setView] = useState('table');

  // 模擬財經數據（後續可替換為 API）
  const data = [
    { date: '2025-04-01', gdp: 21000, index: 35000, exchange: 1.1 },
    { date: '2025-04-02', gdp: 21100, index: 35200, exchange: 1.12 },
    { date: '2025-04-03', gdp: 21200, index: 34900, exchange: 1.11 },
  ];

  // 圖表數據
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: '股市指數',
        data: data.map((item) => item.index),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1>財經消息</h1>
      {/* 切換按鈕 */}
      <button
        className="btn btn-primary mb-3"
        onClick={() => setView(view === 'table' ? 'chart' : 'table')}
      >
        切換為{view === 'table' ? '圖表' : '表格'}
      </button>
      {view === 'table' ? (
        // 表格顯示
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>日期</th>
              <th>GDP (億美元)</th>
              <th>股市指數</th>
              <th>匯率 (美元兌歐元)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.gdp}</td>
                <td>{item.index}</td>
                <td>{item.exchange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // 圖表顯示
        <Line data={chartData} options={{ responsive: true }} />
      )}
    </div>
  );
};

export default FinanceDashboard;