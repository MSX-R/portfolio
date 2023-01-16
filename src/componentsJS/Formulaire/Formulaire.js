import React from "react";
import emailjs from "emailjs-com";
import "./Formulaire.css";

import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import UK from "../../languages/eng-ENG.json";

function Formulaire({ langue }) {
  const sendEmail = (e, langue) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cke9mha",
        "template_kdu7mra",
        e.target,
        "u4Bsdgwe03YEAP_7F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(" Email envoyé à Romain / Email send to Romain");
  };

  return (
    <div className="contenu-swiper">
      <div className="text-form blocSpace blocText">
        <h2>{langue["formulaire.title"]}</h2>
        <p>
          {langue["formulaire.intro-1"]}
          <br />
          {langue["formulaire.intro-2"]}
        </p>
        <h3>{langue["formulaire.fin-intro"]}</h3>
      </div>
      <form
        className="container-form contentSize blocSpace"
        onSubmit={sendEmail}
      >
        <label htmlFor="nom">{langue["formulaire.formLastName"]}</label>
        <input
          type="text"
          id="nom-client"
          name="user_lastname"
          placeholder={langue["formulaire.formLastNamePlaceholder"]}
          required
        />

        <label htmlFor="prenom">{langue["formulaire.formFirstName"]}</label>
        <input
          type="text"
          id="prenom-client"
          name="user_firstname"
          placeholder={langue["formulaire.formFirstNamePlaceholder"]}
          required
        />

        <label htmlFor="telephone">{langue["formulaire.formTelephone"]}</label>
        <input
          type="tel"
          id="telephone-client"
          name="user_telephone"
          placeholder={
            langue === UK
              ? "(+33) " +
                langue["formulaire.formTelephonePlaceholder"].substring(1, 14)
              : langue["formulaire.formTelephonePlaceholder"]
          }
          required
        />

        <label htmlFor="email">{langue["formulaire.formEmail"]}</label>
        <input
          type="email"
          id="email-client"
          name="user_email"
          placeholder={langue["formulaire.formEmailPlaceholder"]}
          required
        />

        <label htmlFor="message">{langue["formulaire.formMessage"]}</label>

        <textarea
          placeholder={langue["formulaire.formMessagePlaceholder"]}
          name="user_message"
          required
        ></textarea>

        <div className="btns-form">
          <input
            type="reset"
            value={langue["formulaire.reset"]}
            className="btn-form"
            id="btn-reset"
          />
          <input
            type="submit"
            value={langue["formulaire.sentAction"]}
            className="btn-form"
            id="btn-submit"
          />
        </div>
      </form>

      <Link
        to="/Marsaleix-Romain/Presentation"
        activeClassName="selected"
        activeStyle={{ color: "red" }}
        //etc...
        className="navbarLinks navbarLink "
        title={langue["goBackToHome"]}
      >
        <FaUserCircle className="Fa-icons" />
        <p className="text-icons">{langue["goBackToHome"]}</p>
      </Link>
    </div>
  );
}

export default Formulaire;
