import React, { useEffect, useState } from "react";
import "./Welcome.css";
import logobleu from "../assets/logoblanc.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [invisible, setInvisible] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInvisible("hidden");
      window.location.href =
        // "https://msx-r.github.io/portfolio/Marsaleix-Romain/Presentation";
        "http://localhost:3000/portfolio/Marsaleix-Romain/Presentation";
    }, 8500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-welcome  ${invisible}`}>
      <Link to="/Marsaleix-Romain/Presentation" className="logo-link">
        <div className="bloc-logo">
          <img src={logobleu} alt="logo" className="logo-welcome" />
        </div>
      </Link>
    </div>
  );
};

export default Welcome;
