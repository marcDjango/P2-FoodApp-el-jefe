import React from "react";
import SelectCategory from "../SelectCategory/SelectCategory";

export default function AllCards() {
  return (
    <>
      <SelectCategory category="french" mealType="Dinner" carousel />
      <SelectCategory category="italian" mealType="Dinner" carousel />
      <SelectCategory category="american" mealType="Dinner" carousel />
      <SelectCategory category="japanese" mealType="Dinner" carousel />
    </>
  );
}
