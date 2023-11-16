import React from "react";
import Cal from "../../../assets/images/Cal.svg";
import Fat from "../../../assets/images/Fat.svg";
import Saturated from "../../../assets/images/Saturated.svg";
import Carbs from "../../../assets/images/Carbs.svg";
import Sugar from "../../../assets/images/Sugar.svg";
import Fiber from "../../../assets/images/Fiber.svg";
import Protein from "../../../assets/images/Protein.svg";
import { useData } from "../../../services/Context";
import AllNutrients from "./AllNutrients";
import "./Nutrients.scss";

function Nutrients() {
  const { data } = useData();

  return (
    <div className="Nutrients">
      <AllNutrients
        NameFood={data.totalNutrients.ENERC_KCAL}
        NameImg={Cal}
        NameClassImg="CalImg"
      />
      <AllNutrients
        NameFood={data.totalNutrients.FAT}
        NameImg={Fat}
        NameClassImg="FatImg"
      />
      <AllNutrients
        NameFood={data.totalNutrients.FASAT}
        NameImg={Saturated}
        NameClassImg="SaturatedImg"
      />
      <AllNutrients
        NameFood={data.totalNutrients.CHOCDF}
        NameImg={Carbs}
        NameClassImg="CarbsImg"
      />
      <AllNutrients
        NameFood={data.totalNutrients.SUGAR}
        NameImg={Sugar}
        NameClassImg="SugarImg"
      />
      <AllNutrients
        NameFood={data.totalNutrients.FIBTG}
        NameImg={Fiber}
        NameClassImg="FiberImg"
      />
      <AllNutrients
        NameFood={data.totalNutrients.PROCNT}
        NameImg={Protein}
        NameClassImg="ProteinImg"
      />
      <AllNutrients
        NameFood={data.totalNutrients.CHOLE}
        NameImg={Cal}
        NameClassImg="CholesteroleImg"
      />
    </div>
  );
}

export default Nutrients;
