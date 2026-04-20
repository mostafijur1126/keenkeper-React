import React from 'react';
import { FaHeart, FaUserFriends, FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaGithub } from 'react-icons/fa';
import { GiRose, GiLipstick, GiCharm } from 'react-icons/gi';
import { NavLink } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-gradient-to-br from-pink-900 via-rose-900 to-purple-900 text-white mt-16'>
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
                    
                    {/* Brand Section */}
                    <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <FaHeart className='text-pink-400 text-2xl animate-pulse' />
                            <GiRose className='text-rose-400 text-2xl' />
                            <h2 className='text-2xl font-bold bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent'>
                                BestieCircle
                            </h2>
                        </div>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                            Nurturing meaningful connections and celebrating the beautiful bonds of friendship. Your personal space for cherished relationships.
                        </p>
                        <div className='flex gap-3 pt-2'>
                            <a href="#" className='bg-white/10 p-2 rounded-full hover:bg-pink-500 transition-all duration-300 hover:scale-110'>
                                <FaFacebook className='text-pink-300' />
                            </a>
                            <a href="#" className='bg-white/10 p-2 rounded-full hover:bg-pink-500 transition-all duration-300 hover:scale-110'>
                                <FaTwitter className='text-pink-300' />
                            </a>
                            <a href="#" className='bg-white/10 p-2 rounded-full hover:bg-pink-500 transition-all duration-300 hover:scale-110'>
                                <FaInstagram className='text-pink-300' />
                            </a>
                            <a href="#" className='bg-white/10 p-2 rounded-full hover:bg-pink-500 transition-all duration-300 hover:scale-110'>
                                <FaPinterest className='text-pink-300' />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="footer-title text-pink-300 text-lg font-bold mb-4 flex items-center gap-2">
                            <GiCharm className='text-pink-400' />
                            Quick Links
                        </h6>
                        <ul className='space-y-2'>
                            <li>
                                <NavLink to="/" className='text-gray-300 hover:text-pink-300 transition-colors duration-300 flex items-center gap-2 group'>
                                    <FaHeart className='text-pink-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity' />
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/timeline" className='text-gray-300 hover:text-pink-300 transition-colors duration-300 flex items-center gap-2 group'>
                                    <FaHeart className='text-pink-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity' />
                                    Timeline
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stats" className='text-gray-300 hover:text-pink-300 transition-colors duration-300 flex items-center gap-2 group'>
                                    <FaHeart className='text-pink-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity' />
                                    Statistics
                                </NavLink>
                            </li>
                            <li>
                                <a href="#" className='text-gray-300 hover:text-pink-300 transition-colors duration-300 flex items-center gap-2 group'>
                                    <FaHeart className='text-pink-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity' />
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h6 className="footer-title text-pink-300 text-lg font-bold mb-4 flex items-center gap-2">
                            <FaEnvelope className='text-pink-400' />
                            Contact Us
                        </h6>
                        <ul className='space-y-3'>
                            <li className='flex items-start gap-3 text-gray-300 hover:text-pink-300 transition-colors'>
                                <FaMapMarkerAlt className='text-pink-400 mt-1 flex-shrink-0' />
                                <span className='text-sm'>123 Friendship Lane,<br />Bestie City, BC 12345</span>
                            </li>
                            <li className='flex items-center gap-3 text-gray-300 hover:text-pink-300 transition-colors'>
                                <FaPhone className='text-pink-400' />
                                <span className='text-sm'>+8801234567890</span>
                            </li>
                            <li className='flex items-center gap-3 text-gray-300 hover:text-pink-300 transition-colors'>
                                <FaEnvelope className='text-pink-400' />
                                <span className='text-sm'>hello@bestiecircle.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h6 className="footer-title text-pink-300 text-lg font-bold mb-4 flex items-center gap-2">
                            <GiLipstick className='text-pink-400' />
                            Stay Connected
                        </h6>
                        <p className='text-gray-300 text-sm mb-3'>
                            Get friendship tips and updates in your inbox!
                        </p>
                        <div className='flex flex-col gap-2'>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className='px-4 py-2 rounded-full bg-white/10 border border-pink-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors'
                            />
                            <button className='bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'>
                                <FaHeart className='animate-pulse' />
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative Divider */}
                <div className='relative my-8'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-pink-400/30'></div>
                    </div>
                    <div className='relative flex justify-center'>
                        <span className='bg-gradient-to-br from-pink-900 via-rose-900 to-purple-900 px-4 text-pink-400'>
                            <GiRose className='text-2xl' />
                        </span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left'>
                    <p className='text-gray-400 text-sm'>
                        © {currentYear} BestieCircle. All rights reserved. Made with{' '}
                        <FaHeart className='inline-block text-pink-400 animate-pulse mx-1' />
                        for besties everywhere
                    </p>
                    <div className='flex gap-6 text-sm'>
                        <a href="#" className='text-gray-400 hover:text-pink-300 transition-colors'>Privacy Policy</a>
                        <a href="#" className='text-gray-400 hover:text-pink-300 transition-colors'>Terms of Service</a>
                        <a href="#" className='text-gray-400 hover:text-pink-300 transition-colors'>Cookie Policy</a>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Border */}
            <div className='h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400'></div>
        </footer>
    );
};

export default Footer;