import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
      <div className="search-box-container">
        <input type="text" placeholder="Search..." />
        <button>
          <i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </i>
        </button>
      </div>
      <div className="extra-options">
        <button className="theme-btn">
          <i className="fa-solid fa-moon"></i>
        </button>
        <button className="settings-btn">
          <i className="fa-solid fa-gear"></i>
        </button>
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
