import React from "react";
import "./Card.css";

const Card = () => {
  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  }
  return (
    <div className="card text-bg-dark border-0 ">
      <img
        src={`https://picsum.photos/200/300?random=${Math.random()}`}
        className="card-img rounded-0"
        alt="..."
      />
      <div className="bg-overlay">
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            {truncateText(
              "New Details - text to build on the card title and make up the bulk of the card's content. lorem lorem lorem lorem lorem lorem",
              22
            )}
          </p>
        </div>
      </div>
      <div class="card-footer">
        <p className="card-text">
          <small>Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
