import React from "react";
import "./Home.css";
// import Header from "../componentsJS/Header";
import photosport from "../assets/photo-home.png";
import SwiperReact from "../componentsJS/SwiperReact/SwiperReact"; //Scroll slide pour photo projet

// import ScrollHE from "../componentsJS/ScrollHorizontalEnzo/ScrollHE"; //Ajout scroll Horizontale pour changer de projet
import Nav from "../componentsJS/Navbar/Nav";
import Formulaire from "../componentsJS/Formulaire/Formulaire";
import TexteDefilant from "../componentsJS/TexteDefilant";
import BtnProjectChanger from "../componentsJS/BtnProjectChanger/BtnProjectChanger";

const Home = () => {
  return (
    <div className="container">
      {/* <Header /> */}
      <Nav />

      <div className="v-slider-bloc" id="home-part">
        
        <div className="zone-text-presentation">
          {" "}
          <h1>Hello !</h1>
          <img src={photosport} alt="imageSmile" className="photosport" />
          <h2>
            Je m'appelle Marsaleix Romain, <br className="br-presentation" />
            je suis <span className="dev-presentation">Développeur Web !</span>
          </h2>

          <div className="bloc-text-description">
            <p>
              Anciennement <b>coach sportif</b>, j'ai fait le choix de{" "}
              <abbr title=' on peut même dire " changer de vie " pour être totalement honnête &#128514;'>
                changer de voie
              </abbr>{" "}
              et de m'orienter dans le secteur des métiers du Numérique, un
              secteur qui ne cesse d'évoluer !
            </p>{" "}
            <p>
              En fin d'année 2021, j'ai décidé de me former auprès de{" "}
              <em>la Wild Code School</em> en intégrant une formation en remote.
            </p>
            <br />
            <p>
              <b>
                {" "}
                Ayant terminé la partie "cours", je dois dorénavant trouver un
                stage
              </b>{" "}
              afin de mettre à profit mon savoir-faire auprès d'une entreprise,
              gagner en compétences{" "}
              <b>
                {" "}
                et surtout participer à une aventure, qui je le souhaite, sera
                très enrichissante !
              </b>
            </p>
          </div>
          <TexteDefilant />
        </div>
      </div>

      <div className="v-slider-bloc" id="project-part">
        <SwiperReact />
        {/* <BtnProjectChanger/> */}
      </div>

      <div className="v-slider-bloc" id="form-part">
        <Formulaire />
      </div>
    </div>
  );
};

export default Home;
