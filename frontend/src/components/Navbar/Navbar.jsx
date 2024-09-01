import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navlinks">
        <button>
          <a href="">Home</a>
        </button>
        <button>
          <a href="">About</a>
        </button>
        <button>
          <a href="">Contact</a>
        </button>
      </div>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <button>Search</button>
      </div>
      <div className="settings">
        <button>Dark Theme</button>
        <button>Settings</button>
      </div>
    </div>
  );
};

export default Navbar;
