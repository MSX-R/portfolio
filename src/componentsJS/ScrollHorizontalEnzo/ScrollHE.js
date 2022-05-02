import React from "react";
import SwiperReact from "../SwiperReact/SwiperReact";
import "./ScrollHE.css";
const ScrollHE = () => {
  return (
    //     <div className="container">
    // <div className="blocHorizontal blocVertical">
    //     <div className="slide one">Slide 1</div>
    //     <div className="slide two">Slide 2</div>
    //     <div className="slide three">Slide 3</div>
    //     <div className="slide four">Slide 4</div>
    // </div>

    //     </div>

    /* FAIRE PASSER LES PROPS ICI POUR CHANGER LES CONTENU ! MAP ICI */

    <div className="wrapper">
      <section id="Projet1">
        {/* <SwiperReact /> */}Hello
        {/* PROPS A PASSER ICI POUR PROJET 1 + PENSEZ AU CHANGEMENT VIA LES BOUTONS */}
      </section>
      <section id="Projet2">
        <SwiperReact />
      </section>
      {/* PROPS A PASSER ICI POUR PROJET 2 ETC */}

      <section>3</section>

      <section>4</section>

      {/* CHANGEMENT ICI DE LA TOTALITE SUR UN SEUL COMPOSANT ? et au click sur composat bouton, ca change le contenu ? */}
    </div>
  );
};

export default ScrollHE;
