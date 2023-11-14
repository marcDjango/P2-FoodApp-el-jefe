import React from "react";
import "./RecipeDetail.scss";
import Ingredients from "../components/DetailRecipe/Ingredient/Ingredient";
import ImgPack from "../components/DetailRecipe/ImgPack/ImgPack";
import Environment from "../components/DetailRecipe/Environment/Environment";
import Nutrients from "../components/DetailRecipe/Nutrients/Nutrients";
import StartRecipe from "../components/DetailRecipe/StartRecipe/StartRecipe";

function Recipe() {
  return (
    <div className="allDetail">
      <ImgPack />
      <div className="TexteMain">
        <Ingredients />
        <Environment />
      </div>
      <div className="DetailFoot">
        <StartRecipe />
        <Nutrients />
      </div>
    </div>
  );
}
export default Recipe;
