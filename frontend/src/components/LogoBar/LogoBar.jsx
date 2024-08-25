import React from "react";
import "./LogoBar.css";

const LogoBar = () => {
  return (
    <div className="logo">
      <span>InfoDaily</span>
      <div className="extra-options">
        <i class="fa-solid fa-circle-half-stroke"></i>
        <button className="btn btn-outline-dark">Login</button>
      </div>
    </div>
  );
};

export default LogoBar;
