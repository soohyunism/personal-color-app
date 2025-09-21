import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 가짜 분석 기록 데이터
const mockTrackingData = [
  { date: '09-15', skinTone: 23, safetyScore: 85 },
  { date: '09-16', skinTone: 22.8, safetyScore: 88 },
  { date: '09-17', skinTone: 22.5, safetyScore: 90 },
  { date: '09-18', skinTone: 22.6, safetyScore: 89 },
  { date: '09-19', skinTone: 22.3, safetyScore: 92 },
  { date: '09-20', skinTone: 22.1, safetyScore: 94 },
  { date: '09-21', skinTone: 22.0, safetyScore: 95 },
];

function TrackingPage() {
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">성장일기</h1>
      <div className="w-full h-80 bg-gray-100 p-4 rounded-lg shadow-inner">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockTrackingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="skinTone" stroke="#8884d8" name="스킨톤 변화" />
            <Line type="monotone" dataKey="safetyScore" stroke="#82ca9d" name="안전도 점수" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* 여기에 날짜별 상세 기록 리스트를 추가할 수 있습니다. */}
    </div>
  );
}

export default TrackingPage;
