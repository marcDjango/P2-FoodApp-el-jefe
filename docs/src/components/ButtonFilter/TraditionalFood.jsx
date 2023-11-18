import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ArrowUpDown from "../../assets/arrow-up-down.svg";

function TraditionalFood({ onClick, setIsClicked, setParamsValue }) {
  // STATE (état, données)

  // donées
  const traditionalFood = [
    { nameBtn: "american", title: "American", bool: false, className: "btn" },
    { nameBtn: "chinese", title: "Chinese", bool: false, className: "btn" },
    { nameBtn: "japanese", title: "Japanese", bool: false, className: "btn" },
    { nameBtn: "italian", title: "Italian", bool: false, className: "btn" },
    { nameBtn: "french", title: "French", bool: false, className: "btn" },
    { nameBtn: "indian", title: "Indian", bool: false, className: "btn" },
    { nameBtn: "british", title: "British", bool: false, className: "btn" },
  ];

  // state
  const [arrayState, setArrayState] = useState(traditionalFood);
  const [isDeployed, setIsDeployed] = useState(false);

  useEffect(() => {
    setIsClicked(arrayState);
  }, [setIsClicked, arrayState]);

  // COMPORTEMENTS (dynamique)
  const updateContainerClass = () => {
    setArrayState((prevArrayState) =>
      prevArrayState.map((el) => ({
        ...el,
        className: el.bool ? "btnActive" : "btn",
      }))
    );
  };

  const calculateNewParamsValue = () => {
    let newParamsValue = "";
    arrayState.forEach((el) => {
      if (el.bool) {
        newParamsValue += `${"&cuisineType="}${el.nameBtn}`;
      }
    });
    setParamsValue(newParamsValue);
    console.info(newParamsValue);
    return newParamsValue;
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
      <h2 className="title-desktop">Traditional Food</h2>
      <button
        type="button"
        className="title-mobile"
        onClick={() => {
          setIsDeployed(!isDeployed);
        }}
      >
        <h2>Traditional Food</h2>
        <img src={ArrowUpDown} alt="arrow-up-down" />
      </button>

      <div className={`cat-btns ${isDeployed && "cat-btns-active"}`}>
        {arrayState.map((elArray, index) => (
          <button
            className={elArray.className}
            type="button"
            key={elArray.nameBtn}
            onClick={() => clickBtn(index, arrayState)}
          >
            {elArray.title}
          </button>
        ))}
      </div>
    </div>
  );
}

TraditionalFood.propTypes = {
  onClick: PropTypes.func.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  setParamsValue: PropTypes.func.isRequired,
};
export default TraditionalFood;
