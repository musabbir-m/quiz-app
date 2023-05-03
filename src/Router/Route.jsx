import React from 'react';
import Home from '../components/home/Home'
import {createBrowserRouter} from 'react-router-dom'
import { Main } from '../LayOut/Main';
<<<<<<< HEAD
import AllCategory from "../components/home/categories/AllCategory";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allCategory",
        element: <AllCategory></AllCategory>,
      },
    ],
  },
]);
=======
import Feature from '../components/Feature/Feature';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup'

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login> </Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/features',
                element: <Feature></Feature>
            }
        ]
    }]
)
>>>>>>> 7ff432ca6a4eabf08590fc25f9c97af30b079f55

export default route;