"use client";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="page-container">
      <div className="content-area">
        {/* First Blog Container */}
        <div className="blog-container">
          <div className="image-wrapper">
            <Image
              src="/Rectangle 68.png"
              alt="Laptop with millennial design"
              layout="responsive"
              width={817}
              height={500}
            />
          </div>
          <div className="content-wrapper">
            <div className="meta-info">
              <span className="meta-item">Admin</span>
              <span className="meta-item">14 Oct 2022</span>
              <span className="meta-item">Wood</span>
            </div>
            <h1 className="title">Going all-in with millennial design</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare
              aenean euismod elementum.
            </p>
          </div>
        </div>

        {/* Second Blog Container */}
        <div className="blog-container">
          <div className="image-wrapper">
            <Image
              src="/Rectangle 68.png"
              alt="Decorative workspace"
              layout="responsive"
              width={817}
              height={500}
            />
          </div>
          <div className="content-wrapper">
            <div className="meta-info">
              <span className="meta-item">Admin</span>
              <span className="meta-item">15 Oct 2022</span>
              <span className="meta-item">Handmade</span>
            </div>
            <h1 className="title">Exploring new ways of decorating</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare
              aenean euismod elementum.
            </p>
          </div>
        </div>
        <button className="read-more">Read More</button>
      </div>

      {/* Categories/Search Bar */}
      <div className="categories-container">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7" cy="7" r="6" stroke="#000" strokeWidth="2" />
              <line x1="11" y1="11" x2="15" y2="15" stroke="#000" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <div className="categories-list">
          <h3>Categories</h3>
          <ul>
            <li>
              Crafts <span>2</span>
            </li>
            <li>
              Design <span>8</span>
            </li>
            <li>
              Handmade <span>7</span>
            </li>
            <li>
              Interior <span>1</span>
            </li>
            <li>
              Wood <span>6</span>
            </li>
          </ul>
        </div>
        

        {/* Recent Posts */}
        <div className="recent-posts">
          <h3>Recent Posts</h3>
          <ul>
            <li>
              <Image src="/post1.jpg" alt="Post 1" width={50} height={50} />
              <div>
                <h4>Going all-in with millennial design</h4>
                <p>03 Aug 2022</p>
              </div>
            </li>
            <li>
              <Image src="/post2.jpg" alt="Post 2" width={50} height={50} />
              <div>
                <h4>Exploring new ways of decorating</h4>
                <p>03 Aug 2022</p>
              </div>
            </li>
            <li>
              <Image src="/post3.jpg" alt="Post 3" width={50} height={50} />
              <div>
                <h4>Handmade pieces that took time to make</h4>
                <p>03 Aug 2022</p>
              </div>
            </li>
            <li>
              <Image src="/post4.jpg" alt="Post 4" width={50} height={50} />
              <div>
                <h4>Modern home in Milan</h4>
                <p>03 Aug 2022</p>
              </div>
            </li>
            <li>
              <Image src="/post5.jpg" alt="Post 5" width={50} height={50} />
              <div>
                <h4>Colorful office redesign</h4>
                <p>03 Aug 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .page-container {
          display: flex;
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px;
        }

        .content-area {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .blog-container {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
          background-color: white;
        }

        .image-wrapper {
          position: relative;
        }

        .content-wrapper {
          padding: 16px;
        }

        .meta-info {
          display: flex;
          gap: 16px;
          font-size: 14px;
          color: #888;
          margin-bottom: 8px;
        }

        .meta-item {
          display: inline-block;
        }

        .title {
          font-size: 24px;
          font-weight: 600;
          margin: 8px 0;
        }

        .description {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        }

        .read-more {
          margin: 16px auto;
          padding: 8px 16px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .read-more:hover {
          background: #0056b3;
        }

        .categories-container {
          flex: 1;
          background: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 393px;
          height: auto;
        }

        .search-bar {
          display: flex;
          margin-bottom: 16px;
        }

        .search-bar input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
        }

        .search-bar button {
          padding: 8px;
          border: 1px solid #ddd;
          border-left: none;
          background: #f5f5f5;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }

        .categories-list {
          margin-top: 16px;
          color: #888;
        }

        .categories-list h3 {
          font-size: 18px;
          margin-bottom: 8px;
          color: #888;
          font-weight: bold;
        }

        .categories-list ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .categories-list li {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .recent-posts {
          margin-top: 32px;
        }

        .recent-posts h3 {
          font-size: 18px;
          margin-bottom: 8px;
        }

        .recent-posts ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .recent-posts li {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .recent-posts img {
          border-radius: 8px;
        }

        .recent-posts h4 {
          margin: 0;
          font-size: 16px;
          font-weight: bold;
        }

        .recent-posts p {
          margin: 0;
          color: #888;
        }
      `}</style>
    </div>
  );
}
