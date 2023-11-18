import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ArrowUpDown from "../../assets/arrow-up-down.svg";

function SetUpTime({ onClick, setIsClicked, setParamsValueTime }) {
  // STATE (état, données)

  // donées
  const setUpTime = [
    {
      nameBtn: "5-15",
      title: "From 0 to 15min",
      bool: false,
      className: "btn",
    },
    {
      nameBtn: "16-30",
      title: "From 15 to 30min",
      bool: false,
      className: "btn",
    },
    {
      nameBtn: "31-45",
      title: "From 30 to 45min",
      bool: false,
      className: "btn",
    },
    {
      nameBtn: "46-60",
      title: "From 45 to 60min",
      bool: false,
      className: "btn",
    },
    {
      nameBtn: "61%2B",
      title: "Greater than 2h",
      bool: false,
      className: "btn",
    },
  ];

  // state
  const [isArrayState, setIsArrayState] = useState(setUpTime);
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
    let newValueTime = "";
    isArrayState.forEach((el) => {
      if (el.bool) {
        newValueTime += `${"&time="}${el.nameBtn}`;
      }
    });
    setParamsValueTime(newValueTime);
    console.info(newValueTime);
    return newValueTime;
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
      <h2 className="title-desktop">Set-Up Time</h2>
      <button
        type="button"
        className="title-mobile"
        onClick={() => {
          setIsDeployed(!isDeployed);
        }}
      >
        <h2>Set-Up Time</h2>
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

SetUpTime.propTypes = {
  onClick: PropTypes.func.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  setParamsValueTime: PropTypes.func.isRequired,
};

export default SetUpTime;
