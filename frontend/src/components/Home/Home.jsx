import React from "react";
import Hero from "../Hero/Hero";
import "./Home.css";
import CategorySection from "../CategorySection/CategorySection";
import GeneralNewsSection from "../GeneralNewsSection/GeneralNewsSection";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <CategorySection />
      <GeneralNewsSection />
    </div>
  );
};

export default Home;
