import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvide, Route } from "react-router-dom";
import Contact from "./routes/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "contact",
    element: <Contact/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
