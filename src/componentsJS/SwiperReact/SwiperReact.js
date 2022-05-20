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
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs, FaUnity} from "react-icons/fa";
import { SiJavascript, SiMysql, SiVisualstudio, SiAdobephotoshop } from "react-icons/si";

//JSON
import Projects from "../ProjetsJSON/Projects.json";

SwiperCore.use([Keyboard, Mousewheel]); //Pour utiliser le keyboard et souris

const SwiperReact = () => {
  const [path, setPath] = useState(0);

  const changePath = (number) => {
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
      default:
        console.log(`Error`);
    }
  };
  return (
    <>
      {Projects &&
        [Projects[path]].map((item, i) => (
          <div key={i} className="contenu-swiper">
            <div className="btn-project-changer">
              <button onClick={() => changePath(0)}>L'ATELIER D'ADELINE</button>
              <button onClick={() => changePath(1)}>SOS JEUNES POUSSES</button>
              <button onClick={() => changePath(2)}>MOODY PLATEFORME VOD</button>
              <button onClick={() => changePath(3)}>POUDLARD UNIVERSITY</button>
              <button onClick={() => changePath(4)}>SUPER MULTIVERSE 2D</button>
            </div>
            <div className="bloc-texte-projet">
              <h2>{item.title}</h2>

              <div>
                <h3 className="titre-description-projet">
                  Description du projet
                </h3>
                <p className="description-projet">{item.description}</p>
              </div>
              <div className="outils-projets">
                <h3 className="titre-outils-projet">Outils utilisés :</h3>
                {item.outils.map((el, i) => {
                  return <p key={i}>{icons(el.iconName)}</p>;
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
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              loop={true}
              direction="horizontal"
              keyboard={true}
              mousewheel={true}
            >
              {item.pictures.map((el, i) => {
                return (
                  <SwiperSlide key={i} className="Slide">
                    <div>
                      <img
                        src={require(`./assets/${el.picture}.png`)}
                        alt={el.name}
                      />
                      <div className="legend-project">{el.name}</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ))}
    </>
  );
};

export default SwiperReact;
