import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

/*Import des icones */
import { FaUserCircle, FaLaptopCode, FaTeamspeak } from "react-icons/fa";
import MsxLogo from "../../assets/logoblanc.png";
import { NavHashLink } from "react-router-hash-link"; // POUR PLACER DES ANCRES VIA ID dans le SITE

//LANGUAGE CHANGER
import frFlag from "../../assets/frFlag.png";
import ukFlag from "../../assets/ukFlag.png";
import UK from "../../languages/eng-ENG.json";
import FR from "../../languages/fr-FR.json";
import projetsFR from "../ProjetsJSON/projets-FR.json"; //projet francais
import projetsUK from "../ProjetsJSON/projets-ENG.json"; //projet francais

function Nav({ langue, setLangue, setProjectVersion }) {
  const [showLinks, setShowLinks] = useState(false);
  const [drapeau, setDrapeau] = useState(ukFlag);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => setShowLinks(false);

  console.log(showLinks); /* Pour verifier que ca passe bien de true a false */

  const langueChange = (drapeau) => {
    if (drapeau === frFlag) {
      setLangue(FR);
      setDrapeau(ukFlag);
      setProjectVersion(projetsFR);
    } else {
      setLangue(UK);
      setDrapeau(frFlag);
      setProjectVersion(projetsUK);
    }
  };

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
          <p className="developpeurWeb">{langue["nav_metier"]}</p>

          {/* MENU BURGERMOBILE */}
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
            title={langue.goToHome}
          >
            <FaUserCircle />
          </NavHashLink>

          <NavHashLink
            to="/Marsaleix-Romain/Projets"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="navbarLinks"
            title={langue.goToProjects}
          >
            <FaLaptopCode />
          </NavHashLink>

          <NavHashLink
            to="/Marsaleix-Romain/Formulaire-de-contact"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="navbarLinks "
            title={langue.goToContact}
          >
            <FaTeamspeak />
          </NavHashLink>
          <img
            onClick={() => langueChange(drapeau)}
            src={drapeau}
            alt="french flag"
            className="rotate-center navFlag"
          />
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
          <div className="navbarItem slideInDown-0" onClick={closeMenu}>
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
              <button className="recruteMe">
                {langue.nav_recrutement.toUpperCase()}
              </button>
            </NavHashLink>
          </li>

          <li className="navbarItem slideInDown-5">
            <img
              onClick={() => langueChange(drapeau)}
              src={drapeau}
              alt="language flag"
              activeClassName="selected"
              className="rotate-center navFlagMobile navbarLink"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
