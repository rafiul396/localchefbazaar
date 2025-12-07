import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/meals">Meals</NavLink></li>
        <li><NavLink>Dashboard</NavLink></li>
    </>
    return (
        <header className='bg-primary py-1' data-aos="fade-down">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className='flex items-center gap-2 cursor-pointer'href='/' >
                        <img
                            src={logo}
                            alt="amar kitchen logo"
                            className='w-[80px]'
                        />
                        <div>
                            <h3 className='berkshire-swash-regular font-semibold text-3xl text-[#442a00]'>
                                Amar Kitchen
                            </h3>
                            <p className='text-lg text-yellow-500 oswald'>
                                Food & Drink
                            </p>
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base xl:text-lg font-semibold space-x-10 text-[#442a00] oswald">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn shadow-none text-lg bg-accent-content border-accent-content"to="/login" >Login</Link>
                </div>
                <div className="dropdown dropdown-end ml-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost w-14 h-14 btn-circle avatar">
                        <div className="bg-red-400 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;