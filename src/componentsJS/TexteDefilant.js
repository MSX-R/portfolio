import React from "react";
import "./TexteDefilant.css";
import { RiTimerFlashLine } from "react-icons/ri";

const TexteDefilant = ({ langue }) => {
  return (
    <div
      className="bloc-news 
    "
    >
      <div className="breaking-news">
        FLASH <RiTimerFlashLine className="chrono-icon-flash" /> INFOS
      </div>

      <div className="marquee-rtl">
        <p className="text-defilant">
          {langue["flash_infos-intro"]}
          <span className="important-text">
            {langue["flash_infos-missionY"]}
          </span>
          {langue["flash_infos-to-duration"]}
          <span className="important-text">
            {langue["flash_infos-durationY"]}
          </span>
          {langue["flash_infos-to-location"]}
          <span className="important-text">
            {langue["flash_infos-location"]}
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default TexteDefilant;
