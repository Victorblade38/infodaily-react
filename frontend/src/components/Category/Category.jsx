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
    <div className="container" style={{ marginTop: 20 + "px" }}>
      <ul
        className="nav justify-content-center"
        style={{ display: "flex", gap: 4 + "em" }}
      >
        {categories.map((item, index) => {
          return (
            <div className="category-box" key={index}>
              <a
                href={item.url}
                style={{
                  textDecoration: "none",
                  color: "blue",
                }}
              >
                <span>{item.category}</span>
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
