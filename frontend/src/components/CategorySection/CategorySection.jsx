import React from "react";
import "./CategorySection.css";
import { Category } from "../components.js";

const CategorySection = () => {
  return (
    <div className="category-section">
      <h1>Categories</h1>
      <div className="categories">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default CategorySection;
