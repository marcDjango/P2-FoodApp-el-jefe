async function getRecipes(cuisineType, health, diets, nutri, meal, time) {
  try {
    let apiUrl = `${import.meta.env.VITE_API_URL}?type=public&app_id=${
      import.meta.env.VITE_EDAMAN_API_ID
    }&app_key=${import.meta.env.VITE_EDAMAN_API_KEY}`;

    // Ajouter le paramètre cuisineType si défini
    if (cuisineType) {
      apiUrl += cuisineType;
    }

    // // Ajouter le paramètre health si défini et non null
    if (health !== null && health !== undefined) {
      apiUrl += health;
    }

    // // Ajouter le paramètre health si défini et non null
    if (diets !== null && diets !== undefined) {
      apiUrl += diets;
    }

    // // Ajouter le paramètre health si défini et non null
    if (nutri !== null && nutri !== undefined) {
      apiUrl += nutri;
    }

    // // Ajouter le paramètre health si défini et non null
    if (meal !== null && meal !== undefined) {
      apiUrl += meal;
    }

    // // Ajouter le paramètre health si défini et non null
    if (time !== null && time !== undefined) {
      apiUrl += time;
    }

    console.info(apiUrl);

    const response = await fetch(apiUrl);

    const convertToJson = await response.json();

    return convertToJson;
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération de données :",
      error.message
    );
    return null;
  }
}

export default getRecipes;
