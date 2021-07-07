import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {

    return (
        <section>
            <div>
                <img src='#' atl='New Projects' />
                <h4>Start a New Project!</h4>
                <p>Collaborate with me to bring your vision to life, increase awareness of your business, 
                    and to make your business more efficient through web design and development.
                </p>
                <Link to="/newproject"><button>Start Here</button></Link>
            </div>
            <div>
                <img src='#' atl='Hire Me' />
                <h4>Need a Full Time Developer?</h4>
                <p>Contact me to schedule an interview and learn how I can bring value to your company as a 
                    Full Stack Web Developer.</p>
                <Link to="/contact"><button>Hire Me</button></Link>
            </div>
        </section>
    )
}

export default CallToAction