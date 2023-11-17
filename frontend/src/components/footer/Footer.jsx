import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from "../../assets/Logo1.svg";
import Facebook from "../../assets/Facebook Icon.svg";
import Instagram from "../../assets/Instagram Icon.svg";
import Pinterest from "../../assets/Pinterest Icon.svg";
import Twitter from "../../assets/Twitter Icon.svg";
import Vector3 from "../../assets/vector3.png";

function Footer() {
  // State, données

  // Comportements (dynamique)
  function handleClickIcons(url) {
    window.open(url);
  }

  return (
    <div className="main" id="footer">
      <div className="vector2">
        <img src={Vector3} alt="wave" />
      </div>
      <div className="footer-menu">
        <div className="main-container">
          <div id="main-logo">
            <Link to="/">
              <img className="logo1" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="networks-pages">
            <div className="icons-networks">
              <div id="title-networks">
                <h2>Social links</h2>
              </div>
              <div>
                <button
                  onClick={() => handleClickIcons("https://www.facebook.com")}
                  type="button"
                >
                  <img src={Facebook} alt="facebook icon" />
                </button>
                <a
                  href="https://www.facebook.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </div>

              <div>
                <button
                  onClick={() => handleClickIcons("https://www.twitter.com")}
                  type="button"
                >
                  <img src={Twitter} alt="Twitter Icon" />
                </button>
                <a
                  href="https://www.twitter.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
              </div>

              <div>
                <button
                  onClick={() => handleClickIcons("https://www.instagram.com")}
                  type="button"
                >
                  <img src={Instagram} alt="instagram icon" />
                </button>
                <a
                  href="https://www.instagram.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </div>

              <div>
                <button
                  onClick={() => handleClickIcons("https://www.pinterest.com")}
                  type="button"
                >
                  <img src={Pinterest} alt="pinterest icon" />
                </button>
                <a
                  href="https://www.pinterest.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Pinterest
                </a>
              </div>
            </div>
            <div className="pages-container">
              <Link className="custom-link" to="/AboutUs">
                About us
              </Link>
              <Link className="custom-link" to="/nutriscore">
                Nutri-Score
              </Link>
              <Link className="custom-link" to="/tomorrow">
                Tomorrow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
