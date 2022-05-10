import React from "react";
import emailjs from "emailjs-com";
import "./Formulaire.css";

function Formulaire() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_akncxed",
        "template_hojc46n",
        e.target,
        "0ItmtyYDKo0ml59QP"
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
    alert("Votre demande a bien été envoyé ! Je vous recontacte sous peu ! ");
  };

  return (
    <div id="form">
      <h2>Formulaire de contact</h2>
      <p>
        Mon profil vous intéresse ? Vous souhaitez en découvrir plus à mon sujet ? 
        <br /> Vous souhaitez me proposer un stage ?
      </p>
      <h3>N'hésitez pas à me le faire savoir ! 
</h3>

      <form className="container-form" onSubmit={sendEmail}>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="nom-client"
          name="user_lastname"
          placeholder="Entrez votre nom"
        />

        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          id="prenom-client"
          name="user_firstname"
          placeholder="Entrez votre prenom"
        />

        <label htmlFor="telephone">Téléphone</label>
        <input
          type="tel"
          id="telephone-client"
          name="user_telephone"
          placeholder="06.05.04.03.02"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email-client"
          name="user_email"
          placeholder="votreentreprise@gmail.com"
        />

        <label htmlFor="message">Votre demande</label>

        <textarea
          placeholder="Bonjour Romain, j'ai un poste de stagiaire à vous proposer au sein de mon entreprise. Laissez-moi vous en dire plus au sujet de ce que nous recherchons et ce que nous vous proposons..."
          name="user_message"
        ></textarea>

        <input type="submit" value="Envoyer" id="btnSubmit" />
      </form>
    </div>
  );
}

export default Formulaire;
