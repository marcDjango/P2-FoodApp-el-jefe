import React from "react";
import { useData } from "../../../services/Context";
import { toUpperCaseFirstLetter } from "../../utils";
import "./Ingredient.scss";

function Ingredients() {
  const { data } = useData();

  const ListIngredient = data.ingredients.map((ingredient) => (
    <div className="LiIngredient" key={ingredient.text}>
      <li>{toUpperCaseFirstLetter(ingredient.food)}</li>
      <div>
        <li>{Math.round(ingredient.quantity * 100) / 100}</li>
        <li>{ingredient.measure === "<unit>" ? "unit" : ingredient.measure}</li>
      </div>
    </div>
  ));

  return (
    <div className="IngredientsMain">
      <div className="IngredientsTitleBlock">
        <div className="IngredientsTitle">Ingredients</div>
        <div className="TimeMobile">{data.totalTime} min</div>
      </div>

      <ul>{ListIngredient}</ul>

      <div className="PersonneAdjust">
        <div className="TimeDesk">{data.totalTime} min</div>
        <div> - {data.yield} Person + </div>
      </div>
    </div>
  );
}

export default Ingredients;
