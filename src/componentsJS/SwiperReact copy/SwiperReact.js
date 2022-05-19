/* Import modules */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; //import de swiper
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core"; //Pour activer le keyboard
import { Autoplay, Pagination, Navigation } from "swiper"; //Pour activer les modules de pagination et navigation
/* Import css */
import "./SwiperReact.css";
// Import Swiper styles propre au composant
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//Import React Icons elements & IMAGES
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Im1 from "./assets/adeline1.png";
import Im2 from "./assets/adeline2.png";
import Im21 from "./assets/adeline3.png";
import Im22 from "./assets/adeline4.png";
import Im23 from "./assets/adeline5.png";
import Im3 from "./assets/adeline6.png";
import Im4 from "./assets/adeline7.png";
import Im5 from "./assets/adeline8.png";

SwiperCore.use([Keyboard, Mousewheel]); //Pour utiliser le keyboard et souris

const SwiperReact = () => {
  return (
    <div className="contenu-swiper">
      <div className="bloc-texte-projet">
        <h2>L'ATELIER D'ADELINE</h2>
        {/* Titre à changer */}

        <div>
          <h3 className="titre-description-projet">Description du projet</h3>
          <p className="description-projet">
            {" "}
            {/* description à changer */}
            Site internet proposant une présentation d'entreprise, une galerie
            photo, un tableau tarifaire ainsi qu'un formulaire de contact
            fonctionnel.
          </p>
        </div>

        <h3 className="titre-outils-projet">Outils utilisés :</h3>
        <div className="outils-projets">
          {" "}
          {/* Outils à changer */}
          <FaHtml5 className="outils-icons" />
          <FaCss3Alt className="outils-icons" />
          <SiJavascript className="outils-icons" />
          <FaReact className="outils-icons" />
          <FaGithub className="outils-icons" />
        </div>
      </div>

      <Swiper
        // centeredSlides={true}

        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true} //Boucle active
        direction="horizontal"
        keyboard={true}
        mousewheel={true}
      >
        <SwiperSlide className="Slide">
          <img src={Im1} alt="Accueil du site" />
          <div className="legend-project">PAGE D'ENTREE SUR LE SITE</div>
          {/* <div className="description-project">En cliquant sur le logo,</div> */}
        </SwiperSlide>
        <SwiperSlide className="Slide">
          <img src={Im2} alt="Homepage photo" />
          <div className="legend-project">ACCUEIL DU SITE</div>
        </SwiperSlide>
        <SwiperSlide className="Slide">
          <img src={Im21} alt="Homepage presentation" />
          <div className="legend-project">VISUEL TEXTE</div>
        </SwiperSlide>
        <SwiperSlide className="Slide">
          <img src={Im22} alt="Homepage presentation footer" />
          <div className="legend-project">LE FOOTER</div>
        </SwiperSlide>
        <SwiperSlide className="Slide">
          {" "}
          <img src={Im23} alt="Presentation du salon" />
          <div className="legend-project">LE SALON DE COIFFURE</div>
        </SwiperSlide>
        <SwiperSlide className="Slide">
          {" "}
          <img src={Im3} alt="Galerie photos" />
          <div className="legend-project">BOOK PHOTO</div>
        </SwiperSlide>
        <SwiperSlide className="Slide">
          <img src={Im4} alt="Tableau tarifaires" />
          <div className="legend-project">TARIFS DU SALON</div>
        </SwiperSlide>

        <SwiperSlide className="Slide">
          <img src={Im5} alt="Formulaire de contact" />
          <div className="legend-project">FORMULAIRE DE CONTACT</div>
        </SwiperSlide>
      </Swiper>

      <div className="btn-project-changer">
        <button>L'ATELIER D'ADELINE</button>
        <button>CRAZY WORLD 2D</button>
        <button>SOS JEUNES POUSSES</button>
        <button>CAPIUS GALLUS</button>
        <button>POUDLARD UNIVERSITY</button>
      </div>
    </div>
  );
};

export default SwiperReact;
