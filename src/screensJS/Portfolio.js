import React from "react";
import "./Portfolio.css";

import Nav from "../componentsJS/Navbar/Nav";
import { Outlet } from "react-router-dom";
import TexteDefilant from "../componentsJS/TexteDefilant";
import "../componentsJS/TexteDefilant.css";

const Portfolio = () => {
  return (
    <div className="screen">
      <Nav />      

      <div className="container">
        <Outlet />
      </div><TexteDefilant />
    </div>
  );
};

export default Portfolio;
