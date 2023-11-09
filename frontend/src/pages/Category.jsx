import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneCategory from "../components/OneCategory/OneCategory"; // Assurez-vous d'importer correctement votre composant

function Category() {
  const [categoryParams, setCategoryParams] = useState("");
  const [key, setKey] = useState(0); // Nouvelle variable d'état pour forcer la mise à jour
  const { type } = useParams();

  useEffect(() => {
    setCategoryParams(type);
  }, [type]);

  useEffect(() => {
    // Changez la clé à chaque fois que vous voulez forcer la mise à jour
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
