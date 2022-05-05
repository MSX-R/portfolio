import React from "react";
import "./Home.css";
// import Header from "../componentsJS/Header";
import photosport from "../assets/photo-home.png";
import SwiperReact from "../componentsJS/SwiperReact/SwiperReact"; //Scroll slide pour photo projet

// import ScrollHE from "../componentsJS/ScrollHorizontalEnzo/ScrollHE"; //Ajout scroll Horizontale pour changer de projet
import Nav from "../componentsJS/Navbar/Nav";
import Formulaire from "../componentsJS/Formulaire/Formulaire";
import TexteDefilant from "../componentsJS/TexteDefilant";

const Home = () => {
  return (
    <div className="container">
      {/* <Header /> */}
      <Nav />

      <div className="v-slider-bloc presentation-perso" id="home-part">
        <div className="zone-text-presentation">
          <div >
            <h1>Hello !</h1>
              <h2>Je m'appelle Marsaleix Romain</h2><img src={photosport} alt="imageSmile" className="photosport" />
              <div className="bloc-text-description">
              <p>Anciennement [metier], j'ai en fin d'année 2021 fait le choix de changer de me diriger vers le secteur du numérique et de me former au métier de Developpeur Web"
                </p>
              <p>Pour ce faire, j'ai décidre de rejoindre la Wild Code School afin de me former à distance.  Parrallement à la formation initiale, j'ai également étudié via la plateforme OpenClassRoom.</p>
              <p>Entrant dans la période de fin de cursus de formation, j'ai une dernière chose à effectuer et non pas des moindres..</p></div>
            
            
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

export default Home;
