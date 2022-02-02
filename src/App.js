import React from 'react';
import { Routes, Route } from "react-router-dom";
import Welcome from './screensJS/Welcome';
import Home from './screensJS/Home';
import Projets from './screensJS/Projets';
import Contact from './screensJS/Contact';
import Header from './componentsJS/Header';
import Footer from './componentsJS/Footer';

import './App.css'

const App = () => {
  return (
  <div className="App">
    <Header />
<h1>Espac pour le header</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
  </div>
  )};

export default App;
