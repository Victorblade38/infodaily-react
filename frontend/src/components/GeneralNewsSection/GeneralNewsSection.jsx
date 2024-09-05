import React from "react";
import { GeneralNewsCard } from "../components.js";
import "./GeneralNewsSection.css";

const GeneralNewsSection = () => {
  return (
    <div className="general-news-section">
      <h1>Stay UptoDate</h1>
      <div className="general-news-container">
        <GeneralNewsCard />
        <GeneralNewsCard />
        <GeneralNewsCard />
        <GeneralNewsCard />
        <GeneralNewsCard />
        <GeneralNewsCard />
        <GeneralNewsCard />
        <GeneralNewsCard />
        <GeneralNewsCard />
        <GeneralNewsCard />
        <GeneralNewsCard />
        <GeneralNewsCard />
      </div>
    </div>
  );
};

export default GeneralNewsSection;
