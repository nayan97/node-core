import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Layouts = () => {
    return (
        <div>
            <Header></Header>
                <div className="bg-pink-50">
                    <div className="w-7xl mx-auto p-8 pt-0">
                        <Outlet></Outlet>
                    </div>
                </div>
            <Footer></Footer>

        </div>
    );
};

export default Layouts;