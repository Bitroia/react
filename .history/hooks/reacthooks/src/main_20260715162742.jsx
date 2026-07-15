
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Contact from "./routes/Contact.jsx";

//! Contexto mais complexo
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";

//! Criando o provider
import { CounterContextProvider } from "./context/CounterContext.jsx";

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router} />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
);
