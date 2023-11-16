import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ArrowUpDown from "../../assets/arrow-up-down.svg";

function Allergies({ onClick, setIsClicked, setParamsValueAllergies }) {
  // STATE (état, données)

  // donées
  const allergies = [
    { nameBtn: "egg-free", title: "Eggs free", bool: false, className: "btn" },
    {
      nameBtn: "gluten-free",
      title: "Glutten free",
      bool: false,
      className: "btn",
    },
    {
      nameBtn: "crustacean-free",
      title: "Crustcean free",
      bool: false,
      className: "btn",
    },
    {
      nameBtn: "dairy-free",
      title: "No lactose",
      bool: false,
      className: "btn",
    },
    {
      nameBtn: "tree-nut-free",
      title: "Tree-Nut free",
      bool: false,
      className: "btn",
    },
    { nameBtn: "soy-free", title: "Soy free", bool: false, className: "btn" },
  ];

  // hook
  const [isArrayState, setIsArrayState] = useState(allergies);
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
    let allergParamsValue = "";
    isArrayState.forEach((el) => {
      if (el.bool) {
        allergParamsValue += `${"&health="}${el.nameBtn}`;
      }
    });
    setParamsValueAllergies(allergParamsValue);
    console.info(allergParamsValue);
    return allergParamsValue;
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
      <h2 className="title-desktop">Allergies</h2>
      <button
        type="button"
        className="title-mobile"
        onClick={() => {
          setIsDeployed(!isDeployed);
        }}
      >
        <h2>Allergies</h2>
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

Allergies.propTypes = {
  onClick: PropTypes.func.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  setParamsValueAllergies: PropTypes.func.isRequired,
};

export default Allergies;
