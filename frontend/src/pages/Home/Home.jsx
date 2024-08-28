import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CardSection from "../../components/CardSection/CardSection";
import LogoBar from "../../components/LogoBar/LogoBar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="container">
      <LogoBar />
      <Navbar />
      <Hero />
      <CardSection />
      <Footer />
    </div>
  );
};

export default Home;
