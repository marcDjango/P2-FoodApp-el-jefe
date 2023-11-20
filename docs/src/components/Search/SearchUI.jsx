import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import ApiDataManager from "../../services/api/ApiDataManager";

function SearchUI({ query }) {
  const apiDataCategory = ApiDataManager({ query });
  return (
    <div key={query}>
      <h2 className="title_filter">{query} </h2>
      <div className="container_body">
        {apiDataCategory.recipesData.length === 0 ? (
          // Affiche un message d'erreur si une erreur s'est produite
          <p className="title_filter">
            {apiDataCategory.error}No results found for {query}
          </p>
        ) : (
          // Affiche les cartes si aucune erreur
          apiDataCategory.recipesData.map((data) => (
            <Card
              key={data.recipe.label + data.recipe.ingredients}
              data={data.recipe}
            />
          ))
        )}
      </div>
    </div>
  );
}
SearchUI.propTypes = {
  query: PropTypes.string.isRequired,
};
export default SearchUI;
