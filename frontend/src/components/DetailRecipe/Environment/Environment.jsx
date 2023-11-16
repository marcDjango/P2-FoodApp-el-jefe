import React from "react";
import { useData } from "../../../services/Context";
import "./Environment.scss";
import Petitplante from "../../../assets/images/Petitplante.png";

function Environment() {
  const { data } = useData();

  return (
    <div className="Environment">
      <div className="EnvironmentImage">
        <div className="EnvironmentTexte">CO² : {data.co2EmissionsClass}</div>

        <img src={Petitplante} alt="Young green plant" />
      </div>
    </div>
  );
}

export default Environment;
