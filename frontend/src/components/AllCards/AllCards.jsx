import React from "react";
import ApiDataManager from "../../services/api/ApiDataManager";
import Card from "../card/card";

export default function AllCards() {
  const apiDataFrench = ApiDataManager({});
  const apiDataItalian = ApiDataManager({ cuisineType: "italian" });
  const apiDataAmerican = ApiDataManager({ cuisineType: "american" });
  const apiDataJapan = ApiDataManager({ cuisineType: "japanese" });
  return (
    <>
      <h2>Italian</h2>
      <div className="container">
        {apiDataItalian.recipesData &&
          apiDataItalian.recipesData.map((data) => (
            <Card key={data.recipe.label} data={data.recipe} />
          ))}
      </div>
      <h2>French</h2>
      <div className="container">
        {apiDataFrench.recipesData &&
          apiDataFrench.recipesData.map((data) => (
            <Card key={data.recipe.label} data={data.recipe} />
          ))}
      </div>
      <h2>American</h2>
      <div className="container">
        {apiDataAmerican.recipesData &&
          apiDataAmerican.recipesData.map((data) => (
            <Card key={data.recipe.label} data={data.recipe} />
          ))}
      </div>
      <h2>Japan</h2>
      <div className="container">
        {apiDataJapan.recipesData &&
          apiDataJapan.recipesData.map((data) => (
            <Card key={data.recipe.label} data={data.recipe} />
          ))}
      </div>
    </>
  );
}
