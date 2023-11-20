import PropTypes from "prop-types";
import { useEffect } from "react";
// import Card from "../components/card/card";
import { useParams, Link } from "react-router-dom";
import { useData } from "../services/Context";
import "../components/SelectCategory/SelectCategory.css";

function Card({ image, label, totalTime, data }) {
  const { setData } = useData();
  const handleClickCard = () => {
    setData(data);
  };
  return (
    <div className="Contain">
      <div className="border-style">
        <div className="picture">
          <Link to="/RecipeDetail" onClick={handleClickCard}>
            <img src={image} alt={label} />
          </Link>
        </div>
        <div className="title">
          <h3>{label}</h3>
        </div>
        <div className="block-info">
          <div className="block-time">{totalTime} min</div>
          <div className="block-picture">
            {/* <img src={nutriscoreA} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterRecipeResults() {
  const { filter } = useParams();

  const { data, setData } = useData();

  useEffect(() => {
    function fetchFilter(params) {
      const apiId = import.meta.env.VITE_EDAMAN_API_ID;
      const apiKey = import.meta.env.VITE_EDAMAN_API_KEY;
      const apiUrlEdamam = import.meta.env.VITE_API_URL;
      const apiUrlFiltered = `?app_id=${apiId}&app_key=${apiKey}&type=public${params}`;
      const apiUrl = apiUrlEdamam + apiUrlFiltered;
      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((recipesData) => {
          setData(recipesData.hits);
        });
    }
    fetchFilter(filter);
  }, []);

  return (
    <div className="container_body">
      {data?.map((hit) => {
        return (
          <Card
            data={hit.recipe}
            key={hit.recipe.label}
            image={hit.recipe.image}
            label={hit.recipe.label}
            totalTime={hit.recipe.totalTime}
          />
        );
      })}
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  totalTime: PropTypes.number.isRequired,
  data: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    cautions: PropTypes.arrayOf(PropTypes.string).isRequired,
    co2EmissionsClass: PropTypes.string.isRequired,
    cuisineType: PropTypes.arrayOf(PropTypes.string).isRequired,
    dietLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    dishType: PropTypes.arrayOf(PropTypes.string).isRequired,
    healthLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    ingredientLines: PropTypes.arrayOf(PropTypes.string).isRequired,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
      })
    ).isRequired,
    label: PropTypes.string.isRequired,
    mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
    shareAs: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalWeight: PropTypes.number.isRequired,
    uri: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    yield: PropTypes.number.isRequired,
  }).isRequired,
};

export default FilterRecipeResults;
