import React from "react";

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
        style={{ display: "flex", gap: 2 + "em" }}
      >
        {categories.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <button className="btn btn-primary">
                <a
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  aria-current="page"
                  href={item.url}
                  style={{ color: "#333" }}
                >
                  {item.category}
                </a>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
