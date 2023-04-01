import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/review">REVIEW</NavLink>
            <NavLink to="/dashboard">DASHBOARD</NavLink>
            <NavLink to="/blogs">BLOGS</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
        </nav>
    );
};

export default Header;