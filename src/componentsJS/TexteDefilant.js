import React from "react";
import "./TexteDefilant.css";
import { RiTimerFlashLine } from "react-icons/ri";

const TexteDefilant = () => {
  return (
    <div className="bloc-news">
      <div className="breaking-news">
        FLASH <RiTimerFlashLine className="chrono-icon-flash" /> INFOS
      </div>

      <div className="marquee-rtl">
        <p className="text-defilant">
          Je suis actuellement à la recherche d'
          <span className="important-text"> une alternance en entreprise</span> d'une
          durée de <span className="important-text"> 12 mois</span> sur le
          secteur{" "}
          <span className="important-text">Sophia Antipolis - Nice</span>.
        </p>
      </div>
    </div>
  );
};

export default TexteDefilant;
