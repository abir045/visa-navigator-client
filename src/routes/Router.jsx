import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import AddVisa from "../pages/AddVisa";
import AllVisa from "../components/AllVisa";
import Register from "../pages/Register";
import Login from "../pages/Login";
import VisaDetails from "../pages/VisaDetails";
import MyAddedVisa from "../pages/MyAddedVisa";
import PrivateRoute from "./PrivateRoute";
import UpdateVisa from "../components/UpdateVisa";
import MyVisaApplication from "../pages/MyVisaApplication";

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

        element: (
          <PrivateRoute>
            {" "}
            <AddVisa />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/allvisas",
        element: <AllVisa />,
        loader: () => fetch("http://localhost:5000/visa"),
      },
      {
        path: "/visa/:id",
        element: (
          <PrivateRoute>
            <VisaDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          fetch(`http://localhost:5000/visa/${params.id}`);
        },
      },
      {
        path: "/myaddedvisas",
        element: <MyAddedVisa />,
        loader: () => fetch("http://localhost:5000/visa"),
      },
      {
        path: "/myvisaapplication",
        element: <MyVisaApplication />,
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
