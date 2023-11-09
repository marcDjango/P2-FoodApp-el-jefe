import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import ThinkAbout from "./pages/Thinkabout";
import Category from "./pages/Category";
import Nutriscore from "./pages/Nutriscore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/nutriscore",
        element: <Nutriscore />,
      },
      {
        path: "/thinkabout",
        element: <ThinkAbout />,
      },
      {
        path: "/category/:type",
        element: <Category />,
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
