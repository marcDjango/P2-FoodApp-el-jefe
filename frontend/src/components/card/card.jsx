import PropTypes from "prop-types";

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
          <h3>{data.label}</h3>
        </div>
        <div className="block-info">
          <div>{data.totalTime} min</div>
          <div />
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
    // Vous pouvez ajouter d'autres PropTypes au besoin
  }).isRequired,
};
export default Card;
