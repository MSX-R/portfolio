import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; //import de swiper
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core"; //Pour activer le keyboard
import { Autoplay, Pagination, Navigation } from "swiper"; //Pour activer les modules de pagination et navigation
import "./SwiperReact.css";
// Import Swiper styles propre au composant
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//
import Im1 from "./assets/1.png";
import Im2 from "./assets/2.png";
import Im21 from "./assets/2-1.png";
import Im22 from "./assets/2-2.png";
import Im23 from "./assets/2-3.png";
import Im3 from "./assets/3.png";
import Im4 from "./assets/4.png";
import Im5 from "./assets/5.png";

SwiperCore.use([Keyboard, Mousewheel]); //Pour utiliser le keyboard et souris

const SwiperReact = () => {
  return (
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
        <div className="legend-project">ACCUEIL DU SITE - PRESENTATION</div>
      </SwiperSlide>
      <SwiperSlide className="Slide">
        <img src={Im22} alt="Homepage presentation footer" />
        <div className="legend-project">ACCUEIL DU SITE - FOOTER</div>
      </SwiperSlide>
      <SwiperSlide className="Slide">
        {" "}
        <img src={Im23} alt="Presentation du salon" />
        <div className="legend-project">LE SALON DE COIFFURE</div>
      </SwiperSlide>
      <SwiperSlide className="Slide">
        {" "}
        <img src={Im3} alt="Galerie photos" />
        <div className="legend-project">LA GALERIE PHOTO</div>
      </SwiperSlide>
      <SwiperSlide className="Slide">
        <img src={Im4} alt="Tableau tarifaires" />
        <div className="legend-project">LES TARIFS DU SALON</div>
      </SwiperSlide>

      <SwiperSlide className="Slide">
        <img src={Im5} alt="Formulaire de contact" />
        <div className="legend-project">LE FORMULAIRE DE CONTACT</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperReact;
