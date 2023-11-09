import "./Style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import burger from "../../assets/images/Burger_menu.svg";
import croixBurger from "../../assets/images/croix_burger.svg";
import logo from "../../assets/images/logo.svg";

function Navbar() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const toglleBurger = () => {
    setBurgerOpen(!isBurgerOpen);
  };
  const [isCategoryOpen, setCategoryOpen] = useState(true);

  const toglleCategory = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  return (
    <nav className="NavbarM">
      <Link to="/">
        <img src={logo} className="Logo" alt="Logo" />
      </Link>
      <div className="MenuBurgall">
        {isBurgerOpen ? (
          <>
            <button type="button" onClick={toglleBurger}>
              <img
                src={croixBurger}
                className={`MenuBurgerF ${isBurgerOpen && "open"}`}
                alt="Burger menu"
              />
            </button>

            <div>
              {isCategoryOpen ? (
                <div className="Listcat">
                  <button
                    className="CatButton"
                    type="button"
                    onClick={toglleCategory}
                  >
                    Category
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
                    onClick={toglleCategory}
                  >
                    Category
                  </button>
                  <ul className="NavCat">
                    <li>
                      <Link to="/category">Breakfast</Link>
                    </li>
                    <li>
                      <Link to="/category">Brunch</Link>
                    </li>
                    <li>
                      <Link to="/category">Dinner</Link>
                    </li>
                    <li>
                      <Link to="/category">Snack</Link>
                    </li>
                    <li>
                      <Link to="/category">Teatime</Link>
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
          <button type="button" onClick={toglleBurger}>
            <img src={burger} className="MenuBurgero" alt="Burger menu" />
          </button>
        )}
      </div>
      <div className="NavbarO">
        <div>
          {isCategoryOpen ? (
            <div className="Catedest">
              <button
                className="CatButton"
                type="button"
                onClick={toglleCategory}
              >
                Category
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
                  onClick={toglleCategory}
                >
                  Category
                </button>
                <ul className="NavCat">
                  <li>
                    <Link to="/category">Breakfast</Link>
                  </li>
                  <li>
                    <Link to="/category">Brunch</Link>
                  </li>
                  <li>
                    <Link to="/category">Dinner</Link>
                  </li>
                  <li>
                    <Link to="/category">Snack</Link>
                  </li>
                  <li>
                    <Link to="/category">Teatime</Link>
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
