import React from 'react';
import Home from '../components/home/Home'
import {createBrowserRouter} from 'react-router-dom'
import { Main } from '../LayOut/Main';
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

export default route;