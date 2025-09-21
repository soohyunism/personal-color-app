import React from 'react';
import { Link } from 'react-router-dom';

// 하트 아이콘 import 줄을 삭제했습니다.

function MainPage() {
  return (
    // 전체 화면을 채우고, 줄무늬 배경을 적용하며, 모든 요소를 중앙에 정렬합니다.
    <div className="min-h-screen striped-background flex flex-col items-center justify-center p-4">
      
      {/* 제목을 담는 컨테이너 */}
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center">
        
        {/* 제목 (아이콘 없이 텍스트만) */}
        <h1 className="text-5xl font-extrabold text-[#FF00CC] mb-4">
          퍼스널 컬러 진단
        </h1>

        {/* 부제목 */}
        <p className="text-lg text-gray-700 mb-8">
          AI가 당신의 퍼스널 컬러를 찾아드립니다.
        </p>
        
        {/* 시작하기 버튼 */}
        <Link to="/camera">
          <button className="bg-[#D946EF] hover:bg-[#c026d3] text-white font-bold py-4 px-10 rounded-lg text-2xl shadow-md border-2 border-white/50 transform hover:scale-105 transition-transform">
            시작하기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;