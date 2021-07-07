import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <img src="#" atl="Desi Quinn Logo" />
            <ul>
                <li><NavLink to="/">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                {/* <li>Resume</li> */}
                {/* <li>Website</li> */}
            </ul>
            <img src="#" atl="Call me 7048192526" />
            <img src="#" atl="Email me desiquinncompany@gmail.com" /> 
        </nav>
    )
}

export default NavBar