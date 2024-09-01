import React from "react";
import "./Card.css";

const Card = () => {
  const Heading =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, in.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, in.";
  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  }
  return (
    <div className="card bg-dark text-white hover" style={styles.cardHeight}>
      <div class="card-header" style={{ height: 8 + "%", fontSize: 12 + "px" }}>
        Uploaded 3mins ago
      </div>
      <img
        src={`https://picsum.photos/200/300?random=${Math.random()}`}
        alt="Random image"
        className="card-img rounded-0"
        style={styles.imgHeight}
      />
      <div className="card-footer card-text " style={{ height: 20 + "%" }}>
        <p style={{ fontSize: 14 + "px" }}>{truncateText(Heading, 20)}</p>
      </div>
    </div>
  );
};

export default Card;

const styles = {
  cardHeight: {
    height: "400px",
    cursor: "pointer",
  },
  imgHeight: {
    width: "100%",
    height: "70%",
  },
};
