"use client"
import Image from 'next/image';

export default function Inspiration() {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="text-section">
        <h1 className="title">50+ Beautiful rooms inspiration</h1>
        <p className="description">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button >
          <Image
          src="/ExploreMore.png"
          alt="Explore More"
          width={176}
          height={48}/>
        </button>
      </div>

      {/* Right Section */}
      <div className="image-section">
     
        

        {/* Thumbnails */}
        <div className="thumbnail-container">
          <Image
            src="/InnerPeace.png" // Replace with your actual image path
            alt="Thumbnail Room 1"
            width={404}
            height={582}
          />
          <Image
            src="/Rectangle-25.png" // Replace with your actual image path
            alt="Thumbnail Room 2"
            width={372}
            height={489}
          />
          <Image
            src="/Rectangle-26.png" // Replace with your actual image path
            alt="Thumbnail Room 3"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
