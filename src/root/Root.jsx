import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Root = () => {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Root;