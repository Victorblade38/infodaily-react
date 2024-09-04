import React from "react";
import Card from "../Card/Card";
import "./Hero.css";
import HeadlineCard from "../HeadlineCard/HeadlineCard";
import Category from "../Category/Category";

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
      <div className="hero-general-container">
        <h1>Category</h1>
        <Category category={Business} />
      </div>
    </div>
  );
};

export default Hero;
