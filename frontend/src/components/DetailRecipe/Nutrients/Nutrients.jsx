import React from "react";
import Cal from "../../../assets/images/Cal.svg";
import Fat from "../../../assets/images/Fat.svg";
import Saturated from "../../../assets/images/Saturated.svg";
import Carbs from "../../../assets/images/Carbs.svg";
import Sugar from "../../../assets/images/Sugar.svg";
import Fiber from "../../../assets/images/Fiber.svg";
import Protein from "../../../assets/images/Protein.svg";
import { useData } from "../../../services/Context";
import "./Nutrients.scss";

function Nutrients() {
  const { data } = useData();

  return (
    <>
      <div className="NutrientsTitle">Nutritional value /pers</div>
      <div className="Nutrients">
        <div className="BLockNutri">
          <img src={Cal} alt="Cal" />
          <div className="DivInfo">
            <div>{data.totalNutrients.ENERC_KCAL.label} </div>
            <div className="NumberNutri">
              <div>
                {Math.round(
                  data.totalNutrients.ENERC_KCAL.quantity / data.yield
                )}
              </div>
              <div>{data.totalNutrients.ENERC_KCAL.unit}</div>
            </div>
          </div>
        </div>
        <div className="BLockNutri">
          <img className="FatImg" src={Fat} alt="Fat" />
          <div className="DivInfo">
            <div>{data.totalNutrients.FAT.label} </div>
            <div className="NumberNutri">
              <div>
                {Math.round(data.totalNutrients.FAT.quantity / data.yield)}
              </div>
              <div>{data.totalNutrients.FAT.unit}</div>
            </div>
          </div>
        </div>
        <div className="BLockNutri">
          <img src={Saturated} alt="Saturated" />
          <div className="DivInfo">
            <div>{data.totalNutrients.FASAT.label} </div>
            <div className="NumberNutri">
              <div>
                {Math.round(data.totalNutrients.FASAT.quantity / data.yield)}
              </div>
              <div>{data.totalNutrients.FASAT.unit}</div>
            </div>
          </div>
        </div>
        <div className="BLockNutri">
          <img src={Carbs} alt="Carbs" />
          <div className="DivInfo">
            <div>{data.totalNutrients.CHOCDF.label} </div>
            <div className="NumberNutri">
              <div>
                {Math.round(data.totalNutrients.CHOCDF.quantity / data.yield)}
              </div>
              <div>{data.totalNutrients.CHOCDF.unit}</div>
            </div>
          </div>
        </div>
        <div className="BLockNutri">
          <img src={Sugar} alt="Sugar" />
          <div className="DivInfo">
            <div>{data.totalNutrients.SUGAR.label} </div>
            <div className="NumberNutri">
              <div>
                {Math.round(data.totalNutrients.SUGAR.quantity / data.yield)}
              </div>
              <div>{data.totalNutrients.SUGAR.unit}</div>
            </div>
          </div>
        </div>
        <div className="BLockNutri">
          <img src={Fiber} alt="Fiber" />
          <div className="DivInfo">
            <div>{data.totalNutrients.FIBTG.label} </div>
            <div className="NumberNutri">
              <div>
                {Math.round(data.totalNutrients.FIBTG.quantity / data.yield)}
              </div>
              <div>{data.totalNutrients.FIBTG.unit}</div>
            </div>
          </div>
        </div>
        <div className="BLockNutri">
          <img src={Protein} alt="Protein" />
          <div className="DivInfo">
            <div>{data.totalNutrients.PROCNT.label} </div>
            <div className="NumberNutri">
              <div>
                {Math.round(data.totalNutrients.PROCNT.quantity / data.yield)}
              </div>
              <div>{data.totalNutrients.PROCNT.unit}</div>
            </div>
          </div>
        </div>
        <div className="BLockNutri">
          <img src={Cal} alt="Cal" />
          <div className="DivInfo">
            <div>{data.totalNutrients.CHOLE.label} </div>
            <div className="NumberNutri">
              <div>
                {Math.round(data.totalNutrients.CHOLE.quantity / data.yield)}
              </div>
              <div>{data.totalNutrients.CHOLE.unit}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nutrients;
