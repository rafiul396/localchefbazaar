import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Root = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
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