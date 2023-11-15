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
      <div className="CardDetailLeft">
        <ImgPack />
        <div className="TexteMainMobile">
          <Ingredients />
        </div>
        <div className="DetailFootMobile">
          <Nutrients />
          <StartRecipe />
          <Environment />
        </div>
        <div className="CardDesktopDetail">
          <Environment />
          <StartRecipe />
        </div>
      </div>
      <div className="CardDetailRight">
        <Nutrients />
      </div>
    </div>
  );
}
export default Recipe;
