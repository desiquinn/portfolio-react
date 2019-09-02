import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {

    return (
        <header>
            {/* {Background will be a large picture} */}
            <img src="#" atl="Desi Quinn Logo" />
            <h2>Portfolio</h2>
            <p>This is where the call to action text will be.</p>
            <Link to="/newproject"><button>New Project</button></Link>
            <Link to="/contact"><button>Hire Me</button></Link>
        </header>
    )
}

export default HeaderMain