import "./Style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import burger from "../../assets/Burger_menu.svg";
import croixBurger from "../../assets/croix_burger.svg";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [hamburOpen, setHamberOpen] = useState(false);

  const toggleHamburger = () => {
    setHamberOpen(!hamburOpen);
  };
  const [isCategoriOpen, setIsCategoriOpen] = useState(true);

  const toggleCatégori = () => {
    setIsCategoriOpen(!isCategoriOpen);
  };

  return (
    <nav className="NavbarM">
      <Link to="/">
        <img src={logo} className="Logo" alt="Logo" />
      </Link>
      <div className="MenuBurgall">
        {hamburOpen ? (
          <>
            <button type="button" onClick={toggleHamburger}>
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
                  <Link to="/nutriscore">Nutri-score</Link>
                  <Link to="/thinkabout">Think about</Link>
                </div>
              ) : (
                <div className="Listcat">
                  <button
                    className="CatButton"
                    type="button"
                    onClick={toggleCatégori}
                  >
                    Catégorie
                  </button>
                  <ul className="NavCat">
                    <li>
                      <Link to="/categorie">Breackfast</Link>
                    </li>
                    <li>
                      <Link to="/categorie">Brunch</Link>
                    </li>
                    <li>
                      <Link to="/categorie">Dinner</Link>
                    </li>
                    <li>
                      <Link to="/categorie">Snack</Link>
                    </li>
                    <li>
                      <Link to="/categorie">Teatime</Link>
                    </li>
                  </ul>
                  <Link to="/aboutus">About Us</Link>
                  <Link to="/nutriscore">Nutri-score</Link>
                  <Link to="/thinkabout">Think about</Link>
                </div>
              )}
            </div>
          </>
        ) : (
          <button type="button" onClick={toggleHamburger}>
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
              <Link to="/nutriscore">Nutri-score</Link>
              <Link to="/thinkabout">Think about</Link>
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
                  <li>
                    <Link to="/categorie">Breackfast</Link>
                  </li>
                  <li>
                    <Link to="/categorie">Brunch</Link>
                  </li>
                  <li>
                    <Link to="/categorie">Dinner</Link>
                  </li>
                  <li>
                    <Link to="/categorie">Snack</Link>
                  </li>
                  <li>
                    <Link to="/categorie">Teatime</Link>
                  </li>
                </ul>
              </div>
              <Link to="/aboutus">About Us</Link>
              <Link to="/nutriscore">Nutri-score</Link>
              <Link to="/thinkabout">Think about</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
