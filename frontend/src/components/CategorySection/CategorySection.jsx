import React from "react";
import "./CategorySection.css";
import Category from "../Category/Category";

const CategorySection = () => {
  const categories = [
    { category: "Technology", url: "#" },
    { category: "Science", url: "#" },
    { category: "Economics", url: "#" },
    { category: "Histroy", url: "#" },
    { category: "Sports", url: "#" },
    { category: "Entertainment", url: "#" },
    { category: "Politics", url: "#" },
    { category: "Politics", url: "#" },
  ];
  return (
    <div className="categories-box">
      {categories.map((categoryObj, index) => (
        <Category
          category={categoryObj.category}
          url={categoryObj.url}
          key={index}
        />
      ))}
    </div>
  );
};

export default CategorySection;
