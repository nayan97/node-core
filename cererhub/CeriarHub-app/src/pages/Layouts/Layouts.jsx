import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Layouts = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Layouts;