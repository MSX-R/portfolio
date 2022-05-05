import React from "react";
import "./TexteDefilant.css";
import { RiTimerFlashLine } from "react-icons/ri";

const TexteDefilant = () => {
  return (
    <div class="bloc-news">
      <div className="breaking-news">
        FLASH <RiTimerFlashLine />
        INFOS
      </div>

      <div className="marquee-rtl">
        <p className="text-defilant">
          Je suis actuellement à la recherche d'
          <span className="important-text"> un stage en entreprise</span> d'une durée de <span className="important-text"> 2 à 4 mois</span> sur
          le secteur <span className="important-text">Nice - Sophia Antipolis</span>. 
          
          
        </p>
      </div>
    </div>
  );
};

export default TexteDefilant;
