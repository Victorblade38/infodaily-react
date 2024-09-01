import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./pages/Home/Home";
import ErrorBoundary from "./ErrorBoundary";
import Navbar from "./components/Navbar/Navbar";
import LogoBar from "./components/LogoBar/LogoBar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
