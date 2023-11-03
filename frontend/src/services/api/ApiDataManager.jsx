import { useState, useEffect } from "react";
import { apiId, apiKey } from "./config.json";

function ApiDataManager() {
  const [recipesData, setRecipesData] = useState([]);
  const apiUrl = `https://api.edamam.com/api/recipes/v2?q=&app_id=${apiId}&app_key=${apiKey}&type=public&ingr=10-18&cuisineType=french&mealType=Dinner&time=5%2B`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setRecipesData(jsonData.hits);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return {
    recipesData,
  };
}

export default ApiDataManager;
