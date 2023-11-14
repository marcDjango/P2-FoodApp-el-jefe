import { Outlet } from "react-router-dom";
import React from "react";
import { CardProvider } from "./services/Context";
import Navbar from "./components/Navbar/Navbar";
import planche from "./assets/images/Planchedecoup.jpg";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <CardProvider>
      <Navbar />
      <img src={planche} className="planche" alt="Planche à découper" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CardProvider>
  );
}

export default App;
