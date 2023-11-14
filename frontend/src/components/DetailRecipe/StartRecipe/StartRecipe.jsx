import React from "react";
import { useData } from "../../../services/Context";
import "./StartRecipe.scss";

function StartRecipe() {
  const { data } = useData();

  return (
    <div className="StartRecipe">
      <a href={data.url} target="_blank" rel="noreferrer">
        Look the recipe !!
      </a>
    </div>
  );
}

export default StartRecipe;
