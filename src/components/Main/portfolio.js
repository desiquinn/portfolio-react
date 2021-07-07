import React from 'react';

import HeaderMain from '../Header/header.js';
import FeaturedProjects from '../Main/featuredProjects.js';
import MyStory from './myStory.js';
import Technology from './tecnology.js';
import CaseStudies from './caseStudies.js';


const Portfolio = () => {

    return (
        <div>
            <HeaderMain />
            <FeaturedProjects />
            <MyStory />
            <Technology />
            <CaseStudies />
        </div>
    )
}

export default Portfolio