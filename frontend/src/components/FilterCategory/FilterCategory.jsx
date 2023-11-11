import { Link } from "react-router-dom";
import { iconFilter } from "../../services/importimages/images";

import "./FilterCategory.scss";

export default function FilterCategory() {
  const mealType = ["Breakfast", "Brunch", "Dinner", "Snack", "Teatime"];
  const listMeal = mealType.map((meal, index) => (
    <li key={meal}>
      <Link to={`/category/${meal}`}>
        <img src={iconFilter[index]} alt={meal} />
      </Link>
    </li>
  ));
  return (
    <div className="filter-contain">
      <ul>{listMeal}</ul>
    </div>
  );
}
