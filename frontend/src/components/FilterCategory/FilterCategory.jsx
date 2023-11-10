import { Link } from "react-router-dom";
import { iconFilter } from "../../services/importimages/images";

import "./FilterCategory.scss";

export default function FilterCategory() {
  return (
    <div className="filter-contain">
      <ul>
        <li>
          <Link to="/category/Breakfast">
            <img src={iconFilter[0]} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/category/Brunch">
            <img src={iconFilter[1]} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/category/Dinner">
            <img src={iconFilter[2]} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/category/Snack">
            <img src={iconFilter[3]} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/category/Teatime">
            <img src={iconFilter[4]} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
