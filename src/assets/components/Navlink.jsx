import React from "react";
import reactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";

const Navlink = () => {
  return (
    <nav>
  <div className="logo-container">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </div>

  <ul className="links-container">
    <li><Link to="/">Accueil</Link></li>
    <li><Link to="/profile">Mon profil</Link></li>
  </ul>

  <ul className="user-info">
    <li>Inconnu</li>
    <li>Aucune competence</li>
  </ul>
</nav>
  );
};

export default Navlink;
