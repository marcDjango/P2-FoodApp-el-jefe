import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NutriScore from "./pages/NutriScore";
import Tomorrow from "./pages/Tomorrow";
import Category from "./pages/Category";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/nutriscore",
        element: <NutriScore />,
      },
      {
        path: "/tomorrow",
        element: <Tomorrow />,
      },
      {
        path: "/category/:type",
        element: <Category />,
      },
      {
        path: "/Search/:query",
        element: <Search />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
