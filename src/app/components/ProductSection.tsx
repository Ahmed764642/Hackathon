"use client"
import Image from 'next/image'
import React from 'react'

const ProductSection = () => {
  return (
    <div className="px-8 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <Image 
            src="/Syltherine.png"
            alt="Syltherine"
            width={285}
            height={446}
            
          />
          
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center">
          <Image 
            src="/Leviosa.png"
            alt="Leviosa"
            width={285}
            height={446}
           
          />
          
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center">
          <Image 
            src="/Lolito.png"
            alt="Lolito"
            width={285}
            height={446}
           
          />
          
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center">
          <Image 
            src="/Respira.png"
            alt="Respira"
            width={285}
            height={446}
           
          />
          
        </div>

        {/* Product 5 */}
        <div className="flex flex-col items-center">
          <Image 
            src="/Grifo.png"
            alt="Grifo"
            width={285}
            height={446}
           
          />
         
        </div>

        {/* Product 6 */}
        <div className="flex flex-col items-center">
          <Image 
            src="/Muggo.png"
            alt="Muggo"
            width={285}
            height={446}
           
          />
         
        </div>

        {/* Product 7 */}
        <div className="flex flex-col items-center">
          <Image 
            src="/Pingky.png"
            alt="Pingky"
            width={285}
            height={446}
           
          />
          
        </div>

        {/* Product 8 */}
        <div className="flex flex-col items-center">
          <Image 
            src="/Potty.png"
            alt="Potty"
            width={285}
            height={446}
           
          />
          
        </div>
      
    
    <div style={{ textAlign: 'center', width: '400%' }}>
    <div style={{ display: 'inline-block' }}>
        <Image 
            src="/Show More.png"
            alt="Show more"
            width={245}
            height={48}
        />
    </div>
</div>

      </div>
    </div>
  )
}

export default ProductSection
