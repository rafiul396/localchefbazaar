import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import Footer from '../components/Footer/Footer';

const Root = () => {
    const { submissionLoader } = useAuth();
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    if (submissionLoader) {
        return <h1>Sub...</h1>
    }

    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;