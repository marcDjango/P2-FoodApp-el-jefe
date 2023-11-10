import React from "react";
import SelectCategory from "../SelectCategory/SelectCategory";

export default function AllCards() {
  return (
    <>
      <SelectCategory category="french" mealType="Dinner" carousel={false} />
      <SelectCategory category="italian" mealType="Dinner" carousel={false} />
      <SelectCategory category="american" mealType="Dinner" carousel={false} />
      <SelectCategory category="japanese" mealType="Dinner" carousel={false} />
    </>
  );
}
