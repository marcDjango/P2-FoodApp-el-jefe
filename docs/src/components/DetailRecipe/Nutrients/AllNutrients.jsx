import PropTypes from "prop-types";
import { useData } from "../../../services/Context";

import "./Nutrients.scss";

function AllNutrients({ NameFood, NameImg, NameClassImg }) {
  const { data } = useData();
  return (
    <div className="BLockNutri" id="BLockNutri">
      <img className={NameClassImg} src={NameImg} alt={NameImg} />
      <div className="DivInfo">
        <div>{NameFood.label} </div>
        <div className="NumberNutri">
          <div>{Math.round(NameFood.quantity / data.yield)}</div>
          <div>{NameFood.unit}</div>
        </div>
      </div>
    </div>
  );
}
AllNutrients.propTypes = {
  NameFood: PropTypes.shape({
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
  NameImg: PropTypes.string.isRequired,
  NameClassImg: PropTypes.string.isRequired,
};

export default AllNutrients;
