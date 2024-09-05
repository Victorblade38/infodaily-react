import React from "react";
import "./Home.css";
import { Hero, GeneralNewsSection } from "../../components/components.js";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <GeneralNewsSection />
    </div>
  );
};

export default Home;
