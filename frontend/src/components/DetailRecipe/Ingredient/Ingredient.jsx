import React from "react";
import { useData } from "../../../services/Context";
import "./Ingredient.scss";

function Ingredients() {
  const { data } = useData();

  const ListIngredient = data.ingredients.map((ingredient) => (
    <li className="LiIngredient">
      <li>- {ingredient.food}</li>
      <div>
        <li>{Math.round((ingredient.quantity / data.yield) * 100) / 100}</li>
        <li>{ingredient.measure === "<unit>" ? "unit" : ingredient.measure}</li>
      </div>
    </li>
  ));

  return (
    <div className="IngredientsMain">
      <div className="IngredientsTitle">Ingredients</div>
      <ul>{ListIngredient}</ul>

      <div className="PersonneAdjust">
        <div>{data.totalTime} min</div>
        <div> - 1 Personne + </div>
      </div>
    </div>
  );
}

export default Ingredients;
