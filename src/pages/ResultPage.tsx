import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

// 결과 데이터의 타입을 미리 정의합니다 (TypeScript)
interface AnalysisResult {
  personalColor: string;
  skinTone: string;
  colorPalette: {
    name: string;
    hex: string;
  }[];
  description: string;
}

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. useState: 서버로부터 받은 결과 데이터를 저장할 공간
  const [result, setResult] = useState<AnalysisResult | null>(null);

  // 2. 페이지가 로드될 때, LoadingPage에서 보낸 데이터를 확인하고 state에 저장
  useEffect(() => {
    // location.state에 resultData가 있는지 확인
    if (location.state && location.state.resultData) {
      setResult(location.state.resultData);
    } else {
      // 데이터가 없으면 사용자가 잘못 접근한 것이므로 메인 페이지로 보냄
      alert('분석 결과가 없습니다. 다시 시도해주세요.');
      navigate('/');
    }
  }, [location, navigate]);

  // 3. 데이터가 아직 로드되지 않았을 때 보여줄 화면
  if (!result) {
    return <div>결과를 불러오는 중...</div>;
  }

  // 4. 데이터가 정상적으로 로드되었을 때 보여줄 결과 화면
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          AI 분석 결과
        </h1>
        <p className="text-center text-gray-500 mb-6">당신만의 매력을 찾아보세요!</p>

        {/* 퍼스널컬러 결과 */}
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md mb-6">
          <p className="font-bold text-lg">"당신은 <span className="text-2xl">{result.personalColor}</span> 입니다."</p>
          <p className="mt-2 text-sm">{result.description}</p>
        </div>
        
        {/* 추천 컬러 팔레트 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">어울리는 컬러</h2>
          <div className="flex flex-wrap gap-2">
            {result.colorPalette.map((color, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-full shadow-md"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="text-xs mt-2 text-gray-600">{color.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 추천 제품 보러가기 버튼 */}
        <div className="text-center mt-8">
          <Link to="/products">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
              맞춤 제품 추천받기 🛍️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;