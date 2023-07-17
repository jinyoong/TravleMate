import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Move = () => {
  const navigate  = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          // 페이지 이동 로직을 여기에 추가
          navigate('/chat');
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Loading...</h1>
      <div>Progress: {progress}%</div>
    </div>
  );
};

export default Move
