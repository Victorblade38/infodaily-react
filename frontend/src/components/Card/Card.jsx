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
    <div className="card">
      <img
        src={`https://picsum.photos/200/300?random=${Math.random()}`}
        className="card-img-top"
        alt="..."
        style={styles.imgDim}
      />
      <div className="card-body">
        <h5 className="card-title">News Heading</h5>
        <p className="card-text" style={styles.newsDetails}>
          {truncateText(
            "New Details - text to build on the card title and make up the bulk of the card's content.",
            20
          )}
        </p>
        <p style={styles.authorStyles}>News Author</p>
        <p style={styles.publishDate}>Publisded Date</p>
        <a href="#" className="btn btn-outline-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;

const styles = {
  imgDim: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  newsDetails: {
    fontWeight: "500",
    color: "#6E6E6E",
  },
  publishDate: {
    margin: "12px 0",
    fontSize: "13px",
    color: "#6E6E6E",
  },
  authorStyles: {
    margin: "12px 0",
    fontSize: "13px",
    color: "#6E6E6E",
  },
};
