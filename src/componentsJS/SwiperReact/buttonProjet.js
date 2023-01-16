import React from "react";

const buttonProjet = ({ changePath, projet, index }) => {
  return (
    <>
      <button
        className="btn-project "
        id="btn"
        onClick={() => changePath(index)}
      >
        {projet.title}
      </button>
    </>
  );
};

export default buttonProjet;
