import React from "react";
import "./Portfolio.css";
import photosport from "../assets/photo-home.png";
import SwiperReact from "../componentsJS/SwiperReact/SwiperReact"; //Scroll slide pour photo projet

import Nav from "../componentsJS/Navbar/Nav";
import Formulaire from "../componentsJS/Formulaire/Formulaire";
import TexteDefilant from "../componentsJS/TexteDefilant";

const Portfolio = () => {
  return (
    <div className="container">
      <Nav />
      <div className="v-slider-bloc" id="home-part">
        <div className="zone-text-presentation">
          <h1>Hello !</h1>
          <img src={photosport} alt="imageSmile" className="photosport" />
          <h2>
            Je m'appelle Marsaleix Romain, <br className="br-presentation" />
            je suis <span className="dev-presentation">Développeur Web !</span>
          </h2>
          <div className="bloc-text-description">
            <p>
              Anciennement <b>coach sportif et manager</b>, j'ai fait le choix
              de{" "}
              <abbr title=' on peut même dire " changer de vie " pour être totalement honnête &#128514;'>
                changer de voie
              </abbr>{" "}
              pour le <b>Développement Web.</b>
            </p>
            <p>
              Pour se faire, j'ai suivi une formation intensive auprès de{" "}
              <em>la Wild Code School</em>.
            </p>

            <p>
              <b>Aujourd'hui, j'ai la possibilité et l'envie d'effectuer un stage en entreprise afin de gagner en compétences.</b>
            </p>
          </div>
          <TexteDefilant />
        </div>
      </div>

      <div className="v-slider-bloc" id="project-part">
        <SwiperReact />
      </div>

      <div className="v-slider-bloc" id="form-part">
        <Formulaire />
      </div>
    </div>
  );
};

export default Portfolio;
