import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './index.scss';

const VideoPlayer = () => {
  const [searchParams] = useSearchParams();
  const videoUrl = searchParams.get('url');
  const title = searchParams.get('title');
  const videoRef = useRef(null);

  useEffect(() => {
    // 禁用右键菜单
    const handleContextMenu = (e) => {
      e.preventDefault();
      message.warning('禁止下载视频');
    };

    // 禁用键盘快捷键
    const handleKeyDown = (e) => {
      // 禁用常见的下载快捷键
      if (
        (e.ctrlKey && e.key === 's') || // Ctrl + S
        (e.ctrlKey && e.key === 'S') || 
        (e.metaKey && e.key === 's') || // Command + S (Mac)
        (e.metaKey && e.key === 'S')
      ) {
        e.preventDefault();
        message.warning('禁止下载视频');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleBack = () => {
    window.opener?.focus();
    window.close();
  };

  const renderVideoPlayer = () => {
    return (
      <video 
        ref={videoRef}
        controls 
        autoPlay 
        className="video-player"
        src={videoUrl}
        controlsList="nodownload" // 禁用下载按钮
        onContextMenu={e => e.preventDefault()} // 禁用右键菜单
        disablePictureInPicture // 禁用画中画
        disableRemotePlayback // 禁用远程播放
      >
        您的浏览器不支持视频播放
      </video>
    );
  };

  return (
    <div className="video-page">
      <div className="video-header">
        <Button 
          type="link" 
          icon={<ArrowLeftOutlined />} 
          onClick={handleBack}
        >
          返回课程
        </Button>
        <h1>{title}</h1>
      </div>
      <div className="video-container">
        {renderVideoPlayer()}
      </div>
    </div>
  );
};

export default VideoPlayer;