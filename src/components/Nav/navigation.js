import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <img src="#" atl="Desi Quinn Logo" />
            <ul>
                <li><Link to="/">Portfolio</Link></li>
                {/* <li>Resume</li> */}
                {/* <li>Website</li> */}
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <img src="#" atl="Call me 7048192526" />
            <img src="#" atl="Email me desiquinncompany@gmail.com" /> 
        </nav>
    )
}

export default NavBar