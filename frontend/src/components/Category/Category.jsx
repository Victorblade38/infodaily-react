import React from "react";
import "./Category.css";

const Category = ({ category, url }) => {
  return (
    <div className="category">
      <img
        src={`https://picsum.photos/200/300?random=${Math.random()}`}
        className="categories-img"
      />
      <a href={url} className="category-text">
        <span>{category}</span>
      </a>
    </div>
  );
};

export default Category;
