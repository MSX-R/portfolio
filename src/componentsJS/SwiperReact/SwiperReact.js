import { useState } from "react";
// Swiper
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core"; //Pour activer le keyboard

// Style
import "./SwiperReact.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// React Icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaUnity,
  FaFigma,
  FaTeamspeak,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiVisualstudio,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/si";
//JSON

import { Link } from "react-router-dom";
import SlideNextButton from "./swiperbtnNEXT";
import SlidePrevButton from "./swiperbtnPREV";

SwiperCore.use([Keyboard, Mousewheel]); //Pour utiliser le keyboard et souris

const SwiperReact = ({ langue, projectVersion }) => {
  const [path, setPath] = useState(0);

  const changePath = (number, event) => {
    setPath(number);
  };

  const icons = (icon) => {
    switch (icon) {
      case "FaReact":
        return <FaReact className="outils-icons" />;
      case "FaHtml5":
        return <FaHtml5 className="outils-icons" />;
      case "FaCss3Alt":
        return <FaCss3Alt className="outils-icons" />;
      case "FaGithub":
        return <FaGithub className="outils-icons" />;
      case "SiJavascript":
        return <SiJavascript className="outils-icons" />;
      case "FaNodeJs":
        return <FaNodeJs className="outils-icons" />;
      case "SiMysql":
        return <SiMysql className="outils-icons" />;
      case "SiVisualstudio":
        return <SiVisualstudio className="outils-icons" />;
      case "FaUnity":
        return <FaUnity className="outils-icons" />;
      case "SiAdobephotoshop":
        return <SiAdobephotoshop className="outils-icons" />;
      case "SiAdobepremierepro":
        return <SiAdobepremierepro className="outils-icons" />;
      case "FaFigma":
        return <FaFigma className="outils-icons" />;

      default:
        console.log(`Error`);
    }
  };

  return (
    <>
      {projectVersion &&
        [projectVersion[path]].map((item, i) => (
          <div key={i} className="contenu-swiper">
            <div className="btn-project-changer blocSpace ">
              <button
                className="btn-project "
                id="btn"
                onClick={() => changePath(0)}
              >
                L'ATELIER D'ADELINE
              </button>
              <button
                className="btn-project "
                id="btn"
                onClick={() => changePath(1)}
              >
                SOS JEUNES POUSSES
              </button>
              <button
                className="btn-project "
                id="btn"
                onClick={() => changePath(2)}
              >
                MOODY PLATEFORME VOD
              </button>
              <button
                className="btn-project "
                id="btn"
                onClick={() => changePath(3)}
              >
                POUDLARD UNIVERSITY
              </button>
              <button
                className="btn-project "
                id="btn"
                onClick={() => changePath(4)}
              >
                SUPER MULTIVERSE 2D
              </button>
              <button
                className="btn-project "
                id="btn"
                onClick={() => changePath(5)}
              >
                créations graphiques
              </button>
            </div>

            <div className="blocText-projet">
              {item.lien_Github ? ( // s il exite un lien github dans objet item = creation d'un link externe github
                <Link to={item.lien_Github}>
                  <h2>{item.title}</h2>
                </Link>
              ) : (
                <h2>{item.title}</h2>
              )}
              {/* NE MARCHE PAS LES LIENS POUR ATTACHER GITHUB!!! */}

              <div>
                <h3 className="titre-description-projet">
                  {langue["projets.description"]}
                </h3>
                <p className="description-projet">{item.description}</p>
              </div>
              <div className="outils-projets blocSpace">
                <h3 className="titre-outils-projet">
                  {langue["projets.stack"]}
                </h3>

                {item.outils.map((el, i) => {
                  return (
                    <p
                      key={i}
                      className={
                        el.iconName === "FaGithub" &&
                        item.title !== "POUDLARD UNIVERSITY"
                          ? "iconGitHub"
                          : ""
                      }
                    >
                      {/* {item.lien_Github ? (
                        <a href={langue["projets[${i}].description"]} target>
                          {icons(el.iconName)}
                        </a>
                      ) : ( */}
                      {icons(el.iconName)}
                      {/* )} */}
                    </p>
                  );
                })}
              </div>
            </div>

            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              pagination={{
                type: "progressbar",
                nextEl: ".review-swiper-button-next",
                prevEl: ".review-swiper-button-prev",
              }}
              navigation={false} //Desactivation des boutons au centre de l'image ! true pour reactiver
              modules={[Pagination, Navigation]}
              className="mySwiper blocSpace"
              loop={true}
              direction="horizontal"
              keyboard={true}
              mousewheel={true}
            >
              {item.pictures.map((el, i) => {
                return (
                  <SwiperSlide key={i} className="Slide ">
                    <div>
                      <a
                        TARGET="_blank"
                        href={require(`./assets/${el.picture}.png`)}
                      >
                        <img
                          src={require(`./assets/${el.picture}.png`)}
                          alt={el.name}
                          title="Cliquez sur l'image pour l'afficher dans un nouvel onglet"
                        />{" "}
                      </a>
                    </div>

                    <div className="legendETicons">
                      <SlidePrevButton />
                      {/* <button onClick={() => swiper.slidePrevious()}>
                          
                        </button> */}
                      <div className="legend-project">
                        {el.name.toUpperCase()}
                      </div>{" "}
                      {/*                         
                        <button onClick={() => swiper.slideNext()}>
                          
                          </button> */}
                      <SlideNextButton />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Link
              to="/Marsaleix-Romain/Formulaire-de-contact"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
              //etc...
              className="navbarLinks navbarLink "
              title={langue.goToContact}
            >
              <FaTeamspeak className="Fa-icons" />
              <p className="text-icons">{langue.goToContact}</p>
            </Link>
          </div>
        ))}
    </>
  );
};

export default SwiperReact;
