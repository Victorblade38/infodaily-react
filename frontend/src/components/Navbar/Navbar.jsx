import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="search-box-container">
        <input type="text" placeholder="search here" />
        <button
          className="btn btn-outline-primary"
          type="submit"
          style={styles.searchbtn}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;

const styles = {
  searchbtn: {
    height: "32px",
    fontSize: "14px",
  },
};
