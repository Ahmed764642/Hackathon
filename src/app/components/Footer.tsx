import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px 20px",
        backgroundColor: "#fff",
        borderTop: "1px solid #eaeaea",
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        color: "#333",
        height: "505px", // Set the footer height
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {/* Left Section */}
        <div>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Funiro.
          </h2>
          <p style={{ margin: "0", lineHeight: "1.6", color: "#666" }}>
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Links
          </h3>
          <ul
            style={{
              margin: "0",
              padding: "0",
              listStyle: "none",
              lineHeight: "2",
            }}
          >
            <li>
              <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                Shop
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                About
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Help
          </h3>
          <ul
            style={{
              margin: "0",
              padding: "0",
              listStyle: "none",
              lineHeight: "2",
            }}
          >
            <li>
              <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                Returns
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Newsletter
          </h3>
          <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                width: "100%",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid #eaeaea",
          paddingTop: "20px",
          fontSize: "12px",
          color: "#666",
        }}
      >
        2023 Funiro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

