import React from "react";

const Card = () => {
  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  }
  return (
    <div className="card" style={styles.container}>
      <img
        src={`https://picsum.photos/200/300?random=${Math.random()}`}
        className="card-img-top"
        alt="..."
        style={styles.imgDim}
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          {truncateText(
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
            20
          )}
        </p>
        <a href="#" className="btn btn-outline-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;

const styles = {
  container: {
    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
    width: "18rem",
  },
  imgDim: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
};
