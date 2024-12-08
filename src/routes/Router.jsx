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
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://visa-navigator-server-three.vercel.app/visa"),
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
        loader: () =>
          fetch("https://visa-navigator-server-three.vercel.app/visa"),
      },
      {
        path: "/visa/:id",
        element: (
          <PrivateRoute>
            <VisaDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          fetch(
            `https://visa-navigator-server-three.vercel.app/visa/${params.id}`
          );
        },
      },
      {
        path: "/myaddedvisas",
        element: (
          <PrivateRoute>
            <MyAddedVisa />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://visa-navigator-server-three.vercel.app/visa"),
      },
      {
        path: "/myvisaapplication",
        element: (
          <PrivateRoute>
            <MyVisaApplication />
          </PrivateRoute>
        ),
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
