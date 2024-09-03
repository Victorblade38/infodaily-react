import React from "react";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
import { github, linkedin, instagram } from "../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Link to="/" className="logo-bottom">
          <span>InfoDaily</span>
        </Link>
      </div>
      <div className="footer-navlinks">
        <ul className="footer-navlinks-ul">
          <li>
            <NavLink to="/" className="navlinks">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/category" className="navlinks">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navlinks">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-socialmedia-container">
        <div className="socialmedia">
          <img src={github} width={30} height={30} alt="Github" />
        </div>
        <div className="socialmedia">
          <img src={linkedin} width={30} height={30} alt="LinkedIn" />
        </div>
        <div className="socialmedia">
          <img src={instagram} width={30} height={30} alt="LinkedIn" />
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
