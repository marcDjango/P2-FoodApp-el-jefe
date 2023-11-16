import React from "react";
import { useData } from "../../../services/Context";
import "./StartRecipe.scss";

function StartRecipe() {
  const { data } = useData();

  return (
    <div className="main-btn-recipe">
      <button type="button" className="StartRecipe">
        <a href={data.url} target="_blank" rel="noreferrer">
          SEE RECIPE
        </a>
      </button>
    </div>
  );
}

export default StartRecipe;
