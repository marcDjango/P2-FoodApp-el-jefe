import PropTypes from "prop-types";
import { RefactorTitle, CalculateNutriScore } from "../utils";
// import style card
import "./card.scss";

function Card({ data }) {
  return (
    <div className="Contain">
      <div className="border-style">
        <div className="picture">
          <img src={data.image} alt={data.label} />
        </div>
        <div className="title">
          <h3>{RefactorTitle(data.label)}</h3>
        </div>
        <div className="block-info">
          <div className="block-time">{data.totalTime} min</div>
          <div> {CalculateNutriScore(data.totalNutrients)}</div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalNutrients: PropTypes.number.isRequired,
  }).isRequired,
};
export default Card;
