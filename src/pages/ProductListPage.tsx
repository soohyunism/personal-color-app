import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  imageUrl: string;
}

const mockProducts: Product[] = [
  { id: 1, name: '소프트 립 라커', brand: '뷰티 브랜드 A', price: '18,000', imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: '글로우 파운데이션', brand: '코스메틱 B', price: '32,000', imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: '데일리 아이 팔레트', brand: '컬러풀 C', price: '25,000', imageUrl: 'https://via.placeholder.com/300' },
  { id: 4, name: '수분 진정 크림', brand: '닥터 스킨 D', price: '28,000', imageUrl: 'https://via.placeholder.com/300' },
];

function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div>상품 목록을 불러오는 중...</div>;
  }

  // 👇 화면에 보여줄 JSX를 반환(return)하는 이 부분이 핵심입니다.
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">맞춤 제품 추천</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// 👇 컴포넌트를 내보내는 export 코드도 필수입니다.
export default ProductListPage;