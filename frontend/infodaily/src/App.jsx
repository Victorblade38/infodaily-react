import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="conatiner">
      <div className="logo">
        <span>InfoDaily</span>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
