import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./routes/Home.jsx";

//!Configurando Router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Contact from "./routes/Contact.jsx";
//! Rota dinâmica
import Product from "./routes/Product.jsx";
//! Nested route 
import Info from "./routes/Info.jsx";

//! Search params
import Search from "./routes/Search.jsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    //! Componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      //! Rota dinâmica
      {
        path: "products/:id",
        element: <Product />,
      },
      //! Netsted route
      {
        path: "products/:id/info",
        element: <Info />,
      },
      //! Search
      {
        path:"search",
        element: <Search
      } 
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
