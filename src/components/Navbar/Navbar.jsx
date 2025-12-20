import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../Logo/Logo';
import useAuth from '../../hooks/useAuth';
import demoProfile from '../../assets/profile.png'

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navLinks = <>
        <li><NavLink to="/" className="border-2 border-primary hover:border-2 hover:border-[#442a00] duration-200">Home</NavLink></li>
        <li><NavLink to="/meals" className="border-2 border-primary hover:border-2 hover:border-[#442a00] duration-200">Meals</NavLink></li>
        {
            user && <li><NavLink to="/dashboard" className="border-2 border-primary hover:border-2 hover:border-[#442a00] duration-200">Dashboard</NavLink></li>
        }
    </>

    return (
        <header className='bg-primary py-1' data-aos="fade-down">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div> */}
                    <Logo logoSize="w-[75px]" mainTextSize="text-2xl" subTextSize="text-lg" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base xl:text-lg font-semibold space-x-10 text-[#442a00] oswald">
                        {navLinks}
                    </ul>
                </div>


                {/* dashboard */}
                {/* <button
                    onClick={() => setSidebarOpen(true)}
                    className="text-gray-600 lg:hidden cursor-pointer"
                >
                    <FaBars size={26} />
                </button> */}

                {/* <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2">
                        <FaSearch className="text-gray-500" />
                        <input type="text" placeholder="Search..." className="bg-transparent outline-none ml-2 w-48" />
                    </div>
                    <button className="relative">
                        <FaBell size={24} className="text-gray-600" />
                        <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        A
                    </div>
                </div> */}



                {
                    user ? (
                        <div className="dropdown dropdown-end ml-2 navbar-end space-x-2 hidden md:flex">
                            <button className="btn shadow-none text-lg bg-accent-content border-accent-content" onClick={logOut} >
                                Logout
                            </button>
                            <div tabIndex={0} role="button" className="btn btn-ghost w-14 h-14 btn-circle avatar">
                                <div className="bg-red-400 rounded-full">
                                    <img
                                        alt="profile photo"
                                        src={user.photoURL ? user?.photoURL : demoProfile}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="navbar-end">
                            <Link className="btn shadow-none text-lg bg-accent-content border-accent-content" to="/login" >Login</Link>
                        </div>
                    )
                }
            </div>
        </header>
    );
};

export default Navbar;