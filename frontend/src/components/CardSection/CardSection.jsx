import React from "react";
import Card from "../Card/Card";
import "./CardSection.css";

const CardSection = () => {
  return (
    <div className="card-section">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Card key={index} />
        ))}
    </div>
  );
};

export default CardSection;
