import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Layouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Layouts;