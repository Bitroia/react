import React from "react";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { HookUseContext } from "./hooks/HookUseContext.jsx";

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
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HookUseContext></HookUseContext>
    <RouterProvider router={router} />
  </StrictMode>,
);
