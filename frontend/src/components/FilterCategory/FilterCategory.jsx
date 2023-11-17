import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FilterStyle from "./FilterStyle";
import {
  iconFilter,
  bkgFilter,
  iconFilterActived,
} from "../../services/importimages/images";

import "./FilterCategory.scss";

export default function FilterCategory() {
  const [filterActive, setFilterActive] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const navigationStyle = FilterStyle();
  const mealType = ["Breakfast", "Brunch", "Dinner", "Snack", "Teatime"];
  const location = useLocation();

  useEffect(() => {
    // Vérifier si le chemin d'accès contient l'un des éléments de mealType
    const foundIndex = mealType.findIndex((meal) =>
      location.pathname.includes(meal)
    );

    // Mettre à jour l'état filterActive en conséquence
    if (foundIndex !== -1) {
      setFilterActive(foundIndex);
    } else {
      setFilterActive(-1);
    }
  }, [location.pathname, mealType]);

  const handleOnClick = (index) => {
    setFilterActive(index);
  };

  const handleOnFocus = (index) => {
    setFilterActive(index);
  };

  const handleOnHover = (index) => {
    setHoveredIndex(index);
  };

  const handleOnMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="filter-contain" style={navigationStyle}>
      <ul>
        {mealType.map((meal, index) => (
          <li
            key={meal}
            style={{
              backgroundImage: `url(${bkgFilter[index]})`,
              cursor: "pointer",
            }}
            onMouseEnter={() => handleOnHover(index)}
            onMouseLeave={handleOnMouseLeave}
          >
            <Link
              to={`/category/${meal}`}
              onClick={() => handleOnClick(index)}
              onFocus={() => handleOnFocus(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleOnClick(index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <img
                src={
                  filterActive === index || hoveredIndex === index
                    ? iconFilterActived[index]
                    : iconFilter[index]
                }
                alt={meal}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
