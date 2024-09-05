import React from "react";
import Category from "../Category/Category";
import "./CategorySection.css";

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
