import React from "react";
import Card from "../Card/Card";
import "./Hero.css";
import HeadlineCard from "../HeadlineCard/HeadlineCard";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Top Headlines</h1>
      <div className="hero-top-container">
        <HeadlineCard />
      </div>
      <div className="hero-bottom-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Hero;
