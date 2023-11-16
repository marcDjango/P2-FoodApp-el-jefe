import { useState } from "react";
import { useData } from "../../../services/Context";
import { toUpperCaseFirstLetter } from "../../utils";
import "./Ingredient.scss";

function Ingredients() {
  const { data } = useData();
  const [personIndex, setPersonIndex] = useState(data.yield);

  const handleClickLessPerson = () => {
    setPersonIndex(personIndex + 1);
  };

  const handleClickMorePerson = () => {
    setPersonIndex(personIndex - 1);
  };

  const ListIngredient = data.ingredients.map((ingredient) => (
    <div className="LiIngredient" key={ingredient.text}>
      <li>{toUpperCaseFirstLetter(ingredient.food)}</li>
      <div>
        <li>
          {(Math.round((ingredient.quantity / data.yield) * 100) *
            personIndex) /
            100}
        </li>
        <li>{ingredient.measure === "<unit>" ? "unit" : ingredient.measure}</li>
      </div>
    </div>
  ));

  return (
    <div className="IngredientsMain">
      <div className="IngredientsTitleBlock">
        <div className="IngredientsTitle">Ingredients</div>
        <div className="TimeMobile">{data.totalTime} min</div>
      </div>

      <ul>{ListIngredient}</ul>

      <div className="PersonneAdjust">
        <div className="TimeDesk">{data.totalTime} min</div>
        <div className="NumberPerson">
          {personIndex > 1 ? (
            <button
              className="Moins"
              type="button"
              onClick={handleClickMorePerson}
            >
              -
            </button>
          ) : (
            <p />
          )}
          {`${personIndex}
            Person`}

          {personIndex < 30 ? (
            <button
              className="Plus"
              type="button"
              onClick={handleClickLessPerson}
            >
              +
            </button>
          ) : (
            <p />
          )}
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
