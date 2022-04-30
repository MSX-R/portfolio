import React from 'react';
import'./Welcome.css'
import logobleu from '../assets/logoblanc.png'
import { Link } from 'react-router-dom';

const Welcome = () => {
  return ( 
  <div className="page-welcome">
    <Link to="/Home">
    <div className="bloc-logo">
     <img src={logobleu} alt="logo" className="logo-welcome"/>
    </div>
    </Link>
  </div>
  )
};

export default Welcome;