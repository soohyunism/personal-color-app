import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import CameraPage from './pages/CameraPage';
import LoadingPage from './pages/LoadingPage'; // 새로 추가
import ResultPage from './pages/ResultPage'; // 새로 추가

// ... imports
import ProductListPage from './pages/ProductListPage';
import TrackingPage from './pages/TrackingPage';

// ... function App()
      <Routes>
        {/* ... 기존 Route들 ... */}
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
// ...


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/camera" element={<CameraPage />} />
        
        {/* 아래 두 줄을 추가해주세요 */}
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;