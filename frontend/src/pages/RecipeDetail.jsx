import React from "react";
import { useData } from "../services/Context";

function Recipe() {
  const { data } = useData();

  return (
    <div>
      <div>{data.label}</div>
      <div>
        <a href={data.url} target="_blank" rel="noreferrer">
          Look the recipe !!
        </a>
      </div>
      <img src={data.image} alt={data.label} />
    </div>
  );
}
export default Recipe;
