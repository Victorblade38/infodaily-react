import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { moon, default_profile } from "../assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <span>InfoDaily</span>
        </Link>
      </div>
      <div className="navbar-navlinks">
        <ul className="navbar-navlinks-ul">
          <li>
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/category" className="navlink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navlink">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-search-box">
        <input
          className="navbar-search-input"
          type="text"
          placeholder="search"
        />
      </div>
      <div className="navbar-options">
        <div className="navbar-options-mode">
          <img src={moon} width={24} alt="moon" />
        </div>
        <div className="navbar-options-profile">
          <img src={default_profile} width={40} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
