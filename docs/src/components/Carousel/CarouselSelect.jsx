import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useData } from "../../services/Context";
import ApiDataManager from "../../services/api/ApiDataManager";
import knifeLeft from "../../assets/images/knifeLeft.svg";
import knifeRight from "../../assets/images/knifeRight.svg";

import "./CarouselCard.scss";

export default function CarouselSelect({ cuisineType = "french", mealType }) {
  const apiDatatypes = ApiDataManager({ cuisineType, mealType });
  const [index, setIndex] = useState(0);

  const handleClickLess = () => {
    if (apiDatatypes.recipesData.length && index === 0) {
      setIndex(apiDatatypes.recipesData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleClickMore = () => {
    if (
      apiDatatypes.recipesData.length &&
      index === apiDatatypes.recipesData.length - 1
    ) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const { setData } = useData();
  const handleClickCard = () => {
    setData(apiDatatypes.recipesData[index].recipe);
  };

  return (
    <div className="blockCarousel">
      <button className="left" type="button" onClick={handleClickLess}>
        <img src={knifeLeft} className="btnLeft" alt="Litle bouton" />
      </button>
      {apiDatatypes.recipesData.length && (
        <div className="picture">
          <Link to="/RecipeDetail" onClick={handleClickCard}>
            <img
              src={apiDatatypes.recipesData[index].recipe.image}
              alt="good food"
            />
          </Link>
        </div>
      )}

      <button className="right" type="button" onClick={handleClickMore}>
        <img src={knifeRight} className="btnRight" alt="Litle bouton" />
      </button>
    </div>
  );
}
CarouselSelect.propTypes = {
  mealType: PropTypes.string.isRequired,
  cuisineType: PropTypes.string.isRequired,
};
