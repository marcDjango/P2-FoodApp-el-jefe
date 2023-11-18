import { useState, useEffect } from "react";

function ApiDataManager(options) {
  const { query = "", cuisineType, mealType } = options;
  const apiId = import.meta.env.VITE_EDAMAN_API_ID;
  const apiKey = import.meta.env.VITE_EDAMAN_API_KEY;
  const apiUrlEdamam = import.meta.env.VITE_API_URL;

  const [recipesData, setRecipesData] = useState([]);
  const apiUrlSearch = `?q=${query}&app_id=${apiId}&app_key=${apiKey}&type=public&ingr=10-18&time=12-65`;
  const apiUrlOptions = `?app_id=${apiId}&app_key=${apiKey}&type=public&ingr=10-18&cuisineType=${cuisineType}&mealType=${mealType}&health=alcohol-free&time=15-59`;
  const apiUrlEnd = query ? apiUrlSearch : apiUrlOptions;
  const apiUrl = apiUrlEdamam + apiUrlEnd;
  let fetchDataCalled = false;
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

    if (!fetchDataCalled) {
      fetchData();
      fetchDataCalled = true;
    }
  }, []);

  return {
    recipesData,
  };
}

export default ApiDataManager;
