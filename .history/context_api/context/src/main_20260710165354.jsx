import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./routes/Home.jsx";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Contact from "./routes/Contact.jsx";

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
        path: "search",
        element: <Search />,
      },
      //! Redirect
      {
        path:"teste",
        element: <Navigate to="/"/>
      } 
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
