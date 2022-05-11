import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./screensJS/Welcome";
import Home from "./screensJS/Home";

import "./App.css";

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
    </div>
  );
};

export default App;
