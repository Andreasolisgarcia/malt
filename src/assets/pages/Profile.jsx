import React from "react";

const Profile = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          firstname: event.target.firstname.value,
          surname: event.target.surname.value,
          skills: event.target.skills.value.split(','),
        };
        console.log(data); // Logging form data to the console
      };

  return (
    <div className="grid-container">
      <h1>Mon Profil</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="firstname">Prénom</label>
        <input type="text" id="firstname" placeholder="Prénom :" />

        <label htmlFor="surname">Nom :</label>
        <input type="text" id="surname" placeholder="Nom" />

        <label htmlFor="skills">Compétences :</label>
        <input
          id="skills"
          placeholder="Vos compétences séparées par des virgules"
        />

        <button type="submit" id="btn-submit">
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

export default Profile;
