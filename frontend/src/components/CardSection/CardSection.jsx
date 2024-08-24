import React from "react";
import Card from "../Card/Card";
import "./CardSection.css";

const CardSection = () => {
  return (
    <div className="card-section" style={styles.container}>
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <Card key={index} />
        ))}
    </div>
  );
};

export default CardSection;

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr",
    gap: "20px",
    margin: "20px",
  },
};
