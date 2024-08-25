import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Name */}
        <div className="footer-logo">
          <img
            src="/path-to-your-logo.png"
            alt="InfoDialy Logo"
            className="footer-logo-img"
          />
          <h2 className="footer-logo-name">InfoDialy</h2>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:your-email@example.com">your-email@example.com</a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/your-github-username
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/your-linkedin-username
            </a>
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} InfoDialy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
