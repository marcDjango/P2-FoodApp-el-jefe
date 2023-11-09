import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import planche from "./assets/images/Planchedecoup.jpg";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <img src={planche} className="planche" alt="Planche à découper" />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
