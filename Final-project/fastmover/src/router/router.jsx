import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      }
    ]
  },
  {
        path: "/",
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login 
      },
      {
        path: 'register',
        Component: Register
      }
    ]

  }
]);
