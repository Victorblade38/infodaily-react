import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { moon, sun, default_profile } from "../assets";

const Navbar = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = (e) => {
    e.preventDefault;
    if (mode === "light") {
      setMode("dark");
      document.documentElement.classList.toggle("dark-mode");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark-mode");
    }
  };

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
              Category
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
        <button className="navbar-options-mode" onClick={toggleMode}>
          <img src={mode === "light" ? moon : sun} width={24} alt="moon" />
        </button>
        <div className="navbar-options-profile">
          <img src={default_profile} width={36} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
