import PropTypes from "prop-types";

// import style card
import "./card.scss";

function Card({ data }) {
  const RefactorTitle = (inputString) => {
    const result = inputString.replace("Recipe", "").replace("recipes", "");

    if (result.includes(":")) {
      const indexOfFirst = result.indexOf(":") + 2;
      return result.slice(indexOfFirst);
    }

    return result;
  };

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
