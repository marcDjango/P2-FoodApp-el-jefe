import { useState, useEffect } from "react";

function ApiDataManager({ cuisineType = "french", mealType = "Dinner" }) {
  const apiId = import.meta.env.VITE_EDAMAN_API_ID;
  const apiKey = import.meta.env.VITE_EDAMAN_API_KEY;
  const apiUrlEdamam = import.meta.env.VITE_API_URL;

  const [recipesData, setRecipesData] = useState([]);

  const apiUrlOptions = `?q=&app_id=${apiId}&app_key=${apiKey}&type=public&ingr=10-18&cuisineType=${cuisineType}&mealType=${mealType}&time=5%2B`;
  const apiUrl = apiUrlEdamam + apiUrlOptions;

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
