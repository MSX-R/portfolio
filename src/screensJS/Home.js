import React from "react";
import "./Home.css";
import Header from "../componentsJS/Header";
import photosport from "../assets/photo-home.png";
import SwiperReact from "../componentsJS/SwiperReact/SwiperReact"; //Scroll slide pour photo projet

import ScrollHE from "../componentsJS/ScrollHorizontalEnzo/ScrollHE"; //Ajout scroll Horizontale pour changer de projet

const Home = () => {
  return (
    <div className="container">
      <Header />

      <div className="v-slider-bloc" id="home-part">
        <h1>Accueil</h1>
      </div>

      <div className="v-slider-bloc" id="project-part">
        <ScrollHE />
      </div>

      <div className="v-slider-bloc" id="form-part">
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className="bloc-main-home">
      
      
      <div className="bloc-text1-home">
        <p>Bonjour <br></br>Je m'appelle</p>
        <div className="titres-home"><p className="nom-home">MARSALEIX</p> 
        <p className="prenom-home">ROMAIN</p></div>
      </div><img src={photosport} alt="imageSmile" className="photosport" />
      </div>
    Bienvenue sur Home   */
}
