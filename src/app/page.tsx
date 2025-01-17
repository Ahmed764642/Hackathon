import Image from "next/image";
import React from "react";

import Group from "./components/Group1";
import ProductSection from "./components/ProductSection";
import Inspiration from "./components/Inspiration";
import FuniroFurniture from "./components/Furniture";
import Footer from "./components/Footer";


const FurniroLogo = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="main-content">
          <div className="image-container">
            <Image
              src="/Mask.png"
              alt="Main Banner"
              width={1440}
              height={716.83}
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      <br /><br />
      <Group />
      <br /><br />
      <ProductSection />
      <br /><br />
      <Inspiration />
      <br /><br />
      <FuniroFurniture />
      <br /><br />
      <Footer/>
    

    </div>
  );
};

export default FurniroLogo;
