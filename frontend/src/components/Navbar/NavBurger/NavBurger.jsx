import "../Style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import burger from "../../../assets/images/Burger_menu.svg";
import croixBurger from "../../../assets/images/croix_burger.svg";

function MenuBurger() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!isBurgerOpen);
  };
  const [isCategoryOpen, setCategoryOpen] = useState(true);

  const toggleCategory = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="MenuBurgall">
      {isBurgerOpen ? (
        <>
          <button type="button" onClick={toggleBurger}>
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
                  onClick={toggleCategory}
                >
                  Category
                </button>
                <Link to="/AboutUs" onClick={toggleBurger}>
                  About Us
                </Link>
                <Link to="/nutriscore" onClick={toggleBurger}>
                  Nutri-score
                </Link>
                <Link to="/tomorrow" onClick={toggleBurger}>
                  Think about
                </Link>
              </div>
            ) : (
              <div className="Listcat">
                <button
                  className="CatButton"
                  type="button"
                  onClick={toggleCategory}
                >
                  Category
                </button>
                <ul className="NavCat">
                  <li>
                    <Link to="/category/Breakfast" onClick={toggleBurger}>
                      Breakfast
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/Brunch" onClick={toggleBurger}>
                      Brunch
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/Dinner" onClick={toggleBurger}>
                      Dinner
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/Snack" onClick={toggleBurger}>
                      Snack
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/Teatime" onClick={toggleBurger}>
                      Teatime
                    </Link>
                  </li>
                </ul>
                <Link to="/AboutUs" onClick={toggleBurger}>
                  About Us
                </Link>
                <Link to="/nutriscore" onClick={toggleBurger}>
                  Nutri-score
                </Link>
                <Link to="/tomorrow" onClick={toggleBurger}>
                  Think about
                </Link>
              </div>
            )}
          </div>
        </>
      ) : (
        <button type="button" onClick={toggleBurger}>
          <img src={burger} className="MenuBurgero" alt="Burger menu" />
        </button>
      )}
    </div>
  );
}
export default MenuBurger;
