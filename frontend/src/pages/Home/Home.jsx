import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CardSection from "../../components/CardSection/CardSection";
import LogoBar from "../../components/LogoBar/LogoBar";
import CategorySection from "../../components/CategorySection/CategorySection";

const Home = () => {
  return (
    <div className="container">
      <LogoBar />
      <Navbar />
      <Hero />
      <CategorySection />
      <CardSection />
    </div>
  );
};

export default Home;
