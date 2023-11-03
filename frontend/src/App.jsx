import React from "react";
import ApiDataManager from "./services/api/ApiDataManager";
import Card from "./components/card/card";

import "./App.css";

function App() {
  const apiManager = ApiDataManager();
  return (
    // **************Component Card**************
    <div className="container">
      {apiManager.recipesData.map((data) => (
        <Card key={data.recipe.label} data={data.recipe} />
      ))}
    </div>
  );
}

export default App;
