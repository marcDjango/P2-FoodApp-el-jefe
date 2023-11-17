import PropTypes from "prop-types";
import SelectCategory from "../SelectCategory/SelectCategory";

export default function OneCategory({ query, category, mealType, carousel }) {
  return (
    <SelectCategory
      query={query}
      category={category}
      mealType={mealType}
      carousel={carousel}
    />
  );
}
OneCategory.propTypes = {
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  mealType: PropTypes.string.isRequired,
  carousel: PropTypes.bool.isRequired,
};
