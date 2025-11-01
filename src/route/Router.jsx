import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/authentication",
    Component: AuthLayout,
    children: [
      {
        path: "/authentication/login",
        Component: Login,
      },
      {
        path: "/authentication/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
