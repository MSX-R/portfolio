import React from "react";
import logoBlancHeader from "../assets/logoblanc.png";
import "./Header.css";
import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaTeamspeak } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="partie-gauche mobile-logo">
        {" "}
        {/* A garder format mobile */}
        <Link to="/">
          <img src={logoBlancHeader} alt="logo-mini" className="msx-header" />
        </Link>
        <p className="marsaleixRomain">MARSALEIX ROMAIN</p>
        <div className="separation-nom-metier"></div>
        <p className="developpeurWeb">Développeur web/mobile</p>
      </div>

      <div className="partie-droite mobile-menulist">
        <Link to="/Home" className="links-navbar">
          <FaUserCircle />
        </Link>
        <Link to="/Projets" className="links-navbar ">
          <FaLaptopCode />
        </Link>
        <Link to="/Contact" className="links-navbar ">
          <FaTeamspeak />
        </Link>
        <Link to="/Home">
          <button className="recruteMe">ME RECRUTER</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
