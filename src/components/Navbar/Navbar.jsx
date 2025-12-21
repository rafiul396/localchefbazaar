import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../Logo/Logo';
import useAuth from '../../hooks/useAuth';
import demoProfile from '../../assets/profile.png';
import {
    FaBars,
    FaTimes,
    FaAngleLeft,
    FaAngleRight,
    FaSignOutAlt,
} from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    onClick={() => setSidebarOpen(false)}
                    className="border-2 border-transparent hover:border-2 hover:border-[#442a00] duration-200 oswald"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/meals"
                    onClick={() => setSidebarOpen(false)}
                    className="border-2 border-transparent hover:border-2 hover:border-[#442a00] duration-200 oswald"
                >
                    Meals
                </NavLink>
            </li>
            {user && (
                <li>
                    <NavLink
                        to="/dashboard"
                        onClick={() => setSidebarOpen(false)}
                        className="border-2 border-transparent hover:border-2 hover:border-[#442a00] duration-200 oswald"
                    >
                        Dashboard
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <>
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <header className="bg-primary sticky top-0 z-30 shadow-lg py-2">
                <div className="container mx-auto">
                    <div className="flex h-16 items-center justify-between px-4">

                        {/* Left: Logo + Hamburger (Mobile) */}
                        <div className="w-full lg:w-fit flex items-center gap-4 justify-between">

                            <Link to="/">
                                <Logo logoSize="w-[50px] lg:w-[70px]" mainTextSize="text-xl lg:text-2xl" subTextSize="text-sm lg:text-base" />
                            </Link>

                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="text-accent-content lg:hidden cursor-pointer"
                            >
                                <FaBars size={26} />
                            </button>
                        </div>

                        {/* Center: Nav Links (Desktop only) */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-base xl:text-lg font-semibold space-x-10 text-[#442a00] oswald">
                                {navLinks}
                            </ul>
                        </div>

                        {/* Right: Profile / Login */}
                        <div className="flex items-center gap-4">
                            {user ? (
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
                                <div className="hidden lg:block navbar-end">
                                    <Link className="btn shadow-none text-lg bg-accent-content border-accent-content" to="/login" >Login</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar — Dashboard-এর মতোই */}
            <div
                className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-64'}
          w-64 bg-gradient-to-b from-primary to-accent-content
          fixed inset-y-0 left-0 z-50 transition-all duration-300
          lg:translate-x-0 lg:static lg:inset-auto flex flex-col lg:hidden
        `}
            >
                {/* Sidebar Header */}
                <div className="h-16 flex items-center justify-between px-5 bg-primary bg-opacity-20">
                    <div className={`flex items-center text-white ${sidebarCollapsed ? 'lg:justify-center' : ''}`}>
                        {!sidebarCollapsed && user ? (
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL || demoProfile} alt="Profile" />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-medium">{user.displayName || 'User'}</p>
                                    <p className="text-xs opacity-80">{user.email}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="lg:block">
                                <Link onClick={() => setSidebarOpen(false)} className="btn shadow-none text-lg bg-accent-content border-accent-content" to="/login" >Login</Link>
                            </div>
                        )}
                    </div>

                    {/* Collapse Button (Desktop) */}
                    <button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="hidden lg:block text-white hover:bg-white hover:bg-opacity-20 p-2 rounded"
                    >
                        {sidebarCollapsed ? <FaAngleRight size={20} /> : <FaAngleLeft size={20} />}
                    </button>

                    {/* Close Button (Mobile) */}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden text-accent-content cursor-pointer"
                    >
                        <FaTimes size={26} />
                    </button>
                </div>

                {/* Sidebar Menu */}
                <nav className="flex-1 mt-8 px-4 overflow-y-auto">
                    <ul className="space-y-2">
                        {navLinks}
                    </ul>
                </nav>

                {/* Logout */}
                {user && (
                    <div className="p-4 border-t border-white border-opacity-20">
                        <button
                            onClick={logOut}
                            className="flex items-center w-full text-[#442a00] hover:text-red-500 transition group"
                        >
                            <FaSignOutAlt size={22} />
                            <span className={`ml-4 font-medium ${sidebarCollapsed ? 'lg:hidden' : ''}`}>
                                Logout
                            </span>
                            {sidebarCollapsed && (
                                <span className="ml-4 hidden group-hover:inline-block absolute left-20 bg-gray-800 text-white text-sm px-3 py-1 rounded">
                                    Logout
                                </span>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;