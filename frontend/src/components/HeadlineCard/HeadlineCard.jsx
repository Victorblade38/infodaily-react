import React from "react";
import "./HeadlineCard.css";
import { Card } from "../components.js";

const HeadlineCard = () => {
  return (
    <div className="hero-top">
      <div className="hero-top-primary">
        <div className="primary-card-img">
          <img
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img.."
          />
          <div className="primary-card-source">
            <span>Source</span>
          </div>
        </div>
        <div className="primary-card-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            facilis ipsam nulla velit doloribus, quo aliquid eos eaque? At,
          </p>
        </div>
      </div>
      <div className="hero-top-primary">
        <div className="primary-card-img">
          <img
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img.."
          />
          <div className="primary-card-source">
            <span>Source</span>
          </div>
        </div>
        <div className="primary-card-content secondary">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            facilis ipsam nulla velit doloribus, quo aliquid eos eaque? At,
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCard;
