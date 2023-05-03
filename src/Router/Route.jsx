import React from 'react';
import Home from '../components/home/Home'
import {createBrowserRouter} from 'react-router-dom'
import { Main } from '../LayOut/Main';
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

export default route;