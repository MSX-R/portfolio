import React from "react";
import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

/*Import des icones */
import { FaUserCircle } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaTeamspeak } from "react-icons/fa";
import logoBlancHeader from "../../assets/logoblanc.png";

import { NavHashLink } from "react-router-hash-link"; // POUR PLACER DES ANCRES VIA ID dans le SITE

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => setShowLinks(false);

  console.log(showLinks); /* Pour verifier que ca passe bien de true a false */

  return (
    <div>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className="partie-gauche mobile-logo">
          {" "}
          {/* NavBar Mobile */}
          <Link to="/">
            <img src={logoBlancHeader} alt="logo-mini" className="msx-header" />
          </Link>
          <p className="marsaleixRomain">MARSALEIX ROMAIN</p>
          <div className="separation-nom-metier"></div>
          <p className="developpeurWeb">Développeur web/mobile</p>
          <button className="navbar_burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
          </button>
        </div>

        {/* MENU PC */}
        <div className="partie-droite menu_pc">
          <NavHashLink
            to="#home-part"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="links-navbar"
            title="Accéder à l'Accueil"
          >
            <FaUserCircle />
          </NavHashLink>

          <NavHashLink
            to="#project-part"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="links-navbar "
            title="Accéder aux Projets"
          >
            <FaLaptopCode />
          </NavHashLink>

          <NavHashLink
            to="#form-part"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="links-navbar "
            title="Accéder au Formulaire de contact"
          >
            <FaTeamspeak />
          </NavHashLink>

          <NavHashLink
            to="#form-part"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            title="Accéder au Formulaire de contact"
            onClick={closeMenu}
          >
            <button className="recruteMe">ME RECRUTER</button>
          </NavHashLink>

          {/* <a href="0011223344" title="Cliquer pour passer un appel">
            <button className="recruteMe">ME RECRUTER</button>
          </a> */}
        </div>

        {/* MENU MOBILE */}
        <ul className="navbar_links menu_mobile">
          <div
            className="navbar_item slideInDown-0 logo_burger_list"
            onClick={closeMenu}
          >
            <img
              src={logoBlancHeader}
              alt="logo-mini"
              className="msx-header msx-header-list"
            />

            <div className="separation-nom-metier2"></div>
            <p className="marsaleixRomain2">MARSALEIX ROMAIN</p>
          </div>
          <li className="navbar_item slideInDown-1">
            <NavHashLink
              to="#home-part"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
              //etc...
              className="links-navbar navbar_link "
              title="Accéder à l'Accueil"
              onClick={closeMenu}
            >
              <FaUserCircle className="Fa-icons" />
              <p className="text-icons">Accéder à l'Accueil</p>
            </NavHashLink>
          </li>
          <li className="navbar_item slideInDown-2">
            <NavHashLink
              to="#project-part"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
              //etc...
              className="links-navbar navbar_link "
              title="Accéder aux projets"
              onClick={closeMenu}
            >
              <FaLaptopCode className="Fa-icons" />
              <p className="text-icons">Accéder aux Projets</p>
            </NavHashLink>
          </li>
          <li className="navbar_item slideInDown-3">
            <NavHashLink
              to="#form-part"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
              //etc...
              className="links-navbar navbar_link "
              title="Accéder au Formulaire de contact"
              onClick={closeMenu}
            >
              <FaTeamspeak className="Fa-icons" />
              <p className="text-icons">Accéder au Formulaire de contact</p>
            </NavHashLink>
          </li>

          <li className="navbar_item slideInDown-4">
            <NavHashLink
              to="#form-part"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
              title="Accéder au Formulaire de contact"
              onClick={closeMenu}
            >
              <button className="recruteMe">ME RECRUTER</button>
            </NavHashLink>

            {/* <a
              href="tel:0011223344"
              className="navbar_link "
              title="Cliquer pour passer un appel"
            >
              <button className="recruteMe">ME RECRUTER</button>
            </a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
