import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ArrowUpDown from "../../assets/arrow-up-down.svg";

function NutritionalProfil({ onClick, setIsClicked, setParamsValueNutri }) {
  // STATE (état, données)

  // donées
  const nutritionalProfil = [
    { nameBtn: "balanced", title: "Balanced", bool: false, className: "btn" },
    {
      nameBtn: "high-fiber",
      title: "High-fiber",
      bool: false,
      className: "btn",
    },
    {
      nameBtn: "high-protein",
      title: "High-protein",
      bool: false,
      className: "btn",
    },
    { nameBtn: "low-cab", title: "Low-cab", bool: false, className: "btn" },
    { nameBtn: "low-fat", title: "Low-fat", bool: false, className: "btn" },
  ];

  // state
  const [isArrayState, setIsArrayState] = useState(nutritionalProfil);
  const [isDeployed, setIsDeployed] = useState(false);

  useEffect(() => {
    setIsClicked(isArrayState);
  }, [setIsClicked, isArrayState]);

  // COMPORTEMENTS (dynamique)
  const updateContainerClass = () => {
    setIsArrayState((prevArrayState) =>
      prevArrayState.map((el) => ({
        ...el,
        className: el.bool ? "btnActive" : "btn",
      }))
    );
  };

  const calculateNewParamsValue = () => {
    let newValueNutri = "";
    isArrayState.forEach((el) => {
      if (el.bool) {
        newValueNutri += `${"&diet="}${el.nameBtn}`;
      }
    });
    setParamsValueNutri(newValueNutri);
    console.info(newValueNutri);
    return newValueNutri;
  };

  const clickBtn = (index) => {
    onClick(index);
    calculateNewParamsValue();
    updateContainerClass();
  };

  // --------------------------------------------------------------
  //                     AFFICHAGE (render)                        |
  // --------------------------------------------------------------

  return (
    <div className="filterbtn">
      <h2 className="title-desktop">Nutritional Profil</h2>
      <button
        type="button"
        className="title-mobile"
        onClick={() => {
          setIsDeployed(!isDeployed);
        }}
      >
        <h2>Nutritional Profil</h2>
        <img src={ArrowUpDown} alt="arrow-up-down" />
      </button>

      <div className={`cat-btns ${isDeployed && "cat-btns-active"}`}>
        {isArrayState.map((elArray, index) => (
          <button
            className={elArray.className}
            type="button"
            key={elArray.nameBtn}
            onClick={() => clickBtn(index, isArrayState)}
          >
            {elArray.title}
          </button>
        ))}
      </div>
    </div>
  );
}

NutritionalProfil.propTypes = {
  onClick: PropTypes.func.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  setParamsValueNutri: PropTypes.func.isRequired,
};

export default NutritionalProfil;
