import React from 'react'
import { Link } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link"; // POUR PLACER DES ANCRES VIA ID dans le SITE
/*Import des icones */
import { FaUserCircle, FaLinkedin, FaLaptopCode,FaTeamspeak  } from "react-icons/fa";
import "./slide.css";


const SlideNav = () => {
  return (
    <div className='slideNav'>
        <NavHashLink
            to="#home-part"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="slideNavButton"
            title="Accéder à l'Accueil"
          >
            <FaUserCircle />
          </NavHashLink>
        
          <NavHashLink
            to="#project-part"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="slideNavButton"
            title="Accéder aux Projets"
          >
            <FaLaptopCode />
          </NavHashLink>

          <NavHashLink
            to="#form-part"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            //etc...
            className="slideNavButton"
            title="Accéder au Formulaire de contact"
          >
            <FaTeamspeak />
          </NavHashLink>

          <a href="https://www.linkedin.com/in/romainmarsaleix/" className="slideNavButton" >
          <FaLinkedin/>
          </a>

    </div>
  )
}

export default SlideNav