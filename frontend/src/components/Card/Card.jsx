import React from "react";
import "./Card.css";

const Card = () => {
  const Heading =
    "Lorem ipsum dolor Lorem ipsum dolor  Lorem ipsum dolor  sit, amet consectetur adipisicing elit. Id, in.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, in.";
  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  }
  return (
    <div className="cardBox">
      <div className="cardHeader">
        <span>Uploaded 3mins ago</span>
      </div>
      <img
        src={`https://picsum.photos/200/300?random=${Math.random()}`}
        alt="Random image"
        className="cardImg"
      />
      <div className="cardText">
        <p>{truncateText(Heading, 16)}</p>
      </div>
    </div>
  );
};

export default Card;
