import "../Style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function DesktopNav() {
  const [isCategoryOpen, setCategoryOpen] = useState(true);

  const toggleCategory = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="NavbarO">
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
                onClick={toggleCategory}
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
  );
}
export default DesktopNav;
