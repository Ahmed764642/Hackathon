import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    { src: '/Syltherine.png', alt: 'Image 1' },
    { src: '/Leviosa.png', alt: 'Image 2' },
    { src: '/Lolito.png', alt: 'Image 3' },
    { src: '/Respira.png', alt: 'Image 4' },
    { src: '/Syltherine.png', alt: 'Image 5' },
    { src: '/Leviosa1.png', alt: 'Image 6' },
    { src: '/Lolito.png', alt: 'Image 7' },
    { src: '/Respira.png', alt: 'Image 8' },
    { src: '/Syltherine.png', alt: 'Image 9' },
    { src: '/Leviosa1.png', alt: 'Image 10' },
    { src: '/Lolito.png', alt: 'Image 11' },
    { src: '/Respira.png', alt: 'Image 12' },
    { src: '/Syltherine.png', alt: 'Image 13' },
    { src: '/Leviosa1.png', alt: 'Image 14' },
    { src: '/Lolito.png', alt: 'Image 15' },
    { src: '/Respira.png', alt: 'Image 16' },
  ];

  return (
    <div className="container">
      <div className="grid">
        {products.map((product, index) => (
          <ProductCard key={index} src={product.src} alt={product.alt} />
        ))}
      </div>
      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ProductGrid;

