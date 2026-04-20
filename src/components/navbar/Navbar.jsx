import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-full bg-base-100 shadow-sm'>
            <div className="navbar max-w-7xl mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Friends</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink
                     to="/"
                     className={({isActive}) => isActive ? "active-link text-red-500" : "inactive-link"}
                     >Home</NavLink></li>
                    <li><NavLink 
                    to="/timeline"
                    className={({isActive}) => isActive ? "active-link text-red-500" : "inactive-link"}
                    >Timeline</NavLink></li>
                    <li><NavLink
                     to="/stats"
                     className={({isActive}) => isActive ? "active-link text-red-500" : "inactive-link"}
                     >Stats</NavLink></li>
                    
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;