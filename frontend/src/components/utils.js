export const RefactorTitle = (inputString) => {
  const result = inputString.replace("Recipe", "").replace("recipes", "");

  if (result.includes(":")) {
    const indexOfFirst = result.indexOf(":") + 2;
    return result.slice(indexOfFirst);
  }

  return result;
};

export function CalculateNutriScore(recipe) {
  const energy = recipe.ENERC_KCAL.quantity; // Énergie en kcal
  const saturatedFat = recipe.FASAT.quantity; // Graisses saturées en g
  const sugars = recipe.SUGAR.quantity; // Sucres en g
  const proteins = recipe.PROCNT.quantity; // Protéines en g
  const fibers = recipe.FIBTG.quantity; // Fibres en g

  // Calculez le score en fonction de ces valeurs (exemple factice)
  const score =
    energy / 100 + (saturatedFat + sugars) * 10 - proteins * 2 - fibers * 5;
  let nutriCategory;
  // Déterminez la catégorie du Nutri-Score en fonction du score
  if (score <= -15) {
    nutriCategory = "A";
  } else if (score <= -10) {
    nutriCategory = "B";
  } else if (score <= -5) {
    nutriCategory = "C";
  } else if (score <= 0) {
    nutriCategory = "D";
  } else {
    nutriCategory = "E";
  }

  return nutriCategory;
}
