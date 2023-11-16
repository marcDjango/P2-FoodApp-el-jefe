import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ArrowUpDown from "../../assets/arrow-up-down.svg";

function MealType({ onClick, setIsClicked, setParamsValueMeal }) {
  // STATE (état, données)

  // donées
  const mealType = [
    { nameBtn: "breakfast", title: "Breakfast", bool: false, className: "btn" },
    { nameBtn: "brunch", title: "Brunch", bool: false, className: "btn" },
    { nameBtn: "lunch/dinner", title: "Dinner", bool: false, className: "btn" },
    { nameBtn: "snack", title: "Snack", bool: false, className: "btn" },
    { nameBtn: "teatime", title: "Teatime", bool: false, className: "btn" },
  ];

  // state
  const [isArrayState, setIsArrayState] = useState(mealType);
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
    let newValueMeal = "";
    isArrayState.forEach((el) => {
      if (el.bool) {
        newValueMeal += `${"mealType="}${el.nameBtn}`;
      }
    });
    setParamsValueMeal(newValueMeal);
    console.info(newValueMeal);
    return newValueMeal;
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
      <h2 className="title-desktop">Meal Type</h2>
      <button
        type="button"
        className="title-mobile"
        onClick={() => {
          setIsDeployed(!isDeployed);
        }}
      >
        <h2>Meal Type</h2>
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

MealType.propTypes = {
  onClick: PropTypes.func.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  setParamsValueMeal: PropTypes.func.isRequired,
};

export default MealType;
