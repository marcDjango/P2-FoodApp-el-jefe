import React from "react";
import { useData } from "../../../services/Context";
import "./Environment.scss";
import Petitplante from "../../../assets/images/Petitplante.png";

function Environment() {
  const { data } = useData();

  return (
    <div className="Environment">
      <div className="EnvironmentTitle">Impacte on the earth</div>
      <div className="EnvironmentImage">
        <div className="EnvironmentTexte">
          Note of the CO2 reject : {data.co2EmissionsClass}
        </div>
        <img src={Petitplante} alt="Yong green plant" />
      </div>
    </div>
  );
}

export default Environment;
