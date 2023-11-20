import PropTypes from "prop-types";
import ApiDataManager from "../../services/api/ApiDataManager";
import Card from "../card/card";
import { toUpperCaseFirstLetter } from "../utils";
import "./SelectCategory.css";

export default function SelectCategory({
  query,
  category,
  mealType,
  carousel = true,
}) {
  const apiDataCategory = ApiDataManager({
    query,
    cuisineType: category,
    mealType,
  });

  return (
    <>
      <div>
        <h2 className="title_filter">
          {carousel
            ? `${toUpperCaseFirstLetter(category)} Food`
            : toUpperCaseFirstLetter(mealType)}
        </h2>
      </div>

      <div className={carousel ? "container_carousel" : "container_body"}>
        {apiDataCategory.recipesData &&
          apiDataCategory.recipesData.map((data) => (
            <Card key={data.recipe.label + data.recipe.ingredients} data={data.recipe} />
          ))}
      </div>
    </>
  );
}
SelectCategory.propTypes = {
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  mealType: PropTypes.string.isRequired,
  carousel: PropTypes.bool.isRequired,
};
