import React from 'react';
import { NavLink } from 'react-router-dom';
//Navigation buttons that will take you to different displays of pictures
const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/sunsets'>Sunsets</NavLink></li>
            <li><NavLink to='/waterfalls'>Waterfalls</NavLink></li>
            <li><NavLink to='/rainbows'>Rainbows</NavLink></li>
        </ul>
    </nav>
);
export default Nav;

