import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { github, linkedin, instagram } from "../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Link to="/" className="logo-bottom">
          <span>InfoDaily</span>
        </Link>
      </div>
      <div className="footer-socialmedia-container">
        <div className="socialmedia">
          <img src={github} alt="Github" />
        </div>
        <div className="socialmedia">
          <img src={linkedin} alt="LinkedIn" />
        </div>
        <div className="socialmedia">
          <img src={instagram} alt="LinkedIn" />
        </div>
      </div>
      <hr />
      <div className="footer-foot">
        <p>copyright&copy; 2024 InfoDaily</p>
      </div>
    </div>
  );
};

export default Footer;
