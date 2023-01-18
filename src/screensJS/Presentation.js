import React, { useState } from "react";
import "./Presentation.css";
import photoID from "../assets/yellowLigth.png";
import photoSH from "../assets/superhero3.png";

import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Presentation = ({ langue }) => {
  const [photo, setPhoto] = useState(photoID);

  // const hoverPictureChange1to2 = (picture1, picture2) => {
  //   if (photo === photoID) {
  //     setPhoto(photoSH);
  //   } else {
  //     setPhoto(photoID);
  //   }
  // };

  return (
    <div className="contenu-swiper" id="homePart">
      <img
        src={photo}
        alt="imageSmile"
        className="photoID fade-in-left0"
        // onMouseEnter={() => hoverPictureChange1to2(photoID, photoSH)}
      />
      <div className="blocText blocSpace presentationTitles fade-in-right ">
        <h1 className="TextBlocSpace">{langue["presentation.title-1"]}</h1>
        <h2>
          {langue["presentation.title-2-a"]} MARSALEIX ROMAIN
          <br />
          {langue["presentation.title-2-b"]}
        </h2>{" "}
      </div>

      <div className="blocText presentationText blocSpace fade-in-left ">
        <p>
          {langue["presentation.text-1"]}
          <abbr title={langue["presentation.text-1-abbr-description"]}>
            {langue["presentation.text-1-abbr-word"]}
          </abbr>
          {langue["presentation.text-2"]}
        </p>{" "}
        <br />
        <p className="blocSpace">{langue["presentation.text-3"]}</p> <br />
        <br />
        <p className=" TextBlocSpace">
          <em>
            {langue["presentation.knowMore-part1"]}
            <br />
            {langue["presentation.knowMore-part2"]}
          </em>
        </p>
        <a
          href="https://www.linkedin.com/in/romainmarsaleix/"
          className="recruteMePresentationBtn"
        >
          <button className="recruteMe color-change-2x">
            {" "}
            linkedin.com/in/romainmarsaleix{" "}
          </button>
        </a>
      </div>
      <Link
        to="/Marsaleix-Romain/Projets"
        activeClassName="selected"
        activeStyle={{ color: "red" }}
        //etc...
        className="navbarLinks navbarLink fade-in-left "
        title={langue.goToProjects}
      >
        <FaLaptopCode className="Fa-icons" />
        <p className="text-icons">{langue.goToProjects}</p>
      </Link>
    </div>
  );
};

export default Presentation;
