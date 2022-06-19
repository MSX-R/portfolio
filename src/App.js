import React from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./screensJS/Loader";
import Portfolio from "./screensJS/Portfolio";
// import Nav from './componentsJS/Navbar/Nav'

import "./App.css";
import Presentation from "./screensJS/Presentation";
import SwiperReact from "./componentsJS/SwiperReact/SwiperReact";
import Formulaire from "./componentsJS/Formulaire/Formulaire";

const App = () => {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/Marsaleix-Romain" element={<Portfolio />}>
        <Route path="/Marsaleix-Romain/Presentation" element={<Presentation />}/>
        <Route path="/Marsaleix-Romain/Projets" element={<SwiperReact />} />
        <Route path="/Marsaleix-Romain/Formulaire-de-contact" element={<Formulaire />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
