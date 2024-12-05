import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import AddVisa from "../pages/AddVisa";
import AllVisa from "../components/AllVisa";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
