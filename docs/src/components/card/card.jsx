import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RefactorTitle from "../utils";

import nutriscoreA from "../../assets/images/nutri-score-a.png";
import "./card.scss";
import { useData } from "../../services/Context";

function Card({ data }) {
  const { setData } = useData();
  const handleClickCard = () => {
    setData(data);
  };
  return (
    <div className="Contain">
      <div className="border-style">
        <div className="picture">
          <Link to="/RecipeDetail" onClick={handleClickCard}>
            <img src={data.image} alt={data.label} />
          </Link>
        </div>
        <div className="title">
          <h3>{RefactorTitle(data.label)}</h3>
        </div>
        <div className="block-info">
          <div className="block-time">{data.totalTime} min</div>
          <div className="block-picture">
            <img src={nutriscoreA} alt="" />
          </div>
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
