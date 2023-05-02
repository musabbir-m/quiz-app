import React from 'react';
import Home from '../components/home/Home'
import {createBrowserRouter} from 'react-router-dom'
import { Main } from '../LayOut/Main';

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }]
)

export default route;