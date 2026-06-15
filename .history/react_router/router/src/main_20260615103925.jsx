import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvide, Route, UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "contact",
    element: <UNSAFE_createClientRoutesWithHMRRevalidationOptOut
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
