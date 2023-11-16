import { Link } from "react-router-dom";
import { iconFilter, bkgFilter } from "../../services/importimages/images";
import FilterStyle from "./FilterStyle";

import "./FilterCategory.scss";

export default function FilterCategory() {
  const navigationStyle = FilterStyle();
  const mealType = ["Breakfast", "Brunch", "Dinner", "Snack", "Teatime"];
  const listMeal = mealType.map((meal, index) => (
    <li key={meal} style={{ backgroundImage: `url(${bkgFilter[index]})` }}>
      <Link to={`/category/${meal}`}>
        <img src={iconFilter[index]} alt={meal} />
      </Link>
    </li>
  ));
  return (
    <div className="filter-contain" style={navigationStyle}>
      <ul>{listMeal}</ul>
    </div>
  );
}
