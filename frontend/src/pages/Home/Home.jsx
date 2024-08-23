import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";

const Home = () => {
  return (
    <div className="container">
      <div className="logo">
        <span>InfoDaily</span>
      </div>
      <Navbar />
      <Hero />
      <Category />
    </div>
  );
};

export default Home;
