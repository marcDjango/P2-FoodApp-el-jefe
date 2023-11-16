import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import planche from "./assets/images/Planchedecoup.jpg";
import Footer from "./components/footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

function App() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");
  const [ishome, setIsHome] = useState();

  useEffect(() => {
    setCurrentPath(location.pathname);
    if (
      location.pathname === "/AboutUs" ||
      location.pathname === "/nutriscore" ||
      location.pathname === "/tomorrow" ||
      location.pathname.startsWith("/category/")
    ) {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div key={currentPath} className="hero-position">
        {ishome ? <div className="margin" /> : ""}
        <img
          src={planche}
          className={`planche ${ishome ? "disablehero" : ""}`}
          alt="Planche à découper"
          id="hero-Desktop"
        />
        <SearchBar locationHome={ishome} />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
