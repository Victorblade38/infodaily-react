import React from "react";
import "./Category.css";

const Category = ({ category = "Business" }) => {
  return (
    <div className="category-container">
      <span>{category}</span>
    </div>
  );
};

export default Category;
