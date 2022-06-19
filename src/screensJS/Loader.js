import React, { useEffect, useState } from 'react'
import logobleu from '../assets/logoblanc.png'
import './Loader.css'
import Portfolio from './Portfolio';
import './Portfolio.css'
// import { Outlet } from 'react-router-dom';
// RIEN NE S AFFICHE A CAUSE DU OUTLET QUI DEPEND D UN CLICK SUR BOUTTON JE PENSE

const Intro = () => {
  return (
  <div className='page-welcome'>
      <div className="bloc-logo">
     <img src={logobleu} alt="logo" className="logo-welcome"/>
    </div>
    </div>
    )
};

const Loader = () => {

const [loader, setLoader] = useState(true);

useEffect(() => {
    setTimeout(() => {
        setLoader(false);
    }, 4000);
}, [])

  return loader ? (<Intro/>) : (<Portfolio/>)
}

export default Loader