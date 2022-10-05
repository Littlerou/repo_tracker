import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <NavLink className="home-link" to="/" end>Home</NavLink>
            <NavLink  to="/about">About</NavLink>
            <NavLink  to="/search">Search</NavLink>
            <button onClick={() => navigate(-1)}>Back</button>
        </nav>
    );
}

export default NavBar;
