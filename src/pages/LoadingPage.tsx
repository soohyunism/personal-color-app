import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoadingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const image = location.state?.image; // CameraPage에서 보낸 이미지 데이터 받기

  // 이 페이지가 열리자마자 서버로 데이터를 전송합니다.
  useEffect(() => {
    // 이미지가 없으면 카메라 페이지로 돌려보냅니다.
    if (!image) {
      alert('이미지가 없습니다. 다시 시도해주세요.');
      navigate('/camera');
      return;
    }

    const analyzeImage = async () => {
      try {
        const serverUrl = 'http://localhost:8000/api/analyze';
        const payload = { image };
        
        const response = await axios.post(serverUrl, payload);
        
        console.log('분석 성공:', response.data);
        
        // 분석 결과를 가지고 결과 페이지로 이동합니다.
        navigate('/result', { state: { resultData: response.data } });

      } catch (error) {
        console.error('분석 실패:', error);
        alert('분석에 실패했습니다. 이전 페이지로 돌아갑니다.');
        navigate('/camera'); // 실패 시 카메라 페이지로 돌아가기
      }
    };

    analyzeImage(); // 함수 실행
  }, [image, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* 간단한 로딩 스피너 애니메이션 */}
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
      <h2 className="text-2xl font-semibold mt-8">AI가 분석 중입니다...</h2>
      <p className="text-gray-600 mt-2">잠시만 기다려주세요.</p>
    </div>
  );
}

export default LoadingPage;