import React from "react";
import "./Category.css";

const Category = () => {
  const categories = [
    { category: "Technology", url: "#" },
    { category: "Science", url: "#" },
    { category: "Economics", url: "#" },
    { category: "Histroy", url: "#" },
    { category: "Sports", url: "#" },
    { category: "Entertainment", url: "#" },
    { category: "Politics", url: "#" },
  ];
  return (
    <div className="container">
      {categories.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            style={{
              textDecoration: "none",
              color: "blue",
            }}
          >
            <span>{item.category}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Category;
