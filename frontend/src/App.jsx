import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import planche from "./assets/Planchedecoup.jpg";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <img src={planche} className="planche" alt="planche à decoupé" />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
