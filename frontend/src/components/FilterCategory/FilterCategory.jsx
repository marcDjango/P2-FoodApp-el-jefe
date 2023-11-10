import { bkgFilter, iconFilter } from "../../services/importimages/images";
import "./FilterCategory.scss";

export default function FilterCategory() {
  return (
    <div className="filter-contain">
      <ul>
        <li>
          <img src={iconFilter[0]} alt="" />
        </li>
        <li>
          <img src={bkgFilter[1]} alt="" />
        </li>
        <li>
          <img src={bkgFilter[2]} alt="" />
        </li>
        <li>
          <img src={bkgFilter[3]} alt="" />
        </li>
        <li>
          <img src={bkgFilter[4]} alt="" />
        </li>
      </ul>
    </div>
  );
}
