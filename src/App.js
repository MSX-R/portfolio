import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./screensJS/Welcome";
import Portfolio from "./screensJS/Portfolio";
// import Nav from './componentsJS/Navbar/Nav'

import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Marsaleix-Romain" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;
