import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

function CameraPage() {
  const [imgSrc, setImgSrc] = React.useState<string | null>(null);
  const webcamRef = React.useRef<Webcam>(null);
  const navigate = useNavigate();

  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const retake = () => {
    setImgSrc(null);
  };

  const handleSubmit = () => {
    if (!imgSrc) {
      alert('사진을 먼저 등록해주세요!');
      return;
    }
    navigate('/loading', { state: { image: imgSrc } });
  };

  // 👇 화면에 보여줄 JSX 내용을 return합니다.
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">📷 사진을 올려주세요</h1>

      {imgSrc ? (
        <img src={imgSrc} alt="Captured" className="rounded-lg shadow-lg" />
      ) : (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded-lg shadow-lg"
        />
      )}

      <div className="mt-8">
        {imgSrc ? (
          <div className="flex space-x-4">
            <button
              onClick={retake}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
              다시 찍기
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              이 사진 사용
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <button
              onClick={capture}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              찰칵! 촬영하기
            </button>
            <label className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
              갤러리에서 선택
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        )}
      </div>

      <Link to="/" className="mt-8">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          뒤로 가기
        </button>
      </Link>
    </div>
  );
}

// 👇 컴포넌트를 내보내는 export 코드
export default CameraPage;