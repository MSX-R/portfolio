import React, { useEffect, useState } from "react";
import "./Portfolio.css";

import Nav from "../componentsJS/Navbar/Nav";
import { Outlet } from "react-router-dom";
import TexteDefilant from "../componentsJS/TexteDefilant";
import "../componentsJS/TexteDefilant.css";
//
import logoblanc from "../assets/logoblanc.png";
import { Link } from "react-router-dom";
//

const Portfolio = ({
  langue,
  setLangue,
  projectVersion,
  setProjectVersion,
}) => {
  return (
    <div className="screen">
      <Nav
        langue={langue}
        setLangue={setLangue}
        projectVersion={projectVersion}
        setProjectVersion={setProjectVersion}
      />
      <Outlet langue={langue} />
      <TexteDefilant langue={langue} />
    </div>
  );
};

export default Portfolio;
