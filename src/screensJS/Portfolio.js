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

const Portfolio = () => {

  

  return (
    <div className="screen">
      <Nav />
      <Outlet />
      <TexteDefilant />
      {/* Latest version */}
      {/* <div className="container">
        <Outlet />
      </div>
      <TexteDefilant /> */}
    </div>
  );
};

export default Portfolio;
