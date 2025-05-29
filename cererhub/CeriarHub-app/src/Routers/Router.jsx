import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layouts from '../pages/Layouts/Layouts';
import Home from '../pages/Home/Home'

export const router = createBrowserRouter([
  {
    path: "/",
  Component: Layouts,
  children: [
    {
      index: true, 
      Component: Home
    }
  ]
 
  },
]);

