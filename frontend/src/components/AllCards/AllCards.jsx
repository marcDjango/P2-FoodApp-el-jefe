import React from "react";
import SelectCategory from "../SelectCategory/SelectCategory";

export default function AllCards() {
  return (
    <>
      <SelectCategory Category="french" />
      <SelectCategory Category="italian" />
      <SelectCategory Category="american" />
      <SelectCategory Category="japanese" />
    </>
  );
}
