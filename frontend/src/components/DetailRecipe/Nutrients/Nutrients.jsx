import React from "react";
import { useData } from "../../../services/Context";
import "./Nutrients.scss";

function Nutrients() {
  const { data } = useData();

  return (
    <div className="Nutrients">
      <div className="BLockNutri">
        <div>{data.totalNutrients.ENERC_KCAL.label}</div>
        <div>{Math.round(data.totalNutrients.ENERC_KCAL.quantity)}</div>
        <div>{data.totalNutrients.ENERC_KCAL.unit}</div>
      </div>
      <div className="BLockNutri">
        <div>{data.totalNutrients.FAT.label}</div>
        <div>{Math.round(data.totalNutrients.FAT.quantity)}</div>
        <div>{data.totalNutrients.FAT.unit}</div>
      </div>
      <div className="BLockNutri">
        <div>{data.totalNutrients.FASAT.label}</div>
        <div>{Math.round(data.totalNutrients.FASAT.quantity)}</div>
        <div>{data.totalNutrients.FASAT.unit}</div>
      </div>
      <div className="BLockNutri">
        <div>{data.totalNutrients.CHOCDF.label}</div>
        <div>{Math.round(data.totalNutrients.CHOCDF.quantity)}</div>
        <div>{data.totalNutrients.CHOCDF.unit}</div>
      </div>
    </div>
  );
}

export default Nutrients;
