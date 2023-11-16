/* eslint-disable */

import { useEffect, useState } from "react";
import getRecipes from "../../services/api/EdamamApi";
import { Link } from "react-router-dom";
import "./FilterIcon.scss";
import TraditionalFood from "../ButtonFilter/TraditionalFood";
import Allergies from "../ButtonFilter/Allergies";
import DietsPlan from "../ButtonFilter/DietsPlan";
import NutritionalProfil from "../ButtonFilter/NutritionalProfil";
import MealType from "../ButtonFilter/MealType";
import SetUpTime from "../ButtonFilter/SetUpTime";
import CloseIcon from "../../assets/close-icon.svg";

function FilterIcon() {
  // STATE (état, données) ----------------------------------------------

  // states

  // state TraditionalFood
  const [isClicked, setIsClicked] = useState();
  const [paramsValue, setParamsValue] = useState();

  // state Allergies
  const [isClickedAllergies, setIsClickedAllergies] = useState();
  const [paramsValueAllergies, setParamsValueAllergies] = useState();

  // state DietsPlan
  const [isClickedDiets, setIsClickedDiets] = useState();
  const [paramsValueDiets, setParamsValueDiets] = useState();

  // state NutritionalProfil
  const [isClickedNutri, setIsClickedNutri] = useState();
  const [paramsValueNutri, setParamsValueNutri] = useState();

  // state MealType
  const [isClickedMeal, setIsClickedMeal] = useState();
  const [paramsValueMeal, setParamsValueMeal] = useState();

  // state MealType
  const [isClickedTime, setIsClickedTime] = useState();
  const [paramsValueTime, setParamsValueTime] = useState();

  // COMPORTEMENTS (dynamique) ----------------------------------------------

  const handleBtnClick = (i, array, setter) => {
    array[i].bool = !array[i].bool;
    setter([...array]);
  };

  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

  const clickSubmit = () => {
    getRecipes(
      paramsValue,
      paramsValueAllergies,
      paramsValueDiets,
      paramsValueNutri,
      paramsValueMeal,
      paramsValueTime
    )
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("error :", error);
      });
  };

  // --------------------------------------------------------------
  //                     AFFICHAGE (render)                        |
  // --------------------------------------------------------------

  return (
    <div className="main-filter-container">
      <div className="main-icon-container">
        <button className="close-btn">
          <img src={CloseIcon} alt="close-icon" />
        </button>
      </div>
      <div className="filterbtn-container">
        {/* -------------------- TRADITIONAL FOOD BUTTONS-------------------- */}

        <div>
          <TraditionalFood
            onClick={(indexTrad) => {
              handleBtnClick(indexTrad, isClicked, setIsClicked); // Pass the index and the array
            }}
            setIsClicked={setIsClicked}
            setParamsValue={setParamsValue}
          />
        </div>

        {/* -------------------- ALLERGIES BUTTONS-------------------- */}

        <div>
          <Allergies
            onClick={(indexAll) => {
              handleBtnClick(
                indexAll,
                isClickedAllergies,
                setIsClickedAllergies
              ); // Pass the index and the array
            }}
            setIsClicked={setIsClickedAllergies}
            setParamsValueAllergies={setParamsValueAllergies}
          />
        </div>

        {/* -------------------- DIETS PLAN BUTTONS-------------------- */}

        <div>
          <DietsPlan
            onClick={(indexAll) => {
              handleBtnClick(indexAll, isClickedDiets, setIsClickedDiets); // Pass the index and the array
            }}
            setIsClicked={setIsClickedDiets}
            setParamsValueDiets={setParamsValueDiets}
          />
        </div>

        {/* -------------------- NUTRITIONAL PROFIL BUTTONS-------------------- */}

        <div>
          <NutritionalProfil
            onClick={(indexAll) => {
              handleBtnClick(indexAll, isClickedNutri, setIsClickedNutri); // Pass the index and the array
            }}
            setIsClicked={setIsClickedNutri}
            setParamsValueNutri={setParamsValueNutri}
          />
        </div>

        {/* -------------------- MEAL TYPE BUTTONS-------------------- */}

        <div>
          <MealType
            onClick={(indexAll) => {
              handleBtnClick(indexAll, isClickedMeal, setIsClickedMeal); // Pass the index and the array
            }}
            setIsClicked={setIsClickedMeal}
            setParamsValueMeal={setParamsValueMeal}
          />
        </div>

        {/* -------------------- SET-UP TIME BUTTONS-------------------- */}

        <div>
          <SetUpTime
            onClick={(indexAll) => {
              handleBtnClick(indexAll, isClickedTime, setIsClickedTime); // Pass the index and the array
            }}
            setIsClicked={setIsClickedTime}
            setParamsValueTime={setParamsValueTime}
          />
        </div>

        {/* -------------------- SUBMIT -------------------- */}
      </div>
      <div className="submitBtn">
        <Link className="custom-link" to="/filterecipe">
          <button type="button" onClick={clickSubmit}>
            SUBMIT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FilterIcon;
