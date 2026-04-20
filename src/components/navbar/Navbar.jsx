import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { FaHeart, FaUserFriends, FaChartLine, FaClock, FaBars, FaTimes } from 'react-icons/fa';
import { GiRose, GiLipstick } from 'react-icons/gi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='w-full bg-gradient-to-r from-pink-50 via-rose-50 to-purple-50 shadow-lg border-b border-pink-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90'>
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                {/* Logo/Brand Section */}
                <div className="flex-1">
                    <NavLink 
                        to="/" 
                        className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
                        onClick={closeMenu}
                    >
                        <div className="relative">
                            <FaHeart className="text-pink-500 text-2xl animate-pulse" />
                            <GiRose className="text-rose-400 text-xl absolute -top-2 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div>
                            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
                                BestieCircle
                            </span>
                            <span className="text-xs text-pink-400 ml-1 hidden sm:inline-block">✨</span>
                        </div>
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => 
                                    isActive 
                                        ? "group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md transition-all duration-300" 
                                        : "group flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
                                }
                            >
                                <FaUserFriends className="text-sm" />
                                <span>Home</span>
                                {({ isActive }) => isActive && (
                                    <FaHeart className="text-white text-xs animate-pulse" />
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/timeline"
                                className={({ isActive }) => 
                                    isActive 
                                        ? "group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md transition-all duration-300" 
                                        : "group flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
                                }
                            >
                                <FaClock className="text-sm" />
                                <span>Timeline</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/stats"
                                className={({ isActive }) => 
                                    isActive 
                                        ? "group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md transition-all duration-300" 
                                        : "group flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
                                }
                            >
                                <FaChartLine className="text-sm" />
                                <span>Stats</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex-none">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white/95 backdrop-blur-sm border-t border-pink-100 shadow-lg">
                    <ul className="flex flex-col p-4 space-y-2">
                        <li>
                            <NavLink
                                to="/"
                                onClick={closeMenu}
                                className={({ isActive }) => 
                                    isActive 
                                        ? "flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white transition-all duration-300" 
                                        : "flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300"
                                }
                            >
                                <FaUserFriends className="text-lg" />
                                <span className="font-medium">Home</span>
                                {({ isActive }) => isActive && (
                                    <FaHeart className="ml-auto text-white text-sm animate-pulse" />
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/timeline"
                                onClick={closeMenu}
                                className={({ isActive }) => 
                                    isActive 
                                        ? "flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white transition-all duration-300" 
                                        : "flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300"
                                }
                            >
                                <FaClock className="text-lg" />
                                <span className="font-medium">Timeline</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/stats"
                                onClick={closeMenu}
                                className={({ isActive }) => 
                                    isActive 
                                        ? "flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white transition-all duration-300" 
                                        : "flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300"
                                }
                            >
                                <FaChartLine className="text-lg" />
                                <span className="font-medium">Stats</span>
                            </NavLink>
                        </li>

                        {/* Decorative element for mobile menu */}
                        <li className="pt-4 mt-2 border-t border-pink-100">
                            <div className="flex justify-center gap-2 text-pink-300">
                                <GiLipstick className="text-pink-400" />
                                <FaHeart className="animate-pulse" />
                                <GiRose className="text-pink-400" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;