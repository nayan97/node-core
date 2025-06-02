import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import Layouts from '../pages/Layouts/Layouts';
import Home from '../pages/Home/Home'
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/login';
import JobsDetails from '../pages/Home/JobsDetails/JobsDetails';

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
        path: "/jobs/:id",
        Component: JobsDetails,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
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

// @@qwe121qwe$$