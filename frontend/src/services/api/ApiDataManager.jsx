import { useState, useEffect } from "react";

function ApiDataManager(apiOptions) {
  const apiId = import.meta.env.VITE_EDAMAN_API_ID;
  const apiKey = import.meta.env.VITE_EDAMAN_API_KEY;

  const [recipesData, setRecipesData] = useState([]);
  const { cuisineType = "french", mealType = "Dinner" } = apiOptions;

  const apiUrlEndpoint = `https://api.edamam.com/api/recipes/v2?q=&app_id=${apiId}&app_key=${apiKey}&type=public`;
  const apiUrlOptions = `&ingr=10-18&cuisineType=${cuisineType}&mealType=${mealType}&time=5%2B`;
  const apiUrl = apiUrlEndpoint + apiUrlOptions;

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
