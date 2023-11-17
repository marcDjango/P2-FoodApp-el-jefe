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
          Adrien, it is the web developer who could be confused with a Wizard.
          Its ability to transform lines of code into websites breathtaking is
          art. With an almost mystical elegance, he Juggles HTML, CSS and
          JavaScript as if they were cards from a tarot deck. Each project is a
          challenge for him, and he approaches with boundless creativity. When
          Adrien takes the reins of a project, we can be sure that the result
          will be magical, as well visually and technically.
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
          Marcelo, this is the genius of the backend. He navigates the basics of
          data and servers with disconcerting ease. For him, the security and
          stability are the key words of all development web. He enjoys solving
          complex problems, whether in optimizing SQL queries or setting up
          monitoring systems impeccable backup. Marcelo is the data keeper,
          ensuring ensures that everything works perfectly behind the scenes,
          allowing users to enjoy a seamless web experience.
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
          Théo, shaman of the four lands, druid of the old world, great PO
          supreme, conqueror of the five kingdoms, chosen among the chosen,
          artisan of web design He pays meticulous attention to details and
          strives to create elegant and intuitive user interfaces. With a keen
          sense of aesthetics, he juggles with palettes of colors, typographies
          and graphic elements to bring life to websites that captivate the eye.
          Every pixel is carefully placed, and each transition is carefully
          thought out. Theo knows that beauty and friendliness go hand in hand,
          and he strives to create web experiences that leave a lasting
          impression.
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
