import PropTypes from "prop-types";
import { useState } from "react";
import ApiDataManager from "../../services/api/ApiDataManager";

import "./CarouselCard.scss";

export default function CarouselSelect({ types }) {
  const apiDatatypes = ApiDataManager({ mealType: types });
  const [index, setIndex] = useState(0);

  const handleClickLess = () => {
    setIndex(index - 1);
  };
  const handleClickMore = () => {
    setIndex(index + 1);
  };

  return (
    <div className="blockCarousel">
      <button className="left" type="button" onClick={handleClickLess}>
        next
      </button>
      {apiDatatypes.recipesData.length && (
        <div className="picture">
          <img
            src={apiDatatypes.recipesData[index].recipe.image}
            alt="Magnifique nourriture"
          />
        </div>
      )}

      <button className="right" type="button" onClick={handleClickMore}>
        previous
      </button>
    </div>
  );
}
CarouselSelect.propTypes = {
  types: PropTypes.string.isRequired,
};
