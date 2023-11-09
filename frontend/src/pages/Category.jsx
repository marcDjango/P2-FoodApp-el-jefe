import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneCategory from "../components/OneCategory/OneCategory";

function Category() {
  const [categoryParams, setCategoryParams] = useState("");
  const [key, setKey] = useState(0);
  const { type } = useParams();

  useEffect(() => {
    setCategoryParams(type);
  }, [type]);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [categoryParams]);

  return (
    <div key={key}>
      <OneCategory
        category="french"
        mealType={categoryParams}
        carousel={false}
      />
    </div>
  );
}

export default Category;
