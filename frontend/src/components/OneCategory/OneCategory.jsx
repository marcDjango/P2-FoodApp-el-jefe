import PropTypes from "prop-types";
import SelectCategory from "../SelectCategory/SelectCategory";

export default function OneCategory({ category, mealType, carousel }) {
  return (
    <SelectCategory
      category={category}
      mealType={mealType}
      carousel={carousel}
    />
  );
}
OneCategory.propTypes = {
  category: PropTypes.string.isRequired,
  mealType: PropTypes.string.isRequired,
  carousel: PropTypes.bool.isRequired,
};
