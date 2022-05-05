/* Import modules */
import React from "react";
import { Link } from "react-router-dom";

/*Import css */
import "./Header.css";
/*Import des icones */
import { FaUserCircle } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaTeamspeak } from "react-icons/fa";
import logoBlancHeader from "../assets/logoblanc.png";

import { NavHashLink } from "react-router-hash-link"; // POUR PLACER DES ANCRES VIA ID dans le SITE

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
       

        <NavHashLink
          to="#home-part"
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          //etc...
          className="links-navbar"
          title="Accéder à l'Accueil">
          <FaUserCircle />
        </NavHashLink>

        <NavHashLink
          to="#project-part"
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          //etc...
          className="links-navbar "
          title="Accéder aux Projets">
          <FaLaptopCode />
        </NavHashLink>

        <NavHashLink
          to="#form-part"
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          //etc...
          className="links-navbar "
          title="Accéder au Formulaire de contact">
          <FaTeamspeak />
        </NavHashLink>




        <a href="tel:0789619164" title="Cliquer pour passer un appel">
          <button className="recruteMe">ME RECRUTER</button>
        </a>
      </div>
    </div>
  );
}

export default Header;
