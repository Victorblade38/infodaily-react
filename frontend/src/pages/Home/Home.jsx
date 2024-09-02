import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardSection from "../../components/CardSection/CardSection";
import LogoBar from "../../components/LogoBar/LogoBar";
import CategorySection from "../../components/CategorySection/CategorySection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="container">
      <LogoBar />
      <Navbar />
      <CategorySection />
      <Footer />
    </div>
  );
};

export default Home;
