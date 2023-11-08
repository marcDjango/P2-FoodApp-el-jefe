import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Thinkabout from "./pages/Thinkabout";
import Categorie from "./pages/Categorie";
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
        element: <Aboutus />,
      },
      {
        path: "/nutriscore",
        element: <Nutriscore />,
      },
      {
        path: "/thinkabout",
        element: <Thinkabout />,
      },
      {
        path: "/categorie",
        element: <Categorie />,
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
