import PropTypes from "prop-types";
import ApiDataManager from "../../services/api/ApiDataManager";
import Card from "../card/card";
import { toUpperCaseFirstLetter } from "../utils";

export default function SelectCategory({ category, carousel = true }) {
  const apiDataCategory = ApiDataManager({ cuisineType: category });

  return (
    <>
      <h2>{toUpperCaseFirstLetter(category)} Foods</h2>
      <div className={carousel ? "container_carousel" : "container_body"}>
        {apiDataCategory.recipesData &&
          apiDataCategory.recipesData.map((data) => (
            <Card key={data.recipe.label} data={data.recipe} />
          ))}
      </div>
    </>
  );
}
SelectCategory.propTypes = {
  category: PropTypes.string.isRequired,
  carousel: PropTypes.bool.isRequired,
};
