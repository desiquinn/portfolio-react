import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {

    return (
        <section>
            <div>
                <img src='#' atl='New Projects' />
                <h4>New Projects</h4>
                <p>Call to action Message goes here!</p>
                <Link to="/newproject"><button>Let's Talk</button></Link>
            </div>
            <div>
                <img src='#' atl='Hire Me' />
                <h4>Hire Me</h4>
                <p>Call to action Message goes here!</p>
                <Link to="/contact"><button>Let's Talk</button></Link>
            </div>
        </section>
    )
}

export default CallToAction