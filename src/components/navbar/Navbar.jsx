import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-full bg-base-100 shadow-sm'>
            <div className="navbar max-w-7xl mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/timeline">Timeline</NavLink></li>
                    <li><NavLink to="/stats">Stats</NavLink></li>
                    
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;