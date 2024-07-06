import React from "react";
import "./FooterComponent.css"; // Import the CSS file

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo">
          <img src="/logo.png" alt="SLST Logo" className="logo-image" />
        </div>
        <p>©2024 Stanford Ling Sound Test, All rights reserved.</p>
      </div>
      <div className="footer-right">
        <div className="footer-contact">
          <span>Looking to collaborate?</span>
          <button className="contact-button">Get in Touch →</button>
        </div>
        <div className="footer-social">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/youtube.png"
              alt="YouTube"
              className="social-icon"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/x.png"
              alt="Twitter"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedIn.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
