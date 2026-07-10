import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./routes/Home.jsx";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Contact from "./routes/Contact.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
