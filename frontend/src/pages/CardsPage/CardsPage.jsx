import React from "react";
import "./CardsPage.css";
import { Card, CategorySection } from "../../components/components";

const CardsPage = () => {
  return (
    <div className="cards-page">
      <CategorySection />
      <div className="hero-bottom-container">
        <Card />
      </div>
    </div>
  );
};

export default CardsPage;
