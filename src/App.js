import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./screensJS/Welcome";
import Portfolio from "./screensJS/Portfolio";
// import Nav from './componentsJS/Navbar/Nav'

import "./App.css";
import Presentation from "./screensJS/Presentation";
import SwiperReact from "./componentsJS/SwiperReact/SwiperReact";
import Formulaire from "./componentsJS/Formulaire/Formulaire";

// LANGUES
import FR from "./languages/fr-FR.json";
import projetsFR from "./componentsJS/ProjetsJSON/projets-FR.json"; //projet francais

const App = () => {
  const [langue, setLangue] = useState(FR);
  const [projectVersion, setProjectVersion] = useState(projetsFR);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/Marsaleix-Romain"
          element={
            <Portfolio
              langue={langue}
              setLangue={setLangue}
              projectVersion={projectVersion}
              setProjectVersion={setProjectVersion}
            />
          }
        >
          <Route
            path="/Marsaleix-Romain/Presentation"
            element={<Presentation langue={langue} setLangue={setLangue} />}
          />
          <Route
            path="/Marsaleix-Romain/Projets"
            element={
              <SwiperReact
                langue={langue}
                setLangue={setLangue}
                projectVersion={projectVersion}
              />
            }
          />
          <Route
            path="/Marsaleix-Romain/Formulaire-de-contact"
            element={<Formulaire langue={langue} setLangue={setLangue} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
