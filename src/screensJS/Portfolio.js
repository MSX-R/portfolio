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
  //
  // const [invisible, setInvisible] = useState([]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setInvisible("hidden");
  //     window.location.href = "http://localhost:3000/portfolio/Marsaleix-Romain/Presentation"
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);
  //

  return (
    <div className="screen">
      {/* <div className={`page-welcome  ${invisible}`}>
        <Link to="/Marsaleix-Romain/Presentation" className="logo-link">  */}
      {/* link à remplacer par un onclick */}
      {/* <div className="bloc-logo">
             <img */}
      {/* //         src={logoblanc}
      //         alt="logo"
      //         className="logo-welcome "
      //       />
      //     </div>
      //   </Link>
      // </div> */}

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
