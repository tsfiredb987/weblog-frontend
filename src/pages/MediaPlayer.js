// src/pages/MediaPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

// 媒體播放組件
const MediaPlayer = () => {
  return (
    <div>
      <h1>媒體播放</h1>
      {/* 嵌入 YouTube 影片 */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // 示例影片
        controls // 顯示播放控制
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default MediaPlayer;