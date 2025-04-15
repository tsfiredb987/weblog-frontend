// src/pages/Playground.js
import React, { useState } from 'react';

// 待開發頁組件
const Playground = () => {
  // 計數器狀態
  const [count, setCount] = useState(0);
  // 表單輸入狀態
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>待開發頁</h1>
      {/* 計數器 */}
      <div className="mb-4">
        <h3>計數器</h3>
        <p>當前計數：{count}</p>
        <button
          className="btn btn-primary me-2"
          onClick={() => setCount(count + 1)}
        >
          增加
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setCount(count - 1)}
        >
          減少
        </button>
      </div>
      {/* 動態表單 */}
      <div>
        <h3>動態表單</h3>
        <input
          type="text"
          className="form-control mb-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="輸入內容..."
        />
        <p>你輸入的內容：{input}</p>
      </div>
    </div>
  );
};

export default Playground;