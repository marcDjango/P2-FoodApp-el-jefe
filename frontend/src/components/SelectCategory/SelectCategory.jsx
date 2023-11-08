import PropTypes from "prop-types";
import ApiDataManager from "../../services/api/ApiDataManager";
import Card from "../card/card";

export default function SelectCategory({ Category }) {
  const apiDataCategory = ApiDataManager({ cuisineType: Category });

  return (
    <>
      <h2>{Category}</h2>
      <div className="container">
        {apiDataCategory.recipesData &&
          apiDataCategory.recipesData.map((data) => (
            <Card key={data.recipe.label} data={data.recipe} />
          ))}
      </div>
    </>
  );
}
SelectCategory.propTypes = {
  Category: PropTypes.string.isRequired,
};
