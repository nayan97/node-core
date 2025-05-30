import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import Layouts from '../pages/Layouts/Layouts';
import Home from '../pages/Home/Home'
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/login';

export const router = createBrowserRouter([
  {
    path: "/",
  Component: Layouts,
  children: [
    {
      index: true, 
      Component: Home
    },
    {
      path: "/register",
      Component: Register
    },

    {
      path: "/login",
      Component: Login
    }
  ]
 
  },
]);

