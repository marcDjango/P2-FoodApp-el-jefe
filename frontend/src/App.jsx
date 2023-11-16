import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import planche from "./assets/images/Planchedecoup.jpg";
import Footer from "./components/footer/Footer";
// import { FilterProvider } from "./services/filterContext";

import "./App.css";

function App() {
  return (
    <>
      {/* <FilterProvider> */}
      <Navbar />
      <img src={planche} className="planche" alt="Planche à découper" />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* </FilterProvider> */}
    </>
  );
}

export default App;
