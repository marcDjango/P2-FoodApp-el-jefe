import PropTypes from "prop-types";
import ApiDataManager from "../../services/api/ApiDataManager";
import Card from "../card/card";
import { toUpperCaseFirstLetter } from "../utils";
import "./SelectCategory.css";

export default function SelectCategory({
  category,
  mealType,
  carousel = true,
}) {
  const apiDataCategory = ApiDataManager({ cuisineType: category, mealType });

  return (
    <>
      <h2>
        {mealType
          ? toUpperCaseFirstLetter(mealType)
          : `${toUpperCaseFirstLetter(category)} Food`}
      </h2>
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
  mealType: PropTypes.string.isRequired,
  carousel: PropTypes.bool.isRequired,
};
