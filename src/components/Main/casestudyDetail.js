import React from 'react';

import HeaderTwo from '../Header/header2.js';

const CaseStudyDetails = () => {

    return (
        <div>
            <HeaderTwo />
            <img src='#' atl='case study title' />
            <h2>Case Study Title</h2>
            <div>
                <h4>Project Pitch</h4>
                <p>This is where the project pitch will go.</p>
            </div>
            <div>
                <h4>Technolog Stack</h4>
                <img src='#' atl='technology images' />
            </div>
            <div>
                <h4>Testimonial</h4>
                <p>this is where a client testamonial will be.</p>
            </div>
            <h4>The Process</h4>
            {/* {Place images here that will show the process taken for the casestudy} */}
        </div>
    )
}

export default CaseStudyDetails