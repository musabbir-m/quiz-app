import React from 'react';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import {Outlet} from 'react-router-dom'

export const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};
