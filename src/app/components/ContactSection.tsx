import React from "react";

const ContactSection = () => {
  return (
    <section
      style={{
        fontFamily: "'Poppins', Arial, sans-serif",
        color: "#333",
        padding: "50px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "600",
            marginBottom: "10px",
            color: "#000",
          }}
        >
          Get In Touch With Us
        </h2>
        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#666" }}>
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* Main Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "40px",
        }}
      >
        {/* Contact Information */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Address
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              295 5th SE Avenue, New York NY10000, United States
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Phone
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Mobile: (+84) 546-6789 <br /> Hotline: (+84) 456-6789
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Working Time
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ flex: 1 }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Your name
              </label>
              <input
                type="text"
                placeholder="Abc"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Email address
              </label>
              <input
                type="email"
                placeholder="Abc@def.com"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="This is an optional"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Message
              </label>
              <textarea
                placeholder="Hi! I'd like to ask about"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "14px",
                  height: "100px",
                  resize: "none",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px 20px",
                backgroundColor: "#d4a100",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
