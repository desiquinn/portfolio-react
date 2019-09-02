import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {

    return (
        <header>
            {/* {Background will be a large picture} */}
            <img src="#" atl="Desi Quinn Logo" />
            <h2>Portfolio</h2>
            <p>My mission is to make great technology available to small businesses through web development and design.  
            I am currently looking for a full-time position as a Full Stack Web Developer.  
            Also looking for exciting new projects to join. </p>
            <Link to="/newproject"><button>New Projects</button></Link>
            <Link to="/contact"><button>Employers</button></Link>
        </header>
    )
}

export default HeaderMain