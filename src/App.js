import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./screensJS/Welcome";
import Portfolio from "./screensJS/Portfolio";

import "./App.css";



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;
