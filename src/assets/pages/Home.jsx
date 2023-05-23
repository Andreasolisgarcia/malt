import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
           <h1>Bienvenue ! </h1> 
           <p>Veuillez completer  <Link to="/profile">votre Profil</Link> pour continuer</p>
           
        </div>
    );
};

export default Home;