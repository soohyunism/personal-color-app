import React from 'react';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  imageUrl: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-right font-semibold mt-2">{product.price}원</p>
      </div>
    </div>
  );
}

export default ProductCard;