import React, { useState } from "react";
import Adrien from "../assets/pics/adrien-pic.png";
import Marcelo from "../assets/pics/marcelo-pic.png";
import Theo from "../assets/pics/theo-pic.png";

import Bread from "../assets/bread-icon.svg";
import Bowl from "../assets/bowl-icon.svg";
import Spoon from "../assets/spoon-icon.svg";

import "./AboutUs.scss";

function AboutUs() {
  const [isClicked, setIsClicked] = useState({
    Adrien: false,
    Marcelo: false,
    Theo: false,
  });

  const handleClickProfil = (profilName) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [profilName]: !prevState[profilName],
    }));
  };

  return (
    <div className="main-profil">
      <div className="profil-container">
        <button
          className="profil-pic-button"
          onClick={() => handleClickProfil("Adrien")}
          type="button"
        >
          <img className="profil-pic" src={Adrien} alt="adrien-pic" />
        </button>
        <h2 className="profil-title">Adrien</h2>
        <p
          className={`profil-description ${
            isClicked.Adrien ? "displayOn" : "displayOff"
          }`}
        >
          Adrien, c'est le développeur web qui pourrait être confondu avec un
          magicien. Sa capacité à transformer des lignes de code en sites web
          époustouflants relève de l'art. Avec une élégance presque mystique, il
          jongle avec HTML, CSS et JavaScript comme s'ils étaient les cartes
          d'un jeu de tarot. Chaque projet est pour lui un défi, et il les
          aborde avec une créativité débordante. Quand Adrien prend les rênes
          d'un projet, on peut être sûr que le résultat sera magique, aussi bien
          visuellement que techniquement.
        </p>
        <img
          className={`profil-icon ${
            isClicked.Adrien ? "displayOn" : "displayOff"
          }`}
          src={Bread}
          alt="bread"
        />
      </div>
      <div className="profil-container">
        <button
          className="profil-pic-button"
          onClick={() => handleClickProfil("Marcelo")}
          type="button"
        >
          <img className="profil-pic" src={Marcelo} alt="marcelo-pic" />
        </button>
        <h2 className="profil-title">Marcelo</h2>
        <p
          className={`profil-description ${
            isClicked.Marcelo ? "displayOn" : "displayOff"
          }`}
        >
          Marcelo, c'est le génie du backend. Il navigue dans les bases de
          données et les serveurs avec une aisance déconcertante. Pour lui, la
          sécurité et la stabilité sont les maîtres mots de tout développement
          web. Il aime résoudre les problèmes complexes, que ce soit en
          optimisant les requêtes SQL ou en mettant en place des systèmes de
          sauvegarde impeccables. Marcelo est le gardien des données, veillant à
          ce que tout fonctionne parfaitement en coulisses, permettant ainsi aux
          utilisateurs de profiter d'une expérience web sans faille.
        </p>
        <img
          className={`profil-icon ${
            isClicked.Marcelo ? "displayOn" : "displayOff"
          }`}
          src={Bowl}
          alt="bowl"
        />
      </div>
      <div className="profil-container">
        <button
          className="profil-pic-button"
          onClick={() => handleClickProfil("Theo")}
          type="button"
        >
          <img className="profil-pic" src={Theo} alt="theo-pic" />
        </button>
        <h2 className="profil-title">Théo</h2>
        <p
          className={`profil-description ${
            isClicked.Theo ? "displayOn" : "displayOff"
          }`}
        >
          Théo, chaman des quatre terres, druide de l’ancien monde, grand PO
          suprême, concquérant des cinq royaumes, élu parmis les élus, artisan
          du design web Il accorde une attention méticuleuse aux détails et
          s'efforce de créer des interfaces utilisateur élégantes et intuitives.
          Avec un sens aigu de l'esthétique, il jongle avec les palettes de
          couleurs, les typographies et les éléments graphiques pour donner vie
          à des sites web qui captivent l'œil. Chaque pixel est soigneusement
          placé, et chaque transition est pensée avec minutie. Théo sait que la
          beauté et la convivialité vont de pair, et il s'efforce de créer des
          expériences web qui laissent une impression durable.
        </p>
        <img
          className={`profil-icon ${
            isClicked.Theo ? "displayOn" : "displayOff"
          }`}
          src={Spoon}
          alt="spoon"
        />
      </div>
    </div>
  );
}

export default AboutUs;
