// components/ProductCard.js

import React from 'react';
import Image from 'next/image';

const ProductCard = ({ src = 'Product Image' , alt = 'Product Image' }) => {
  // Fallback image if src is missing
  const imageSrc = src

  return (
    <div className="card">
      <Image 
        src={imageSrc} 
        alt={alt} 
        layout="responsive" 
        width={300} 
        height={300} 
        className="product-image"
      />

    </div>
  );
};

export default ProductCard;
