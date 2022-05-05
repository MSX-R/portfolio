import React from "react";
import "./Home.css";
// import Header from "../componentsJS/Header";
import photosport from "../assets/photo-home.png";
import SwiperReact from "../componentsJS/SwiperReact/SwiperReact"; //Scroll slide pour photo projet

import ScrollHE from "../componentsJS/ScrollHorizontalEnzo/ScrollHE"; //Ajout scroll Horizontale pour changer de projet
import Nav from "../componentsJS/Navbar/Nav";
import Formulaire from "../componentsJS/Formulaire/Formulaire";

const Home = () => {
  return (
    <div className="container">
      {/* <Header /> */}
      <Nav />

      <div className="v-slider-bloc presentation-perso" id="home-part">
        <div className="zone-text-presentation">
          <h1>Hello !</h1>
          <h2>Je suis MARSALEIX ROMAIN</h2>
          <p>Je suis un développeur web sortant d'une formation en remote effectuée auprès de la WILD CODE SCHOOL.</p>


          <div className="Text-effect">
          Pour me présenter furtivement, avant de me former à ce nouveau métier j'ai été : 
<div id="flip">
  <div><div>coach sportif</div></div>
  <div><div>manager</div></div>
  <div><div>organisateur d'évènements</div></div>
  <div><div>vendeur</div></div>
  <div><div>agent de sécurité</div></div>
  <div><div>livreur</div></div>
  <div><div>mais j'ai décidé d'évoler vers un metier d'avenir: DEV WEB</div></div>



</div>

          </div>


        </div>
        
      </div>

      <div className="v-slider-bloc" id="project-part">
        <ScrollHE />
      </div>

      <div className="v-slider-bloc" id="form-part">
        <Formulaire />
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
