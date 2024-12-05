import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import AddVisa from "./pages/AddVisa.jsx";
import AllVisa from "./components/AllVisa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/visa"),
      },
      {
        path: "/addvisa",
        element: <AddVisa />,
      },
      {
        path: "/allvisas",
        element: <AllVisa />,
        loader: () => fetch("http://localhost:5000/visa"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
