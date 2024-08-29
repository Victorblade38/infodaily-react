import React from "react";
import "./Footer.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <span>InfoDaily</span>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <img src={linkedin} />
          </li>
          <li>
            <img src={github} />
          </li>
          <li>
            <img src={instagram} />
          </li>
          <li>
            <img src={github} />
          </li>
        </ul>
      </div>
      <div className="footer-navlinks">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Feedback</a>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>Copyright © 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
