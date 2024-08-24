import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import CardSection from "../../components/CardSection/CardSection";

const Home = () => {
  return (
    <div className="container">
      <div className="logo">
        <span>InfoDaily</span>
      </div>
      <Navbar />
      <Hero />
      <Category />
      <CardSection />
    </div>
  );
};

export default Home;
