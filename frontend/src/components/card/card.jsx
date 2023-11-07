import PropTypes from "prop-types";
import RefactorTitle from "../utils";
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
          <div className="block-picture" />
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
    totalNutrients: PropTypes.shape({}).isRequired,
  }).isRequired,
};
export default Card;
