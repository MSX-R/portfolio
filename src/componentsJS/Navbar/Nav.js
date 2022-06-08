import React from "react";
import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

/*Import des icones */
import { FaUserCircle, FaLaptopCode, FaTeamspeak } from "react-icons/fa";
import MsxLogo from "../../assets/logoblanc.png";

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
      <nav
        className={`navbar ${
          showLinks ? "showNavbarMobile" : "hideNavbarMobile"
        }`}
      >
        
        <div className="navbarLeftBlock">
          <Link to="/">
            <img src={MsxLogo} alt="logo-mini" className="msxIcon" />
          </Link>
          <p className="marsaleixRomain">MARSALEIX ROMAIN</p>
          <div className="separationLineNameJob"></div>
          <p className="developpeurWeb">Développeur web/mobile</p>

          {/* MENU MOBILE */}
          <button className="navbarBurger" onClick={handleShowLinks}>
            <span className="burgerBar"></span>
          </button>
        </div>

        {/* MENU PC */}
        <div className="navbarRightBlock desktopMod">
          <NavHashLink
            to="/Marsaleix-Romain/Presentation"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="navbarLinks"
            title="Accéder à l'Accueil"
          >
            <FaUserCircle />
          </NavHashLink>

          <NavHashLink
            to="/Marsaleix-Romain/Projets"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="navbarLinks"
            title="Accéder aux Projets"
          >
            <FaLaptopCode />
          </NavHashLink>

          <NavHashLink
            to="/Marsaleix-Romain/Formulaire-de-contact"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="navbarLinks "
            title="Accéder au Formulaire de contact"
          >
            <FaTeamspeak />
          </NavHashLink>

          <NavHashLink
            to="/Marsaleix-Romain/Formulaire-de-contact"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            title="Accéder au Formulaire de contact"
            onClick={closeMenu}
          >
            <button className="recruteMe">ME RECRUTER</button>
          </NavHashLink>

        </div>

        {/* MENU MOBILE */}
        <ul className="navbarMenuLinks mobileMod">
          <div
            className="navbarItem slideInDown-0"
            onClick={closeMenu}
          >
            <img
              src={MsxLogo}
              alt="Logo MSX taille miniature"
              className="msxIcon msxIconMobileMenu"
            />

            <div className="separationLineNameJob2"></div>
            <p className="marsaleixRomain2">MARSALEIX ROMAIN</p>
          </div>
          <li className="navbarItem slideInDown-1">
            <NavHashLink
              to="/Marsaleix-Romain/Presentation"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
              //etc...
              className="navbarLinks navbarLink "
              title="Accéder à l'Accueil"
              onClick={closeMenu}
            >
              <FaUserCircle className="Fa-icons" />
              <p className="text-icons">Accéder à l'Accueil</p>
            </NavHashLink>
          </li>
          <li className="navbarItem slideInDown-2">
            <NavHashLink
              to="/Marsaleix-Romain/Projets"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
              //etc...
              className="navbarLinks navbarLink "
              title="Accéder aux projets"
              onClick={closeMenu}
            >
              <FaLaptopCode className="Fa-icons" />
              <p className="text-icons">Accéder aux Projets</p>
            </NavHashLink>
          </li>
          <li className="navbarItem slideInDown-3">
            <NavHashLink
              to="/Marsaleix-Romain/Formulaire-de-contact"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
              //etc...
              className="navbarLinks navbarLink "
              title="Accéder au Formulaire de contact"
              onClick={closeMenu}
            >
              <FaTeamspeak className="Fa-icons" />
              <p className="text-icons">Accéder au Formulaire de contact</p>
            </NavHashLink>
          </li>

          <li className="navbarItem slideInDown-4">
            <NavHashLink
              to="/Marsaleix-Romain/Formulaire-de-contact"
              activeClassName="selected"
              className="navbarLinks navbarLink "
              activeStyle={{ color: "red" }}
              title="Accéder au Formulaire de contact"
              onClick={closeMenu}
            >
              <button className="recruteMe">ME RECRUTER</button>
            </NavHashLink>

            {/* <a
              href="tel:0011223344"
              className="navbarLink "
              // title="Cliquer pour passer un appel"
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
