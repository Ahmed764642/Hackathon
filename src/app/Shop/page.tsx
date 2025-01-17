import React from 'react';
import Image from 'next/image';
import ProductGrid from '../components/ProductGrid';
import FeaturesSection from '../components/Footer1';
import Footer from '../components/Footer';


const Shop = () => {
  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
        <Image
          src="/Group 77.png"
          alt="image"
          layout="responsive"
          width={1440}
          height={316}
          objectFit="cover"
        />
      </div>

      {/* Filter bar code added directly here */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f9f5f0',
        padding: '10px'
      }}>
        <button style={{
          marginRight: '10px',
          border: 'none',
          background: 'none',
          cursor: 'pointer'
        }}>Filter</button>
        <div style={{
          display: 'flex',
          marginRight: '20px'
        }}>
          <button style={{
            marginRight: '10px',
            border: 'none',
            background: 'none',
            cursor: 'pointer'
          }}>Grid</button>
          <button style={{
            marginRight: '10px',
            border: 'none',
            background: 'none',
            cursor: 'pointer'
          }}>List</button>
        </div>
        <div style={{
          marginRight: 'auto'
        }}>Showing 1–16 of 32 results</div>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <label htmlFor="show">Show</label>
          <input type="number" id="show" style={{
            width: '50px',
            marginRight: '10px'
          }} defaultValue="16" />
          <label htmlFor="sort">Sort by</label>
          <select id="sort" style={{
            marginLeft: '5px'
          }}>
            <option value="default">Default</option>
          </select>
        </div>
      </div>

      <ProductGrid />
      <FeaturesSection/>
      <Footer/>
    </div>
  );
};

export default Shop;







          