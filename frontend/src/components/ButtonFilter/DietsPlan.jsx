import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ArrowUpDown from "../../assets/arrow-up-down.svg";

function DietsPlan({ onClick, setIsClicked, setParamsValueDiets }) {
  // STATE (état, données)

  // donées
  const dietsPlan = [
    {
      nameBtn: "vegetarian",
      title: "Vegetarian",
      bool: false,
      className: "btn",
    },
    {
      nameBtn: "alcohol-free",
      title: "Alcool free",
      bool: false,
      className: "btn",
    },
    {
      nameBtn: "pescatarian",
      title: "Pescatarian",
      bool: false,
      className: "btn",
    },
    { nameBtn: "koscher", title: "Koscher", bool: false, className: "btn" },
    { nameBtn: "vegan", title: "Vegan", bool: false, className: "btn" },
  ];

  // state
  const [isArrayState, setIsArrayState] = useState(dietsPlan);
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
    let newValueDiets = "";
    isArrayState.forEach((el) => {
      if (el.bool) {
        newValueDiets += `${"&health="}${el.nameBtn}`;
      }
    });
    setParamsValueDiets(newValueDiets);
    console.info(newValueDiets);
    return newValueDiets;
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
      <h2 className="title-desktop">Diets Plan</h2>
      <button
        type="button"
        className="title-mobile"
        onClick={() => {
          setIsDeployed(!isDeployed);
        }}
      >
        <h2>Diets Plan</h2>
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

DietsPlan.propTypes = {
  onClick: PropTypes.func.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  setParamsValueDiets: PropTypes.func.isRequired,
};

export default DietsPlan;
