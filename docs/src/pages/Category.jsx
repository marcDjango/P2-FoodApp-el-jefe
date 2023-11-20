import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneCategory from "../components/OneCategory/OneCategory";
import FilterCategory from "../components/FilterCategory/FilterCategory";

function Category() {
  const { type } = useParams();
  const [categoryParams, setCategoryParams] = useState(type);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setCategoryParams(type);
  }, [type]);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [categoryParams]);

  return (
    <>
      <FilterCategory />
      <div key={key}>
        <OneCategory
          query=""
          category="french"
          mealType={categoryParams}
          carousel={false}
        />
      </div>
    </>
  );
}

export default Category;
