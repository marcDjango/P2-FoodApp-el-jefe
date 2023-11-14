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
import RecipeDetail from "./pages/RecipeDetail";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
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
        path: "/RecipeDetail",
        element: <RecipeDetail />,
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
