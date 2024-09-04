import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img
          src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img.."
        />
        <div className="card-source">
          <span>Source</span>
        </div>
      </div>
      <div className="card-content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          facilis ipsam nulla velit doloribus, quo aliquid eos eaque? At, quas.
          facilis ipsam nulla velit doloribus, quo aliquid eos eaque? At, quas.
        </p>
      </div>
    </div>
  );
};

export default Card;
