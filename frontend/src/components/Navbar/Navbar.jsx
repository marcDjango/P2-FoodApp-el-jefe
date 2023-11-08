import "./Style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import burger from "../../assets/Burger_menu.svg";
import croixBurger from "../../assets/croix_burger.svg";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [hamburOpen, setHamberOpen] = useState(false);

  const toggleHambur = () => {
    setHamberOpen(!hamburOpen);
  };
  const [isCategoriOpen, setIsCategoriOpen] = useState(true);

  const toggleCatégori = () => {
    setIsCategoriOpen(!isCategoriOpen);
  };

  return (
    <nav className="NavbarM">
      <img src={logo} className="Logo" alt="Logo" />

      <div className="MenuBurgall">
        {hamburOpen ? (
          <>
            <button type="button" onClick={toggleHambur}>
              <img
                src={croixBurger}
                className={`MenuBurgerF ${hamburOpen && "open"}`}
                alt="Burger menu"
              />
            </button>

            <div>
              {isCategoriOpen ? (
                <div className="Listcat">
                  <button
                    className="CatButton"
                    type="button"
                    onClick={toggleCatégori}
                  >
                    Catégorie
                  </button>
                  <Link to="/aboutus">About Us</Link>
                  <Link to="/">Nutri-score</Link>
                  <Link to="/aboutus">Think about</Link>
                </div>
              ) : (
                <div>
                  <button
                    className="CatButton"
                    type="button"
                    onClick={toggleCatégori}
                  >
                    Catégorie
                  </button>
                  <ul className="NavCat">
                    <li>France</li>
                    <li>Italy</li>
                    <li>Spain</li>
                    <li>Romania</li>
                    <li>China</li>
                    <li>Japan</li>
                  </ul>
                  <Link to="/aboutus">About Us</Link>
                  <Link to="/">Nutri-score</Link>
                  <Link to="/aboutus">Think about</Link>
                </div>
              )}
            </div>
          </>
        ) : (
          <button type="button" onClick={toggleHambur}>
            <img src={burger} className="MenuBurgero" alt="Burger menu" />
          </button>
        )}
      </div>
      <div className="NavbarO">
        <div>
          {isCategoriOpen ? (
            <div className="Catedest">
              <button
                className="CatButton"
                type="button"
                onClick={toggleCatégori}
              >
                Catégorie
              </button>
              <Link to="/aboutus">About Us</Link>
              <Link to="/">Nutri-score</Link>
              <Link to="/aboutus">Think about</Link>
            </div>
          ) : (
            <div className="Catedest">
              <div className="Catesolo">
                <button
                  className="CatButton"
                  type="button"
                  onClick={toggleCatégori}
                >
                  Catégorie
                </button>
                <ul className="NavCat">
                  <li>France</li>
                  <li>Italy</li>
                  <li>Spain</li>
                  <li>Romania</li>
                  <li>China</li>
                  <li>Japan</li>
                </ul>
              </div>
              <Link to="/aboutus">About Us</Link>
              <Link to="/">Nutri-score</Link>
              <Link to="/aboutus">Think about</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
