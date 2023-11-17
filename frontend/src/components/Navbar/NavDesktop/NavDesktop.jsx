import "../Style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function DesktopNav() {
  const [isCategoryOpen, setCategoryOpen] = useState(true);

  const toggleCategory = () => {
    setCategoryOpen(!isCategoryOpen);
  };
  return (
    <div className="NavbarO" id="navBar-Desktop">
      <div>
        {isCategoryOpen ? (
          <div className="Catedest">
            <button
              className="CatButton"
              type="button"
              onClick={toggleCategory}
            >
              Category
            </button>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/nutriscore">Nutri-score</Link>
            <Link to="/tomorrow">Think about</Link>
          </div>
        ) : (
          <div className="Catedest">
            <div className="Catesolo">
              <button
                className="CatButton"
                type="button"
                onClick={toggleCategory}
              >
                Category
              </button>
              <ul className="NavCat">
                <li>
                  <Link to="/category/Breakfast" onClick={toggleCategory}>
                    Breakfast
                  </Link>
                </li>
                <li>
                  <Link to="/category/Brunch" onClick={toggleCategory}>
                    Brunch
                  </Link>
                </li>
                <li>
                  <Link to="/category/Dinner" onClick={toggleCategory}>
                    Dinner
                  </Link>
                </li>
                <li>
                  <Link to="/category/Snack" onClick={toggleCategory}>
                    Snack
                  </Link>
                </li>
                <li>
                  <Link to="/category/Teatime" onClick={toggleCategory}>
                    Teatime
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/nutriscore">Nutri-score</Link>
            <Link to="/tomorrow">Think about</Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default DesktopNav;
