import PropTypes from "prop-types";
import SelectCategory from "../SelectCategory/SelectCategory";

export default function OneCategory({ category, carousel }) {
  return <SelectCategory category={category} carousel={carousel} />;
}
OneCategory.propTypes = {
  category: PropTypes.string.isRequired,
  carousel: PropTypes.bool.isRequired,
};
