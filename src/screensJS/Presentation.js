import React from "react";
import photosport from "../assets/photo-home.png";
import "./Presentation.css";

import {  FaLaptopCode} from "react-icons/fa";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <div className="contenu-swiper" id="homePart">
      <img src={photosport} alt="imageSmile" className="photosport" />
      <div className="blocText blocSpace presentationTitles">
        <h1 className="TextBlocSpace">Hello !</h1>
        <h2>
          Je m'appelle{" "}
          <span className="dev-presentation">Marsaleix Romain</span>,{" "}
          <br className="br-presentation" />
          je suis <span className="dev-presentation">Développeur Web !</span>
        </h2>{" "}
      </div>

      <div className="blocText presentationText blocSpace">
        <p>
          Auparavant <b>coach sportif et manager</b>, j'ai lors de l'année 2021
          fait le choix de{" "}
          <abbr title=' on peut même dire " changer de vie " pour être totalement honnête &#128514;'>
            changer de métier{" "}
          </abbr>
          et de me former auprès de la Wild Code School en formation 100%
          remote.
        </p>

        <br />
        <p className="blocSpace">
          Suite à 6 mois de formation & de projets ,{" "}
          <b>
            je suis à la recherche d'une opportunité me permettant de travailler
            en entreprise tout en gagnant en compétences.
          </b>
        </p>
        <br />
        <p className=" TextBlocSpace">
          <em>
            Vous souhaitez en savoir plus à mon sujet ?
            <br />
            N'hésitez pas à consulter mon profil Linkedin.
          </em>
        </p>

        <a href="https://www.linkedin.com/in/romainmarsaleix/">
          <button className="recruteMe">
            {" "}
            linkedin.com/in/romainmarsaleix{" "}
          </button>
        </a>
      </div>
      <Link
              to="/Marsaleix-Romain/Projets"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
              //etc...
              className="navbarLinks navbarLink "
              title="Accéder aux projets"
            >
              <FaLaptopCode className="Fa-icons" />
              <p className="text-icons">Accéder aux Projets</p>
            </Link>
    </div>
  );
};

export default Presentation;
