import { Outlet } from "react-router-dom";
import React from "react";
import { useLocationEffect } from "./components/utils";
import { CardProvider } from "./services/Context";
import Navbar from "./components/Navbar/Navbar";
import planche from "./assets/images/Planchedecoup.jpg";
import Footer from "./components/footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

function App() {
  const { currentPath, isHome } = useLocationEffect("", false);

  return (
    <CardProvider>
      <Navbar />
      <div key={currentPath} className="hero-position">
        {isHome ? <div className="margin" /> : ""}
        <img
          src={planche}
          className={`planche ${isHome ? "disablehero" : ""}`}
          alt="Planche à découper"
          id="hero-Desktop"
        />
        <SearchBar locationHome={isHome} />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </CardProvider>
  );
}

export default App;
